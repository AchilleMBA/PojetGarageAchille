<?php

$hostName = "localhost";
$dbUser = "root";
$dbPassword = "root";
$dbName = "GARAGE V PARROT";
$conn = mysqli_connect($hostName, $dbUser, $dbPassword, $dbName);
if (!$conn) {
    die("Une erreur a été détecté");
}

?>