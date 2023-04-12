import React, {useState} from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
// import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
 } from 'react-native';

 const loadApplication = async () => {
  await Font.loadAsync({
    'Roboto-Black': require('./assets/Fonts/Roboto-Bold.ttf'),
  });
 };




 const initialState= {
  login: '',
  mail: '',
  password: ''
 }



export default function App() {
  console.log(Platform.OS)
  const [isShowKeyboard, setIsShowKeyboard] = useState(true);
  const [state, setState] = useState(initialState);
  const [iasReady, setIasReady] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  if(!iasReady){
    return (
      <AppLoading
        startAsync={loadApplication} 
        onFinish={() => setIasReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>    
      <View style={styles.container}>
       
            <ImageBackground 
              style={styles.image}
              source={require('./assets/img/Photo-BG.jpg')}>
                  <KeyboardAvoidingView  
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    >
                    <View style={{...styles.form, marginBottom: isShowKeyboard ? 20 : 86
                    }}>
                        <View style={styles.header}>
                          <Text style={styles.textHeader}>
                              Регистрация
                          </Text>
                        </View>
                        <View>
                            <TextInput style={styles.input}
                                  textAlign={"left"}                              
                                  placeholder='Логин'
                                  onFocus={() => setIsShowKeyboard(true)}
                                  value={state.login}
                                  onChangeText={(value) => setState((prevState) => ({...prevState, login: value}) )} 
                            />
                        </View>
                        <View style={{ marginTop: 16 }}>
                            <TextInput style={styles.input} textAlign={"left"}
                                  placeholder='Адрес электронной почты'
                                  onFocus={() => setIsShowKeyboard(true)}
                                  value={state.mail}
                                  onChangeText={(value) => setState((prevState) => ({...prevState, mail: value}) )}  
                                  />
                        </View>
                        <View style={{ marginTop: 16 }}>
                            <TextInput style={styles.input} textAlign={"left"} 
                                  placeholder='Пароль'
                                  secureTextEntry={true}
                                  onFocus={() => setIsShowKeyboard(true)}
                                  value={state.password}
                                  onChangeText={(value) => setState((prevState) => ({...prevState, password: value}) )}                              
                            />
                        </View>
                        <View style={{ marginTop: 43 }}>
                            <TouchableOpacity 
                            activeOpacity={0.8} 
                            style={styles.primaryButton} 
                            onPress={keyboardHide}>
                              <Text style={styles.textButton}>Зарегистрироваться</Text>
                            </TouchableOpacity>              
                        </View>    
                                                  
                    </View> 
                  </KeyboardAvoidingView>
                        
            </ImageBackground>
         
      </View>
      </TouchableWithoutFeedback>   
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
    justifyContent: "center",

    // alignItems: 'center',
  },



  input: {
    borderWidth: 1,
    borderColor:"#E8E8E8",
    backgroundColor:'#F6F6F6',
    borderRadius: 8,
    height: 50,
    padding: 16, 
    
    placeholderTextColor: '#BDBDBD'
  },

  form: {
    marginHorizontal: 16,
    // marginBottom: 32   


  },
 
  inputTitle: {

  },

  primaryButton: { 
    height: 51,
    borderWidth: 1,
    borderRadius: 100, 
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 16,
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

      },

    }),   
    
   
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
     
  },

  header: {

  },
  textHeader: {
    color: '#212121',
    fontSize: 30,
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 33,
    fontFamily: 'Roboto-Black',
    

  },

});
