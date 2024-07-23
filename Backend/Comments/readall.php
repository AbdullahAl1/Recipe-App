<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
require "../connection.php";
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $recipe_id = $data['recipe_id'];


    $stmt = $connection->prepare('select c.comment, u.username from comments c
    join users u on c.user_id = u.id where c.recipe_id = ?');
    $stmt->bind_param('i', $recipe_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $comments = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $comments[] = $row;
        }
        echo json_encode(["comments" => $comments]);
    } else {
        echo json_encode(["message" => "no records were found"]);
    }
} else {
    echo json_encode(["error" => "Wrong request method"]);
}
