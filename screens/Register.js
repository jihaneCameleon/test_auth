import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React,{useState} from 'react';
import Input from '../components/TextInput';
import FormButton from '../components/Button';
import deviceStorage from '../services/deviceStorage';
import axios from 'axios';

const Register = () => {

  const [civilite,setCivilite]=useState('');
  const [nom,setNom]=useState('');
  const [prenom,setPrenom]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [photo,setPhoto]=useState('');
  const [ville,setVille]=useState('');
  const [adresse,setAdresse]=useState('');

  const [message,setMessage]=useState({
    text:'',
    color:''
  });

  const [error,setError]=useState({
    error:'',
    loading:true
  })

  const inputHandler= () =>{
  //   if(!civilite.trim()){
  //   setMessage({text:'Please set a valid civilite' ,color:'red'});
  // }
  
  // else if(!nom.trim()){
  //   setMessage({text:'Please set a valid nom' ,color:'red'});
  // }

  // else if(!prenom.trim()){
  //   setMessage({text:'Please set a valid prenom' ,color:'red'});
  // }

  // else if(!email.trim()){
  //   setMessage({text:'Please set a valid email',color:'red'});
  // }

  // else if(!password.trim()){
  //   setMessage({text:'Please set a valid password',color:'red'});
  // }

  // else if(!photo.trim()){
  //   setMessage({text:'Please set a valid photo',color:'red'});
  // }

  // else if(!ville.trim()){
  //   setMessage({text:'Please set a valid ville',color:'red'});
  // }

  // else if(!adresse.trim()){
  //   setMessage({text:'Please set a valid adresse',color:'red'});
  // }

  // else{
    // axios.post("localhost/api/register.php",{
    //   user: {
    //     civilite: civilite,
    //     nom:nom,
    //     prenom:prenom,
    //     email,email,
    //     password: password,
    //     photo:photo,
    //     ville:ville,
    //     adresse:adresse
    //   }
    // },)
    // .then((response) => {
    //   console.log(response)
    // })
    // .catch((error) => {
    //    // Handle returned errors here
    // });


    const url = 'http://10.0.2.2:80/api/register1.php';
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      
      
    };

    const data={
    "civilite":civilite,
    "nom":nom,
    "prenom":prenom,
    "email":email,
    "password":password,
    "photo":photo,
    "ville":ville,
    "adresse":adresse
    }
    fetch(url,
      {
        method:'POST',
        headers:headers,
        body:JSON.stringify(data)
      }
      )
      .then((response)=>response.json())
      .then((response)=>{
        alert(response);
        alert(response[0].message);
        
      })
      .catch((err)=>{
        alert("error"+err);
      })
  


}



  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Register</Text>
          <Text style={styles.text}>Enter your details to register</Text>
        </View>
        <View style={styles.inputContainer}>
        <Text >{message.text}</Text>
          <Input placeholder="Civilite" type="default" autoComplete="name" style={styles.input} value={civilite} onChangeText={value=>setCivilite(value)} />
          <Input placeholder="Nom" type="default" autoComplete="name" style={styles.input} value={nom} onChangeText={value=>setNom(value)} />
          <Input placeholder="Prenom" type="default" autoComplete="name" style={styles.input} value={prenom} onChangeText={value=>setPrenom(value)} />
          <Input placeholder="Email" type="default" autoComplete="email" style={styles.input} value={email} onChangeText={value=>setEmail(value)} />
          <Input placeholder="Password" type="default" autoComplete="password" style={styles.input} value={password} onChangeText={value=>setPassword(value)} />
          <Input placeholder="Photo" type="default" autoComplete="name" style={styles.input} value={photo} onChangeText={value=>setPhoto(value)} />
          <Input placeholder="Ville" type="default" autoComplete="name" style={styles.input} value={ville} onChangeText={value=>setVille(value)} />
          <Input placeholder="Adresse" type="default" autoComplete="street-address" style={styles.input} value={adresse} onChangeText={value=>setAdresse(value)} />
          <FormButton title="Register" onPress={inputHandler} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    justifyContent:'space-between'
  },
  header:{
    alignItems:"center"
  },
  headerText: {
    marginVertical:20,
    fontSize: 40,
    fontWeight: 'bold',
  },
  inputContainer: {
    alignItems:'center',
    marginHorizontal:20,
    marginVertical:20
  },
  text: {},
  input:{
    borderRadius:5,
    borderWidth:2,
    borderColor:'lightblue'
  }
});

export default Register