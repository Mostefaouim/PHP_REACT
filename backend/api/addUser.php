<?php
include_once '../config/db.php';
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
$data = json_decode(file_get_contents("php://input"));

if (!empty($data->name) && !empty($data->email)) {
    $name = mysqli_real_escape_string($conn, $data->name);
    $email = mysqli_real_escape_string($conn, $data->email);
    $verify_email = "SELECT * FROM users WHERE email = '$email'";
    $result = mysqli_query($conn, $verify_email);
    if (mysqli_num_rows($result) > 0) {
        echo json_encode(["message" => "Email already exists"]);
        exit();
    }
    $sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
    if (mysqli_query($conn, $sql)) {
        echo json_encode(["message" => "User added successfully"]);
    } else {
        echo json_encode(["message" => "Failed to add user"]);
    }
} else {
    echo json_encode(["message" => "Invalid input"]);
}
?>
