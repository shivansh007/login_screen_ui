import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class LoginForm extends Component {

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
        <Text style={styles.label}>EMAIL ADDRESS</Text>
        <TextInput 
          style={styles.textInputStyle} 
          autoCapitalize='none' 
          placeholder="Email Address" 
          placeholderTextColor='rgba(255,255,255,0.2)'
          underlineColorAndroid='rgba(0,0,0,0)'
          autoComplete='off'
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Text style={styles.label}>PASSWORD</Text>
        <TextInput 
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor='rgba(255,255,255,0.2)'
          style={styles.textInputStyle}
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity onPress={() => this._onPress()} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>{this.state.loginText}</Text>
        </TouchableOpacity>
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
  heading: {
    color: '#FFFFFF',
    fontSize: 30,
    marginBottom: 100
  },
  label: {
    color: '#FFFFFF',
    fontSize: 20,
    marginVertical: 15
  },
  textInputStyle: {
    fontSize: 20,
    width: '80%',
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.1)',
    fontSize: 20,
    height: 45,
    color: '#FFFFFF',
    paddingHorizontal: 20
  },
  loginButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  loginButton: {
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 50,
  }
});