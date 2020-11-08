import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function Boton(props){
	console.log("Props botn", props);
	const {calcular} = props
	return (
		<View >
			<Button style={styles.bot}
        	title="CALCULAR"
        	onPress={calcular}
      		/>
		</View>
	);
}

const styles = StyleSheet.create({
	bot: {
    	padding: 16,
    	borderRadius: 20,
    	width: "75%"
	}
})