import { StatusBar } from 'expo-status-bar';
import React, {Fragment, useState} from 'react';
import { StyleSheet, Text, View, Component, ImageBackground, Button } from 'react-native';
import Formulario from './app/src/components/form';
import Resumen from './app/src/components/resumen';
import Boton from './app/src/components/boton';

const image = { uri: 'https://www.flavorofindia.com/wp-content/uploads/2014/07/photodune-6761938-food-background-on-dark-slate-m1-1024x1024.jpg'}

export default function App() {
  const [genero, setGenero] = useState(null);
  const [estatura, setEstatura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [edad, setEdad] = useState(null);
  const [total, setTotal] = useState(null);

  const calcular = () =>{
    
    if(!genero){
      console.log("Selecccione género");
    }else if(!estatura){
      console.log("Ingrese estatura")
    }else if(!peso){
      console.log("Ingrese peso");
    }else if(!edad){
      console.log("Ingrese edad");
    }else{
      console.log("Ok");
    }

    if(genero == 'Masculino'){
      setTotal((66 + (peso * 13.7) + (estatura * 5) - (edad * 6.8)).toFixed(0));  
    }else{
      setTotal((655 + (peso * 9.6) + (estatura * 1.8) - (edad * 4.7)).toFixed(0));  
    } 
  }


  return (
    <Fragment>
    <ImageBackground source={image} style={styles.image}>
    <View style={styles.contenedorTitulo}>
      <Text style={styles.titulo}> CALCULADORA DE CALORÍAS</Text>
      <Formulario setGenero={setGenero} setEstatura={setEstatura} setPeso={setPeso} setEdad={setEdad} />
    </View>
    <View style={styles.contenedorResultado}>
      <Text style={styles.resultado}> RESULTADO</Text>
      <Resumen genero={genero} estatura={estatura} edad={edad} peso={peso} total={total}/>
    </View>
    <View style={styles.contenedorBoton}>
      <Boton calcular={calcular}/>
    </View>
    </ImageBackground>
    </Fragment>

  );
}

const styles = StyleSheet.create({
  contenedorTitulo: {
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },

  contenedorResultado: {
    height: 400,
    borderBottomLeftRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: "center",
  },

  contenedorBoton: {
    height: 100,
    borderBottomLeftRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: "center",
  },

  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ADD8E6',
    marginTop: 25
  },

  resultado: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ADD8E6',
    marginTop: 25
  }
});
