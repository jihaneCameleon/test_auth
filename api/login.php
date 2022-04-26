<?php

    $conn=mysqli_connect("localhost","root","");
    $db=mysqli_select_db($conn,"user_db");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,TRUE);

    $email=$password=$message=$success="";

    $email = ($DecodedData['email']);
    $password = ($DecodedData['password']);

    $query = "select * from user where email = '$email'";
    $result = mysqli_query($conn, $query);
    $resultCheck =  mysqli_num_rows($result);

    if ($resultCheck != 0) {

        $data = mysqli_fetch_array($result);
        if ($data['password'] != $password) {
            $message = "wrong password";
        }
        else{
            $success='you are logged in';
        }
    } else {
        $message = "there is no account for this email";
    }
    
    $response[]=array("message" => $message,"success"=>$success,"data"=>$data);

    echo json_encode($response);