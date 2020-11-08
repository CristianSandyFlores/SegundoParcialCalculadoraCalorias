import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function Form(props){

	console.log("Props", props);
	const {setGenero, setEstatura, setPeso, setEdad} = props;

	return (
		<View style={estilo.formulario}>
		<Text style={estilo.letra}>Seleccionar Género</Text>
			<RNPickerSelect
            onValueChange={(value) => setGenero(value)}
            items={[
                { label: 'Masculino', value: 'Masculino' },
                { label: 'Femenino', value: 'Femenino' },
            ]}
        />
        <br/>
			<View style={estilo.rowInput}>
			<TextInput
				style={[estilo.input, estilo.inputPersonalizado]} 
				placeholder= "Estatura"
				onChange={(e)=>setEstatura(e.nativeEvent.text)}
			/>
			<TextInput 
				style={[estilo.input, estilo.inputPersonalizado]} 
				placeholder= "Peso"
				onChange={(e)=>setPeso(e.nativeEvent.text)}
			/>
			<TextInput 
				style={[estilo.input, estilo.inputPersonalizado]} 
				placeholder= "Edad"
				onChange={(e)=>setEdad(e.nativeEvent.text)}
			/>
			</View>
		</View>
	);
}
const estilo = StyleSheet.create({
	formulario: {
		position: "absolute",
		bottom: 0,
		width: "45%",
		paddingHorizontal: 50,
		borderRadius: 20,
		height: 100,
		justifyContent: 'center'
	},

	input: {
		height: 50,
		backgroundColor: "#F0FFFF",
		borderWidth: 1,
		borderRadius: 5,
		width: "60%",
		marginRight: 5,
		marginLeft: 5,
		marginBottom: 10,
		color: "#000",
		paddingHorizontal: 20
	},

	inputPersonalizado: {
		width: "35%",
		marginLeft: 5
	},

	rowInput: {
		flexDirection : "row"
	},

	letra: {
		fontSize: 18,
    	fontWeight: 'bold',
    	color: '#fff',
    	marginTop: 12
	},
})