import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Button} from 'react-native';
import React from 'react';
import Input from '../components/TextInput';
import FormButton from '../components/Button';

const Profile = () => {
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
            <Input placeholder="Nom" type="default" autoComplete="name" value="hello world" style={styles.input} />
            <Input placeholder="Prenom" type="default" autoComplete="name" value="hello world" style={styles.input} />
            <Input placeholder="Email" type="default" autoComplete="email" value="hello world" style={styles.input} />
            <Input
              placeholder="Password"
              type="default"
              autoComplete="password"
            value="hello world" style={styles.input} />
            <Input placeholder="Photo" type="default" autoComplete="name" value="hello world" style={styles.input} />
            <Input placeholder="Ville" type="default" autoComplete="name" value="hello world" style={styles.input} />
            <Input
              placeholder="Adresse"
              type="default"
              autoComplete="street-address"
            value="hello world" style={styles.input} />
            <FormButton title="Update" value="hello world" />
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
