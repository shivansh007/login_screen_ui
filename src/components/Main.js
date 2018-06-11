import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './Logo';

export default class Main extends Component {
  render() {
    return (
       <View style={styles.container}>
        <Logo/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});