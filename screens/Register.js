import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react'
import Input from '../components/TextInput'

const Register = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Register</Text>
        <Text>Enter your details to register</Text>
        <View style={styles.screen}>
          <Input placeholder="Nom" type="default" autoComplete="name" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});

export default Register