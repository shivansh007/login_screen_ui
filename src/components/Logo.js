import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logoImg from '../images/logo.png';

export default class Main extends Component {
  render() {
	  return (
	    <View style={styles.container}>
	    	<Image source={logoImg} />
	 			<Text style={styles.heading}>Logo</Text>   	
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
	heading: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#FFFFFF'
	}
});