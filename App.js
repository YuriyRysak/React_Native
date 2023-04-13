import { useEffect } from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import LoginScreen from "./Screens/LoginScreen.jsx";
import RegistrationScreen from "./Screens/RegistrationScreen.jsx";

import { fonts } from "./.expo/utils/fonts";
import { View } from "react-native-web";

export default function App() {

	const [fontsLoaded] = useFonts(fonts);
	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}
		prepare();
	}, []);
	if (!fontsLoaded) {
		return undefined;
	} else {
		SplashScreen.hideAsync();
	}

	
	return (
       <>
      <View>
	  {/* <LoginScreen/>; */}
      <RegistrationScreen/>;

	  </View> 
      
		</>
				
	);
	
}



