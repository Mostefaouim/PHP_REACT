<?php 
    include_once '../config/db.php';
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    $data = json_decode(file_get_contents("php://input"));
    $name = $data->name;
    $email = $data->email;
    $id = $data->id;
    if(!empty($name) && !empty($email) && !empty($id)) {
        $verify_email = "SELECT * FROM users WHERE email = '$email' AND id != '$id'";
        $result = mysqli_query($conn, $verify_email);
        if (mysqli_num_rows($result) > 0) {
            echo json_encode(["message" => "Email already exists"]);
            exit();
        }
        $sql = "UPDATE users SET name='$name', email='$email' WHERE id='$id'";
        if (mysqli_query($conn, $sql)) {
            echo json_encode(["message" => "User updated successfully"]);
        } else {
            echo json_encode(["message" => "Failed to update user"]);
        }
    } else {
        echo json_encode(["message" => "Invalid input"]);
    }
    mysqli_close($conn);
