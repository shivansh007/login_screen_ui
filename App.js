import React, { Component, Navigator } from 'react';
import { View, StyleSheet } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import Main from './src/components/Main';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Router style={styles.container}>
          <Scene key="root">
            <Scene key="mainScreen"
              component={Main}
              hideNavBar={true}
              initial={true}
            />
            <Scene key="loginScreen"
              direction='bottomToTop'
              component={LoginForm}
              hideNavBar={true}
            />
          </Scene>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171D21'
  }
});
