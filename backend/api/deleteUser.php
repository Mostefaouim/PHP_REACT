<?php
    include_once '../config/db.php';
    require_once '../config/request_config.php';
    $data = json_decode(file_get_contents("php://input"));
    $id = $_GET['id'];
    $sql = "DELETE FROM users WHERE id = '$id'";
    if (mysqli_query($conn, $sql)) {
        echo json_encode(["message" => "User deleted successfully"]);
    } else {
        echo json_encode(["message" => "Failed to delete user"]);
    }
    mysqli_close($conn);
?>