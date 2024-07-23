<?php
session_start();
require "../connection.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    $name = $data["name"];
    $description = $data["description"];
    $ingredients = $data["ingredients"];
    $steps = $data["steps"];
    $user_id = 1;

    

    $stmt = $connection->prepare('insert into recipes (name,description,ingredients,steps,user_id) 
values (?,?,?,?,?);');
    $stmt->bind_param('ssssi', $name, $description, $ingredients,$steps,$user_id);
    try {
        $stmt->execute();
        echo json_encode(["message" => "new recipe created","status"=>"success"]);
    } catch (Exception $e) {
        echo json_encode(["error" => $stmt->error]);
    }
} else {
    echo json_encode(["error" => "Wrong request method"]);
}
