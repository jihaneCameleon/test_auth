import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Button} from 'react-native';
import React,{useState} from 'react';
import Input from '../components/TextInput';
import FormButton from '../components/Button';

const Profile = () => {

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

  const inputHandler= () =>{
    if(!civilite.trim()){
    setMessage({text:'Please set a valid civilite' ,color:'red'});
  }
  
  else if(!nom.trim()){
    setMessage({text:'Please set a valid nom' ,color:'red'});
  }

  else if(!prenom.trim()){
    setMessage({text:'Please set a valid prenom' ,color:'red'});
  }

  else if(!email.trim()){
    setMessage({text:'Please set a valid email',color:'red'});
  }

  else if(!password.trim()){
    setMessage({text:'Please set a valid password',color:'red'});
  }

  else if(!photo.trim()){
    setMessage({text:'Please set a valid photo',color:'red'});
  }

  else if(!ville.trim()){
    setMessage({text:'Please set a valid ville',color:'red'});
  }

  else if(!adresse.trim()){
    setMessage({text:'Please set a valid adresse',color:'red'});
  }

  else{
    setMessage({text:"you are successfully registered",color:'green'})
  }

  }

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <View style={styles.cardHeader}>
            <View>
                <Image style={styles.img} source={require('../assets/icon.png')} />
            </View>
            <Text style={styles.text}>Jihane Arfi</Text>
            <Button style={styles.btn} title='Logout'/>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.inputContainer}>
          <Text style={{color:message.color}}>{message.text}</Text>
          <Input placeholder="Civilite" type="default" autoComplete="name" style={styles.input} value={civilite} onChangeText={value=>setCivilite(value)} />
          <Input placeholder="Nom" type="default" autoComplete="name" style={styles.input} value={nom} onChangeText={value=>setNom(value)} />
          <Input placeholder="Prenom" type="default" autoComplete="name" style={styles.input} value={prenom} onChangeText={value=>setPrenom(value)} />
          <Input placeholder="Email" type="default" autoComplete="email" style={styles.input} value={email} onChangeText={value=>setEmail(value)} />
          <Input placeholder="Password" type="default" autoComplete="password" style={styles.input} value={password} onChangeText={value=>setPassword(value)} />
          <Input placeholder="Photo" type="default" autoComplete="name" style={styles.input} value={photo} onChangeText={value=>setPhoto(value)} />
          <Input placeholder="Ville" type="default" autoComplete="name" style={styles.input} value={ville} onChangeText={value=>setVille(value)} />
          <Input placeholder="Adresse" type="default" autoComplete="street-address" style={styles.input} value={adresse} onChangeText={value=>setAdresse(value)} />
          <FormButton title="Update" onPress={inputHandler} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
  },
  headerText: {
    marginVertical: 20,
    fontSize: 40,
    fontWeight: 'bold',
  },
  inputContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
  },
  cardHeader: {
    width: '90%',
    height: 250,
    backgroundColor: 'white',
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cardBody: {
    width: '90%',
    backgroundColor: 'white',
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  btn: {
    width: '60%',
  },
  input: {
    borderBottomWidth:2,
    borderColor: 'lightblue',
  },
});

export default Profile;
