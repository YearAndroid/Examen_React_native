
import React from 'react';
import { Text, TextInput, Image, StyleSheet , Button, View, ScrollView, } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens'; 
import 'react-native-gesture-handler'

/* import styles from './Componentes/styles'; */

const Stack = createStackNavigator();

//app principal no me funciona la nevagacion 
/*
const p_final =()=>{
  return(
          
    <ScrollView style={styles.contenedor1}>
                 
      <View>
    <Text  style={styles.ingresar}>Ingresar</Text>
    <Image
     source={{
       uri: 'https://image.flaticon.com/icons/png/512/747/747376.png'
     }}
     style={ styles.imagen1 }
   />  
                 
      </View>
 
      <Text style={styles.label}>Usuario:</Text>
                <TextInput style={styles.cuadro} placeholder="Ingrese su Nombre"/>
                <Text style={styles.label}>Contraseña:</Text>
                <TextInput style={styles.cuadro} placeholder="Ingrese su Contraseña"/>
              
          <Button title="Enviar"
              onPress={enviarbtn}
             />
          <Text> {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          <Button
          title='click aqui'
          onPress={buttonClick}/>
          </Text>
           
          <Button title= "Siguiente Pantalla" onPress={()=> navigation.navigate('segundapantalla', {name: 'Segundapantalla'})} />
          <Stack.Screen
                          name="Segunda pantalla"
                          component={segundapantalla}
                          options={({route})=> ({ title: route.params.name})}
                          />
 </ScrollView>
   
  
  );
};*/

const buttonClick =()=>{
    alert('has pulsado')
  }
  const enviarbtn=()=>{
    alert('Datos Enviados Correctamente')
  }
//termina la app principal 
//app para intertear la navegacion 

function pantallaprincipal(navigation){
  return(
    <ScrollView style={styles.contenedor1}>  
                            
                <View style={{backgroundColor: 'gray'}}>
                    <Text  style={styles.ingresar}>Ingresar</Text>
                    <Image
                    source={{
                               uri: 'https://image.flaticon.com/icons/png/512/747/747376.png'
                              }}
                                  style={ styles.imagen1 }  />
   
                 </View>
    <View style={{backgroundColor: 'pink'}}>
      
      <Text style={styles.label}>Usuario:</Text>
                <TextInput style={styles.cuadro} placeholder="Ingrese su Nombre o usuario"/>
                <Text style={styles.label}>Contraseña:</Text>
                <TextInput style={styles.cuadro} placeholder="Ingrese su Contraseña"/>
              
          <Button title="Enviar"
              onPress={enviarbtn}
             />
             <Text> {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          </Text>
      <Button title="Ir a la siguiente pantalla"
      onPress={()=> navigation.navigate('segundapantalla', {name: 'Segundapantalla'})}/>
    </View>
    </ScrollView>
  );
}

function segundapantalla({ navigation}){
  return(
    <View>
      <Text>Segunda pantalla</Text>
      <Button title= "Regresar" onPress={()=> navigation.goBack()}/>
    </View>
  )
}
//la exportacion de la app de prueba de navegacion 

function header(){
  return(
    <NavigationContainer>
                    <Stack.Navigator>
                    <Stack.Screen
                          name= 'LOGIN'
                          component={pantallaprincipal}
                          options={{
                            title: 'LOGIN', 
                            
                            headerStyle:{
                              backgroundColor: 'blue',
                              
                            },
                            headerTintColor: 'black',
                            textAlign: 'center',
                            fontWeight: "bold",
                            justifyContent: 'center'
                          }}
                          />
                          <Stack.Screen
                          name="Segunda pantalla"
                          component={segundapantalla}
                           options={({route})=>({title:route.params.name})}
                          />
                      </Stack.Navigator>
                    </NavigationContainer>
                    
  );
}


//stylos de la app 

const styles = StyleSheet.create({
  
  label:{
    fontSize: 25,
      color: 'black',
      fontWeight: "bold",
      textAlign:'center'
  },
  cuadro:{
    backgroundColor:'green',
    padding:12,
    borderColor:'pink',
    borderWidth: 10,
    fontSize:25,
    fontWeight: "bold",
    
  },
 
  imagen1:{
      width: 200, height: 200, alignItems: "center", justifyContent:'center'
  },
  ingresar:{fontSize: 30,  fontWeight: "bold" , textAlign: 'center' },

  /* contenedor1:{
      alignItems:'center'
  } */

 });
 
/* export default p_final; */
 export default header; 
