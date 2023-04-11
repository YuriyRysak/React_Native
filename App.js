import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity
 } from 'react-native';

import  RegistrationScreen from './Screens/RegistrationScreen.jsx';
import LoginScreen from './Screens/LoginScreen.jsx';



export default function App() {
  return (    
      <View style={styles.container}>
        <ImageBackground 
          style={styles.image}
          source={require('./img/Photo BG.jpg')}>

          <View style={styles.form}>
            <View>
                <TextInput style={styles.input} textAlign={"left"}
                      placeholder='Логин'/>
            </View>
            <View style={{ marginTop: 16 }}>
                <TextInput style={styles.input} textAlign={"left"}
                      placeholder='Адрес электронной почты'/>
            </View>
            <View style={{ marginTop: 16 }}>
                <TextInput style={styles.input} textAlign={"left"} secureTextEntry={true}
                      placeholder='Пароль'/>
            </View>
            <View style={{ marginTop: 43 }}>
                <TouchableOpacity activeOpacity={0.7} style={styles.primaryButton} >
                  <Text style={styles.textButton}>Зарегистрироваться</Text>
                </TouchableOpacity>              
            </View>
           
          </View>       
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'flex-end',
    
    // alignItems: 'center',
  },



  input: {
    borderWidth: 1,
    borderColor:"#E8E8E8",
    backgroundColor:'#F6F6F6',
    borderRadius: 8,
    height: 50,
    padding: 16, 
    
    placeholderTextColor: '#BDBDBD', 
  },

  form: {
    marginHorizontal: 16,


  },
 
  inputTitle: {

  },

  primaryButton: {     
    backgroundColor:'#FF6C00',
    height: 51,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  textButton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 400,
  }

});
