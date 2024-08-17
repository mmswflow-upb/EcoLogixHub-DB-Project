<?php
include('DB_Conn.php');


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $json_data = file_get_contents('php://input', true);
    $data = json_decode($json_data);


    //We need the table name where we're searching for the data, and the table name of the foreign key
    //We have the column names, and the values of the constraints
    //We only have the name of the searched tabled

    $tableName = $data->tableName;
    $joinedTableName = $data->joinedTableName;

    $column1 = $data->constraints[0][0];
    $value1 = $data->constraints[0][1];
    $column2 = "";
    $value2 = "";


    $searchQuery = "";

    if (count($data->constraints) > 1) {

        //it will have probably only one extra condition
        //that of having a specific foreign key value

        $column2 = $data->constraints[1][0];
        $value2 = $data->constraints[1][1];
    }

    if (isset($joinedTableName) && strlen($joinedTableName) > 0) { //We have to join tables to search for things related to the currently displayed table

        if (isset($column2) && strlen($column2) > 0) { //We are clearly searching items related to the displayed table
            $searchQuery = "SELECT * FROM $tableName INNER JOIN $joinedTableName ON $tableName.$column2 = $joinedTableName.$column2 WHERE $tableName.$column1 LIKE '%" . $value1 . "%' AND $tableName.$column2 = $value2;";
        } else { //We are navigating from table to table using the nav buttons (not searching)
            $searchQuery = "SELECT * FROM $tableName LEFT JOIN $joinedTableName ON $tableName.$column1 = $joinedTableName.$column1 WHERE $tableName.$column1 = $value1;";
        }
    } else { //We are searching for items not related to any other table (No table is currently displayed)
        $searchQuery = "SELECT * FROM $tableName WHERE $column1 LIKE '%" . $value1 . "%'";
    }

    $appliedQuery = mysqli_query($conn, $searchQuery);
    $result = mysqli_fetch_all($appliedQuery);

    echo json_encode($result);
}

mysqli_close($conn);
