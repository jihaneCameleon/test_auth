import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Button} from 'react-native';
import React,{useState} from 'react';
import Input from '../components/TextInput';
import FormButton from '../components/Button';
import {useNavigation, useRoute} from '@react-navigation/native';


const Profile = () => {

  const route = useRoute();
  const navigation = useNavigation();

    const {data} = route.params ;

    

  const [id, setId] = useState('');
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
    setError('Please set a valid civilite' );
  }
  
  else if(!nom.trim()){
    setError('Please set a valid nom' );
  }

  else if(!prenom.trim()){
    setError('Please set a valid prenom' );
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

  else{

    const url = 'http://10.0.2.2:80/api/update.php';
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    const data = {
      id: 29,
      civilite: 'chh',
      nom: 'arfi',
      prenom: 'jihane',
      email: 'jihane@gmail.com',
      password: 'jihan123',
      photo: 'image.png',
      ville: 'mohamedia',
      adresse: 'derb chabab',
    };
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        console.log(response[0].message);
        setError(response[0].message);
      })
      .catch(err => {
        alert('error' + err);
      });
    setError(
      'User has been updated successfully',
    );
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
          <Text style={styles.text}>{data.nom + ' ' + data.prenom}</Text>
          <Button style={styles.btn} title="Logout" />
        </View>
        <View style={styles.cardBody}>
          <View style={styles.inputContainer}>
            <Text style={{color: 'red'}}>{error}</Text>
            <Input
              placeholder="Civilite"
              type="default"
              autoComplete="name"
              style={styles.input}
              value={data.id}
              onChangeText={value => setId(value)}
            />
            <Input
              placeholder="Civilite"
              type="default"
              autoComplete="name"
              style={styles.input}
              value='chh'
              onChangeText={value => setCivilite(value)}
            />
            <Input
              placeholder="Nom"
              type="default"
              autoComplete="name"
              style={styles.input}
              value={data.nom}
              onChangeText={value => setNom(value)}
            />
            <Input
              placeholder="Prenom"
              type="default"
              autoComplete="name"
              style={styles.input}
              value={data.prenom}
              onChangeText={value => setPrenom(value)}
            />
            <Input
              placeholder="Email"
              type="default"
              autoComplete="email"
              style={styles.input}
              value={data.email}
              onChangeText={value => setEmail(value)}
            />
            <Input
              placeholder="Password"
              type="default"
              autoComplete="password"
              style={styles.input}
              value={data.password}
              onChangeText={value => setPassword(value)}
              secureTextEntry={true}
            />
            <Input
              placeholder="Photo"
              type="default"
              autoComplete="name"
              style={styles.input}
              value={data.photo}
              onChangeText={value => setPhoto(value)}
            />
            <Input
              placeholder="Ville"
              type="default"
              autoComplete="name"
              style={styles.input}
              value={data.ville}
              onChangeText={value => setVille(value)}
            />
            <Input
              placeholder="Adresse"
              type="default"
              autoComplete="street-address"
              style={styles.input}
              value={data.adresse}
              onChangeText={value => setAdresse(value)}
            />
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
