<?php
session_start();
require '../connection.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === "POST") {

    if(isset($_SESSION['id_user'])){
        echo json_encode(["error" => "loggedIn already","status"=>"failed"]);
        exit();
    }

    $data = file_get_contents("php://input");
    $params = json_decode($data,true);
    
    $email = $params['email'];
    $password = $params['password'];

    // $email = $_POST['email'];
    // $password = $_POST['password'];

    $stmt = $connection->prepare('select id,email,password,username
    from users 
    where email=?');
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $stmt->store_result();
    // this will make you access $id, $email, $hashed_password, $name
    $stmt->bind_result($id, $email, $hashed_password, $username);
    $stmt->fetch();
    $user_exists = $stmt->num_rows;

    if ($user_exists == 0) {
        $res['message'] = "user not found";
        echo json_encode($res);
    } else {
        if (password_verify($password, $hashed_password)) {
            $res['id_user'] = $id;
            $res['username'] = $username;
            $res['email'] = $email;
            $res['status'] = "success";

            $_SESSION['id_user'] = $id;
            $_SESSION['username'] = $username;
            $_SESSION['loggedin'] = true;
            $res['session'] = $_SESSION['id_user'];

            echo json_encode($res);
        } else {
            $res['status'] = "wrong password";
        }
    }
} else {
    echo json_encode(["error" => "Wrong request method"]);
}
