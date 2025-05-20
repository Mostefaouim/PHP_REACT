<?php
    include_once '../config/db.php';
    require_once '../config/request_config.php';
    $sql = "SELECT * FROM users";
    $result = mysqli_query($conn, $sql);
    $users = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $users[] = $row;
    }
    echo json_encode($users);
    mysqli_close($conn);
?>
