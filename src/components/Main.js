import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './Logo';
import Buttons from './Buttons';

export default class Main extends Component {
  render() {
    return (
       <View style={styles.container}>
        <Logo/>
        <Buttons/>
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