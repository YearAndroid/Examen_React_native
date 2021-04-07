
import * as React from 'react';
import {Switch,View,ImageBackground, Text, Button, StyleSheet, TextInput, Image, ScrollView,TouchableOpacity, FlatList} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { useState } from 'react';

const Stack = createStackNavigator();

function HomeScreen ({navigation}){
  return(
    <ScrollView>
                    
                     <View style={{backgroundColor: 'gray'}}>
                    <Text  style={styles.ingresar}>Ingresar</Text>
                    <Image
                    source={{
                               uri: 'https://image.flaticon.com/icons/png/512/747/747376.png'
                              }}
                                  style={ styles.imagen1 }  />
   
                 </View>
                 <View style={{backgroundColor: '#204092'}}>
      
      <Text style={styles.label}>Usuario:</Text>
                <TextInput style={styles.cuadro} placeholder="Ingrese su Nombre o usuario"/>
                <Text style={styles.label}>Contraseña:</Text>
                <TextInput style={styles.cuadro} placeholder="Ingrese su Contraseña"/>
              
          <Button title="Ingresar"
              onPress={enviarbtn}
             />
             <Text> 
          {'\n'}
          {'\n'}
          </Text>
          <TouchableOpacity
                  style={styles.btnopa}
              onPress={()=>navigation.navigate('Tercera',{name: "Tercera Pantalla"})}
              >
              <Text style={{fontSize:20,color: 'black',
                          fontWeight: "bold",}}>Reseña</Text>
             </TouchableOpacity>
             <Text>{'\n'}</Text>
      <Button
      title = 'Crear Usuario'
      onPress={()=>
      navigation.navigate('Profile',{name: "Inicio de Perfiles"})}
      />
    </View>
    </ScrollView>
    
  );
}
const image = { uri : "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}

function ProfileScreen ({navigation}){
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch=()=> setIsEnabled(previousStates => !previousStates)
  return(
    <ScrollView>
       <View>
         <ImageBackground source={image} style={styles.imagenBack}>
         <Switch styles={{alignItems: "center", justifyContent:"center"}}
            trackColor={{ false: 'balck', true: 'yellow'}}
            thumbColor={isEnabled ? 'green': 'white'}
             onValueChange={toggleSwitch}
            value={isEnabled}
          />
       <Text  style={{fontSize: 25,  fontWeight: "bold" , textAlign: 'center', color: 'white', }}>Crear Nuevo Usuario</Text> 
            <Text style={styles.label1}>Nombre:</Text>
              <TextInput style={styles.cuadro1} placeholder="Ingrese su Nombre"/>
             <Text style={styles.label1}>Apellido:</Text>
              <TextInput style={styles.cuadro1} placeholder="Ingrese su Apellido"/>
            <Text style={styles.label1}>Celular:</Text> 
              <TextInput style={styles.celular} placeholder="Ingrese su Numero" keyboardType="numeric"/>
              <Text  style={styles.label1}>Email</Text>
              <TextInput style={styles.cuadro1} placeholder="Ingrese su Email" />
              <Text>
                {'\n'}
                {'\n'}
              </Text>
       <Button title="Ingresar" onPress={enviarbtn1}/>
       <Text>
         {'\n'}
         {'\n'}
       </Text>
       <Button
      title ="back"
      onPress={()=>navigation.goBack()}
      />
      <Text>
         {'\n'}
        
       </Text>
       <Button
      title ="Tercera Pantalla"
      onPress={()=>navigation.navigate('Tercera',{name: "Tercera Pantalla"})}
      /> 
       </ImageBackground>
    </View>
    </ScrollView>

    
  )
}



//tercera pantalla 
function TerceraPantalla({navigation}){
  return(
    <View>
      <Text style={styles.label}> Reseña del Anime</Text>
      <View>
               <Image
                       source={{
                               uri: 'https://images4.alphacoders.com/971/thumbbig-971573.jpg'
                              }}
                                style={styles.imageonepiece}    />
                               <View>
                                 <Text style={styles.txtonepiece}>One Piece es un manga escrito e ilustrado por Eiichirō Oda y actualmente es el manga más comprado en el mundo. 
                                   Comenzó a publicarse en la revista japonesa Weekly Shōnen Jump el 22 de julio de 1997 y a la fecha se han 
                                   publicado 98 volúmenes, por otra parte Toei Animation realiza el anime que se transmite en Fuji TV desde el 20 de 
                                   octubre de 1999 el cual está en emisión actualmente. Larp Editores licenció el manga en Argentina y posteriormente 
                                   fue retomado por Ivrea. En España principalmente la publicación estaba a manos de Planeta DeAgostini y después pasó 
                                   a manos de Planeta Cómic el cual se encarga actualmente de su publicación. En México fue publicado por Editorial Toukan
                                    en un principio y, más tarde, por Panini Comics.</Text>
                               </View>
      </View>
     <TouchableOpacity
     style={styles.btnopa}
     onPress={()=>navigation.navigate('LOGIN',{name: "HomeScreen"})}
     >
     <Text style={{fontSize:20,color: 'black',
      fontWeight: "bold",}}>Regresar</Text>
     </TouchableOpacity>
    </View>
  )
}

//funcion principal
function App (){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="LOGIN"
        component={HomeScreen}
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
        name="Profile"
        component={ProfileScreen}
        options={({route})=>({title:route.params.name}),{headerStyle:{
          backgroundColor: 'brown',
          
        }}}
        />
        
         <Stack.Screen
        name="Tercera"
        component={TerceraPantalla}
        options={({route})=>({title:route.params.name}),{headerStyle:{
          backgroundColor: 'gray',
          
        }}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;

//estilos

const styles = StyleSheet.create({
  
  label:{
    fontSize: 25,
      color: 'black',
      fontWeight: "bold",
      textAlign:'center'
  },
  cuadro:{
    backgroundColor:'#BFC1C6',
    padding:12,
    borderColor:'#204092',
    borderWidth: 10,
    fontSize:25,
    fontWeight: "bold",
    
  },
 
  imagen1:{
      width: 200, height: 200, alignItems: "center", justifyContent:'center'
  },
  imageonepiece:{
    width: 200, height: 200, alignItems: "center", justifyContent:'center'
    },
  ingresar:{fontSize: 30,  fontWeight: "bold" , textAlign: 'center' },

  /* contenedor1:{
      alignItems:'center'
  } */
  celular:{
    
    backgroundColor:'gray',
    padding:12,
    fontSize:25,
    fontWeight: "bold",
  },
  imagenBack:{
    flex: 1,
    flexDirection: 'column'

  },
  cuadro1:{
    backgroundColor:'gray',
    padding:12,
    fontSize:25,
    fontWeight: "bold",
    
  },
  label1:{
    fontSize: 25,
      color: 'white',
      fontWeight: "bold",
      textAlign:'center'
  },
  txtonepiece:{
      fontSize:18,
      color:'black',
      textAlign:'justify',
      fontWeight:'bold'
  },
  btnopa:{
    alignItems: "center",
    backgroundColor: "gray",
    padding:15,
    

  }

 });

 const buttonClick =()=>{
  alert('has pulsado')
}
const enviarbtn=()=>{
  alert('Datos Enviados Correctamente')
}
const enviarbtn1=()=>{
  alert('Datos Guardado Correctamente')
}