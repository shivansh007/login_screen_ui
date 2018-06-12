import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Logo from './Logo';
import LoginForm from './LoginForm';
import yourSourceFile from '../images/background.jpg'

export default class Main extends Component {
  render() {
    return (
       <View style={styles.container}>
       <ImageBackground
          source={yourSourceFile}
          style={{width: '100%', height: '100%'}}>
          <Logo/>
          <LoginForm/>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171D21'
  }
});