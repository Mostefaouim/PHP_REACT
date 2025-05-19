<?php
    include_once '../config/db.php';
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    if (isset($_GET['id'])) {
        $id = mysqli_real_escape_string($conn, $_GET['id']);

        $sql = "SELECT * FROM users WHERE id = '$id'";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            $user = mysqli_fetch_assoc($result);
            echo json_encode($user); // الصحيح
        } else {
            echo json_encode(["message" => "User not found"]);
        }
    } else {
        echo json_encode(["message" => "No user ID provided"]);
    }

    mysqli_close($conn);
?>
