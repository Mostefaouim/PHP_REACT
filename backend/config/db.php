<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    $conn = mysqli_connect("localhost", "root", "", "users");
?>