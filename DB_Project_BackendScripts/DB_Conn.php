<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ecologixhub";

// Create connection
try {
    $conn = new mysqli($servername, $username, $password, $dbname);
} catch (mysqli_sql_exception $e) {
    echo "Connection failed: " . $e->getMessage();
}

//THIS ALLOWS ANGULAR TO CONNECT TO PHP SCRIPTS
header('Access-Control-Allow-Origin: *'); // Allows all origins
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
