import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Resumen(props){
	console.log("Ver Props", props);
	const {genero, estatura, peso, edad, total} = props;

	return (
		<View style={estil.container}>
			
		<View style={estil.box1}>
		<Text style={estil.letra}>Género </Text>
		<br/>
		<Text style={estil.letra}>Estatura: </Text>
		<br/>
		<Text style={estil.letra}>Peso: </Text>
		<br/>
		<Text style={estil.letra}>Edad: </Text>
		<br/>
		<Text style={estil.letra}>Las calorías que debe consumir por día: </Text>
		</View>

		<View style={estil.box2}>
		<Text style={estil.letra2}>{genero}</Text>
		<br/>
		<Text style={estil.letra2}>{estatura} Cm</Text>
		<br/>
		<Text style={estil.letra2}>{peso} Kg</Text>
		<br/>
		<Text style={estil.letra2}>{edad} años</Text>
		<br/>
		<Text style={estil.letra2}>{total} calorías</Text>
		</View>
		</View>
	);
}

const estil = StyleSheet.create({

	letra: {
		fontSize: 18,
    	fontWeight: 'bold',
    	color: '#fff',
    	marginTop: 12
	},

	letra2: {
		fontSize: 18,
    	fontWeight: 'normal',
    	color: '#fff',
    	marginTop: 12
	},

	container: {
	width: "30%",
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25
  	},

	box1: {
    flex: 1,
    alignItems: 'center'
	},

	box2: {
    flex: 1,
    alignItems: 'center'
	},

	rowInput: {
		flexDirection : "row"
	}
})