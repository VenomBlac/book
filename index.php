<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbanme = "bookings";
$conn = new mysqli($servername,$username,$password,$dbanme);

if($conn->connect_error){
    die("Connection Failed:" .$conn->connect_error);

}
//Handle form submission
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = $_POST["name"];
    $movie = $_POST["movie"];
    $destination = $_POST["destination"];
    $date = $_POST["date"];

    //prepare and execute the database insertion
    $sql = "INSERT INTO `booking`(`name`, `movie`, `destination`, `date`)
     VALUES ('$name','$movie','$destination','$date')";

     if($conn->query($sql) == TRUE){
        echo "Booking Successfully";
     }else{
        echo "Error: " .$sql . "<br>" .$conn->error; 
     }
}
$conn->close();
?>