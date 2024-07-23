<?php

require '../connection.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if(isset($_SESSION['id_user'])){
        echo json_encode(["error" => "loggedIn already"]);
        exit();
    }
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $check_email = $connection->prepare('select id from users where username=? or email=?;');
    $check_email->bind_param('ss', $username, $email);
    $check_email->execute();
    $result = $check_email->get_result();

    if ($result->num_rows > 0) {
        echo json_encode(["error" => "Already exists"]);
    } else {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(["error" => "Invalid email format"]);
            exit();
        }

        $hashed_password = password_hash($password, PASSWORD_BCRYPT);
        $stmt = $connection->prepare('insert into users(username,email,password) values (?,?,?); ');
        $stmt->bind_param('sss', $username, $email, $hashed_password);
        $stmt->execute();
        $res['status'] = "success";
        $res['message'] = "inserted successfully";

        $stmt2 = $connection->prepare('select id from users where email=?;');
        $stmt2->bind_param('s', $email);
        $stmt2->execute();
        $stmt2->store_result();
        $stmt2->bind_result($id_user);
        $stmt2->fetch();

        $_SESSION['id_user'] = $id_user;
        $_SESSION['username'] = $username;

        echo json_encode($res);
        //echo json_encode(["status"=>"success","message"=>"inserted successfully"]);
    }
} else {
    echo json_encode(["error" => "Wrong request method"]);
}