import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const Input = props => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder={props.placeholder}
        keyboardType={props.type}
        autoComplete={props.autoComplete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    fontSize: 15,
    color:'black',
  },
});

export default Input