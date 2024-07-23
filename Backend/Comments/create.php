<?php
require "../connection.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    $recipe_id = $data["recipe_id"];
    $user_id = $data["user_id"];
    $comment = $data["comment"];

    $stmt = $connection->prepare('insert into comments (recipe_id,user_id,comment) 
values (?,?,?);');
    $stmt->bind_param('iis', $recipe_id, $user_id, $comment);
    try {
        $stmt->execute();
        echo json_encode(["message" => "new comment created","status"=>"success"]);
    } catch (Exception $e) {
        echo json_encode(["error" => $stmt->error]);
    }
} else {
    echo json_encode(["error" => "Wrong request method"]);
}
