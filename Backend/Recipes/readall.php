<?php
session_start();
header('Access-Control-Allow-Origin: *');
require "../connection.php";
if ($_SERVER['REQUEST_METHOD'] == "GET") {

    $stmt = $connection->prepare('select * from recipes');
    // $stmt->bind_param('i', $price);
    $stmt->execute();
    $result = $stmt->get_result();
    $products = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $products[] = $row;
        }
        echo json_encode(["recipes" => $products]);
    } else {
        echo json_encode(["message" => "no records were found"]);
    }
} else {
    echo json_encode(["error" => "Wrong request method"]);
}
