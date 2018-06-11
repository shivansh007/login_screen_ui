import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Main from './src/components/Main';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Main/>
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
