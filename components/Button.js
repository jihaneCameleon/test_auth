import { View, Text,Button,StyleSheet } from "react-native";
import React from "react";

const FormButton = () => {
  return (
    <View style={styles.container}>
      <Button title="Register" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: 'lightblue',
    borderWidth: 1,
    borderRadius: 5,
  },
 
});

export default FormButton;
