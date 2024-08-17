<?php
include("DB_Conn.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $json_data = file_get_contents('php://input', true);
    $data = json_decode($json_data);

    $tableName = $data->tableName;
    $columnNames = $data->columnNames;
    $values = $data->newValues;

    //Changing backslashes to forward slashes in the file path:
    $values[1] = str_replace("\\", "//", $values[1]);

    $insertQuery = "INSERT INTO $tableName(";

    // Go through all columns except for the last one
    for ($i = 1; $i  < count($columnNames) - 1; $i++) {
        $insertQuery .= $columnNames[$i] . ",";
    }

    // Insert the last column separately
    $lastColumn = $columnNames[count($columnNames) - 1];
    $insertQuery .= "$lastColumn)";

    $insertQuery .= " VALUES (";

    for ($i = 1; $i < count($values) - 1; $i++) {
        $tempVal = $values[$i];
        $insertQuery .= "'$tempVal',";
    }
    $lastValue = $values[count($values) - 1];
    $insertQuery .= "'$lastValue')";



    $appliedQuery = mysqli_query($conn, $insertQuery);

    if ($appliedQuery) {

        // Get the id column name
        $idColumnQuery = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '$tableName' AND ORDINAL_POSITION = 1";
        $idColumnResult = mysqli_query($conn, $idColumnQuery);
        $idColumn = mysqli_fetch_assoc($idColumnResult)['COLUMN_NAME'];

        $autoIncrementValueQuery = "SELECT AUTO_INCREMENT FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'ecologixhub' AND TABLE_NAME = '$tableName';";
        $autoIncrementValueResult = mysqli_fetch_row(mysqli_query($conn, $autoIncrementValueQuery))[0];

        $lastInsertedEntryQuery = "SELECT * FROM $tableName WHERE $idColumn = $autoIncrementValueResult - 1";
        $lastInsertedEntryResult = mysqli_query($conn, $lastInsertedEntryQuery);
        if (!$lastInsertedEntryResult) {
            echo json_encode("Error");
            exit();
        }
        $lastInsertedEntry = mysqli_fetch_all($lastInsertedEntryResult)[0];

        echo json_encode($lastInsertedEntry);
    } else {
        echo json_encode("Error");
    }
}

mysqli_close($conn);
