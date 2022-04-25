<?php

    $conn=mysqli_connect("localhost", "root","","user_db");

    $civilite=$nom=$prenom=$email=$password=$photo=$ville=$adresse="";


    if(isset($_POST['civilite']
    ,$_POST['nom']
    ,$_POST['prenom']
    ,$_POST['email']
    ,$_POST['password']
    ,$_POST['photo']
    ,$_POST['ville']
    ,$_POST['adresse'])){

   $civilite=$_POST['civilite'];
    $nom=$_POST['nom'];
    $prenom=$_POST['prenom'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $photo=$_POST['photo'];
    $ville=$_POST['ville'];
    $adresse=$_POST['adresse'];

     $query="insert into user(civilite,nom,prenom,email,password,photo,ville,adresse) values('$civilite','$nom','$prenom','$email','$password','$photo','$ville','$adresse')";

    $result=mysqli_query($conn,$query);

    if($result){
        $message="user is registered";
    }
    else{
        $message="error";
    }

    }
    else{
         $message="post not set";
    }

    //  $civilite='civilite';
    // $nom='nom';
    // $prenom='prenom';
    // $email='email';
    // $password='password';
    // $photo='photo';
    // $ville='ville';
    // $adresse='adresse';

   

    echo json_encode($message);