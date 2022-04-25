import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React,{useState} from 'react';
import Input from '../components/TextInput';
import FormButton from '../components/Button';

const Register = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const [message,setMessage]=useState({
    text:'',
    color:''
  });

  const inputHandler= () =>{

  if(!email.trim()){
    setMessage({text:'Please set a valid email',color:'red'});
  }

  else if(!password.trim()){
    setMessage({text:'Please set a valid password',color:'red'});
  }

  else{
    setMessage({text:"you are successfully registered",color:'green'})
  }

  }

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Login</Text>
          <Text style={styles.text}>Enter your details to login</Text>
        </View>
        <View style={styles.inputContainer}>
        <Text style={{color:message.color}}>{message.text}</Text>
          <Input placeholder="Email" type="default" autoComplete="email" style={styles.input} value={email} onChangeText={value=>setEmail(value)} />
          <Input placeholder="Password" type="default" autoComplete="password" style={styles.input} value={password} onChangeText={value=>setPassword(value)} />
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
  text: {},
});

export default Register;
