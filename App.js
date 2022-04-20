import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Register from './screens/Register';


export default function App() {

  return (
    <View style={styles.screen}>
     <Register/>
    </View>
  );
}
const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:'white'
  }
});

// https://njwest.medium.com/building-a-react-native-jwt-client-api-requests-and-asyncstorage-d1a20ab60cf4

// https://www.youtube.com/watch?v=gZRklbykGGk