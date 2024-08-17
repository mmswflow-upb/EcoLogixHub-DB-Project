<?php
include('DB_Conn.php');


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $json_data = file_get_contents('php://input', true);
    $data = json_decode($json_data);

    $tableName = $data->tableName;
    $columnNames = $data->columnNames;
    $columnValues = $data->columnValues;

    $updateQuery = "UPDATE $tableName SET ";

    $indexLastColumn = count($columnNames) - 1;

    for ($i = 0; $i < $indexLastColumn; $i++) {

        $tempColumnName = $columnNames[$i];
        $tempColumnValue = $columnValues[$i];
        $updateQuery .= "$tempColumnName = '$tempColumnValue', ";
    }
    $firstColumnName = $columnNames[0];
    $firstColumnValue = $columnValues[0];
    $lastColumnName = $columnNames[$indexLastColumn];
    $lastColumnValue = $columnValues[$indexLastColumn];
    $updateQuery .= "$lastColumnName = '$lastColumnValue' WHERE $firstColumnName = '$firstColumnValue';";

    $updateQueryResponse = mysqli_query($conn, $updateQuery);

    if ($updateQueryResponse) {
        echo json_encode("Success");
    } else {
        echo json_encode("Error");
    }
}

mysqli_close($conn);
