import { View, Text,Button,StyleSheet } from "react-native";
import React from "react";

const FormButton = props => {
  return (
    <View style={styles.container}>
      <Button style={styles.btn} onPress={props.onPress}  title={props.title} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: 'lightblue',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical:20,
  },

 
});

export default FormButton;
