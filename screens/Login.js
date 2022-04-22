import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Input from '../components/TextInput';
import FormButton from '../components/Button';

const Register = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Login</Text>
          <Text style={styles.text}>Enter your details to login</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder="Email" type="default" autoComplete="email" />
          <Input placeholder="Password" type="default" autoComplete="password" />
          <FormButton title="Login" />
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
