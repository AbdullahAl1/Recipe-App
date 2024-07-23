<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
require "../connection.php";
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $id = $data['id'];

    $stmt=$connection->prepare('select * from recipes where id_recipe=?;');
    $stmt->bind_param('i',$id);
    $stmt->execute();
    $result=$stmt->get_result();
    if ($result->num_rows>0){
        $recipe=$result->fetch_assoc();
        echo json_encode(["recipe"=>$recipe]);
    } else {
        echo json_encode(["message"=>"no records were found"]);
    }
} else {
    echo json_encode(["error" => "Wrong request method"]);
}