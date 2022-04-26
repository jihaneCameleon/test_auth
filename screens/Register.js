import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React,{useState} from 'react';
import Input from '../components/TextInput';
import FormButton from '../components/Button';
import deviceStorage from '../services/deviceStorage';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';

const Register = () => {

  const navigation = useNavigation();


  const [civilite,setCivilite]=useState('');
  const [nom,setNom]=useState('');
  const [prenom,setPrenom]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [photo,setPhoto]=useState('');
  const [ville,setVille]=useState('');
  const [adresse,setAdresse]=useState('');

  const [error,setError]=useState('');


  const inputHandler= () =>{
    if(!civilite.trim()){
    setError('Please set a valid civilite');
  }
  
  else if(!nom.trim()){
    setError('Please set a valid nom');
  }

  else if(!prenom.trim()){
    setError('Please set a valid prenom');
  }

  else if(!email.trim()){
    setError('Please set a valid email');
  }

  else if(!password.trim()){
    setError('Please set a valid password');
  }

  else if(!photo.trim()){
    setError('Please set a valid photo');
  }

  else if(!ville.trim()){
    setError('Please set a valid ville');
  }

  else if(!adresse.trim()){
    setError('Please set a valid adresse');
  }

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

else{
    const url = 'http://10.0.2.2:80/api/register.php';
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

       console.log(response);
       console.log(response[0].message);
       setError(response[0].message);
       if (response[0].success!=null){
        
        navigation.replace('Login', {
          registerMessage: response[0].success,
        });

       }
      })
      .catch((err)=>{
        alert("error"+err);
      })

      
    }
  
    }





  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Register</Text>
          <Text style={styles.text}>Enter your details to register</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{color: 'red'}}>{error}</Text>
          <Input
            placeholder="Civilite"
            type="default"
            autoComplete="name"
            style={styles.input}
            value={civilite}
            onChangeText={value => setCivilite(value)}
          />
          <Input
            placeholder="Nom"
            type="default"
            autoComplete="name"
            style={styles.input}
            value={nom}
            onChangeText={value => setNom(value)}
          />
          <Input
            placeholder="Prenom"
            type="default"
            autoComplete="name"
            style={styles.input}
            value={prenom}
            onChangeText={value => setPrenom(value)}
          />
          <Input
            placeholder="Email"
            type="default"
            autoComplete="email"
            style={styles.input}
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <Input
            placeholder="Password"
            type="default"
            autoComplete="password"
            style={styles.input}
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
          <Input
            placeholder="Photo"
            type="default"
            autoComplete="name"
            style={styles.input}
            value={photo}
            onChangeText={value => setPhoto(value)}
          />
          <Input
            placeholder="Ville"
            type="default"
            autoComplete="name"
            style={styles.input}
            value={ville}
            onChangeText={value => setVille(value)}
          />
          <Input
            placeholder="Adresse"
            type="default"
            autoComplete="street-address"
            style={styles.input}
            value={adresse}
            onChangeText={value => setAdresse(value)}
          />
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