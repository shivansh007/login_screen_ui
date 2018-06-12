import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class LoginForm extends Component {

  state = {
    email: '',
    password: ''
  }

  _onPress(){
    fetch('http://localhost:3000/login',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    }).then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.errors)
        console.log(responseJson.errors[0].detail);
      else
        console.log(responseJson.auth_token);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
       <View style={styles.container}>
        <Text style={styles.heading}>
          Login
        </Text>
        <Text style={styles.label}>EMAIL ADDRESS</Text>
        <TextInput 
          style={styles.textInputStyle} 
          autoCapitalize='none' 
          placeholder="Email Address" 
          placeholderTextColor='rgba(28,53,63, 1)' 
          underlineColorAndroid='rgba(0,0,0,0)'
          autoComplete='off'
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Text style={styles.label}>PASSWORD</Text>
        <TextInput 
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor='rgba(28,53,63, 1)'
          style={styles.textInputStyle}
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity onPress={() => this._onPress()} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171D21',
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
    backgroundColor: 'rgba(1,1,1,0.5)',
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