import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class SignupForm extends Component {

  state = {
    email: '',
    password: '',
    loginText: 'LOGIN'
  }

  _onPress(){
    this.setState({loginText: 'Loggin In'})
    fetch('http://localhost:3000/login',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.errors)
      {
        alert(responseJson.errors[0].detail);
      }
      else
      {
        alert('Login Successful')
        console.log(responseJson.auth_token);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
       <View style={styles.container}>
        <Text style={styles.label}>Signup</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    color: '#FFFFFF',
    fontSize: 20,
    marginVertical: 15
  }
});