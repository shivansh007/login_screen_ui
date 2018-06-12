import React, { Component, Navigator } from 'react';
import { View, StyleSheet } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import SignupForm from './src/components/SignupForm';
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
            <Scene key="signupScreen"
              direction='bottomToTop'
              component={SignupForm}
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
