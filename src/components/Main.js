import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import Logo from './Logo';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import yourSourceFile from '../images/background.jpg'

export default class Main extends Component {

  state = {
    formElement: (<LoginForm/>)
  }

  handlePress = function(){
    this.setState({
      formElement: (<SignupForm/>)
    })
  }

  render() {
    return (
       <View style={styles.container}>
       <ImageBackground
          source={yourSourceFile}
          style={{width: '100%', height: '100%'}}>
          <Logo/>
          {this.state.formElement}
          <TouchableOpacity onPress={()=>this.handlePress()}>
            <Text style={styles.registerLink}>Don't have an account? Signup</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171D21'
  },
  registerLink: {
    color: '#FFFFFF'
  }
});