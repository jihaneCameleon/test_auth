import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React,{useState} from 'react';
import Input from '../components/TextInput';
import FormButton from '../components/Button';
import {useNavigation, useRoute} from '@react-navigation/native';


const Register = () => {

  const route = useRoute();
  const navigation=useNavigation();

  const {registerMessage} = route.params ?? {registerMessage: null};

  

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const [error,setError]=useState('');

  const inputHandler= () =>{

  if(!email.trim()){
    setError('Please set a valid email');
  }

  else if(!password.trim()){
    setError('Please set a valid password');
  }

  else{

    const url = 'http://10.0.2.2:80/api/login.php';
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    const data={
    "email":email,
    "password":password

    }
    
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

         setError(response[0].message);
         if (response[0].success != null) {
            navigation.replace('Profile', {data: response[0].data});
         }
        
      })
      .catch(err => {
        alert('errrrr'+err);
      });

      
    }
  }


  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Login</Text>
          <Text style={styles.text}>Enter your details to login</Text>
        </View>
        <Text style={{textAlign: 'center', color: 'green', marginTop: 20}}>
          {registerMessage}
        </Text>
        <View style={styles.inputContainer}>
          <Text style={{color: 'red'}}>{error}</Text>
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
          <FormButton title="Login" onPress={inputHandler} />
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
  },
  input:{
    borderRadius:5,
    borderWidth:2,
    borderColor:'lightblue'
  }
});

export default Register;
