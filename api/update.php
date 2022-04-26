<?php

    $conn=mysqli_connect("localhost","root","");
    $db=mysqli_select_db($conn,"user_db");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,TRUE);

    $id=$civilite=$nom=$prenom=$email=$password=$photo=$ville=$adresse=$message=$success="";

    $id=$DecodedData['id'];
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
     

    $query="update user set civilite='$civilite',nom='$nom',prenom='$prenom',email='$email',password='$password',photo='$photo',ville='$ville',adresse='$adresse' where id=$id";

    
    $result=mysqli_query($conn,$query);


    if($result){
        $success="User has been updated successfully";
    }
    else{
        $message="server Error";
    }
    $response[]=array("message" => $message,"success"=>$success,"result"=>$result,"query"=>$query);

    echo json_encode($response);