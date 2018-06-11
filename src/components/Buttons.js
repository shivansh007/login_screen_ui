import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class  Button extends Component {
  render() {
    return (
       <View style={styles.container}>
        <TouchableOpacity 
        	style={styles.loginButton}
        	onPress={() => alert('Login')}
         >
         	<Text style={styles.loginText}>Login</Text>
         </TouchableOpacity>
         <TouchableOpacity 
        	style={styles.signupButton}
        	onPress={() => alert('Signup')}
         >
         	<Text style={styles.signupText}>Sign Up</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	loginButton: {
		borderWidth: 1,
		width: '50%',
		alignItems: 'center',
		padding: '2%',
		borderRadius: 50,
		borderColor: '#FFFFFF'
	},
	loginText: {
		color: '#FFFFFF',
		fontSize: 20
	},
	signupButton: {
		marginTop: 5,
		backgroundColor: '#FFFFFF',		
		borderWidth: 1,
		width: '50%',
		alignItems: 'center',
		padding: '2%',
		borderRadius: 50,
		borderColor: '#FFFFFF'
	},
	signupText: {
		color: '#171D21',
		fontSize: 20
	}
});