<?php
$servername="localhost";
$username="root";
$password="";
$db_name="recipe app";

$connection = new mysqli($servername,$username,$password,$db_name);

if($connection->connect_error){
    die("connection failed".$connection->connect_error);
}else{
}