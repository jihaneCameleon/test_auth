<?php

    $conn=mysqli_connect("localhost","root","");
    $db=mysqli_select_db($conn,"user_db");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,TRUE);

    $civilite=$nom=$prenom=$email=$password=$photo=$ville=$adresse=$message=$success="";

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
        $success="User has been registered successfully";
    }
    else{
        $message="server Error";
    }
    $response[]=array("message" => $message,"success"=>$success);

    echo json_encode($response);