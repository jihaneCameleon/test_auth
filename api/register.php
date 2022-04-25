<?php

    $conn=mysqli_connect("localhost","root","");
    $db=mysqli_select_db($conn,"user_db");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,TRUE);
    print_r($EncodedData,$DecodedData);

    $civilite=$nom=$prenom=$email=$password=$photo=$ville=$adresse="";

    $civilite=$DecodedData['civilite'];
    $nom=$DecodedData['nom'];
    $prenom=$DecodedData['prenom'];
    $email=$DecodedData['email'];
    $password=$DecodedData['password'];
    $photo=$DecodedData['photo'];
    $ville=$DecodedData['ville'];
    $adresse=$DecodedData['adresse'];


    // $civilite=$_POST['civilite'];
    // $nom=$_POST['nom'];
    // $prenom=$_POST['prenom'];
    // $email=$_POST['email'];
    // $password=$_POST['password'];
    // $photo=$_POST['photo'];
    // $ville=$_POST['ville'];
    // $adresse=$_POST['adresse'];
     

    $query="insert into 
    user(civilite,nom,prenom,email,password,photo,ville,adresse) 
    values ('$civilite','$nom','$prenom','$email','$password','$photo','$ville','$adresse')";

    
    $result=mysqli_query($conn,$query);


    if($result){
        $message="User has been registered successfully";
    }
    else{
        $message="server Error";
    }
    $response[]=array("message" => $message);

    echo json_encode($response);