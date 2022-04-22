import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react'
import Input from '../components/TextInput'
import FormButton from '../components/Button';

const Register = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Register</Text>
          <Text style={styles.text}>Enter your details to register</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder="Nom" type="default" autoComplete="name" style={input} />
          <Input placeholder="Prenom" type="default" autoComplete="name" style={input} />
          <Input placeholder="Email" type="default" autoComplete="email" style={input} />
          <Input placeholder="Password" type="default" autoComplete="password" style={input} />
          <Input placeholder="Photo" type="default" autoComplete="name" style={input} />
          <Input placeholder="Ville" type="default" autoComplete="name" style={input} />
          <Input placeholder="Adresse" type="default" autoComplete="street-address" style={input} />
          <FormButton title="Register" />
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