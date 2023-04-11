import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform
 } from 'react-native';

import  RegistrationScreen from './Screens/RegistrationScreen.jsx';
import LoginScreen from './Screens/LoginScreen.jsx';



export default function App() {
  console.log(Platform.OS)
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
    justifyContent: 'center',

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
    height: 51,
    borderRadius: 100, 
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select ({
      ios: { 
        backgroundColor: 'transparent',
        borderColor: '#ffffff'

      },
      android: {
        backgroundColor: '#FF6C00',
        borderColor: 'transparent'

      },
      default:{
        backgroundColor: '#FF6C00',
        borderColor: 'transparent'

      }

    })   
    
   
  },

  textButton: {
    fontSize: 16,
    fontWeight: 400,
    ...Platform.select ({
      ios: {
        color:'#f0f800'
      },
      android: {
        color: '#ffffff' 
      },
      default: {
        color: '#ffffff'

      }
     

    })
     
  }

});
