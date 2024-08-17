<?php
include('DB_Conn.php');
header('Access-Control-Allow-Origin: *'); // Allows all origins
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $json_data = file_get_contents('php://input', true);
    $data = json_decode($json_data);

    $id = $data->idColumnValue;
    $idColumnName = $data->idColumnName;
    $tableName = $data->tableName;

    $deleteQuery = "DELETE FROM $tableName WHERE $idColumnName = $id";
    $deletionResult = mysqli_query($conn, $deleteQuery);

    if ($deletionResult) {

        $numOfRows = mysqli_fetch_row(mysqli_query($conn, "SELECT MAX($idColumnName) FROM $tableName"))[0] + 1;
        mysqli_query($conn, "ALTER TABLE $tableName AUTO_INCREMENT = $numOfRows");

        echo json_encode("Success");
    } else {
        echo json_encode("Error");
    }
}


mysqli_close($conn);
