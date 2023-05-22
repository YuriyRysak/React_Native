import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./Screens/LoginScreen.jsx";
import RegistrationScreen from "./Screens/RegistrationScreen.jsx";
import PostsScreen from "./Screens/screensComponents/PostsScreen.js";
import CreatePostsScreen from "./Screens/screensComponents/CreatePostsScreen";
import ProfileScreen from "./Screens/screensComponents/ProfileScreen.js";
import MapScreen from "./Screens/screensComponents/MapScreen.js";
import Home from "./Screens/screensComponents/Home.js";
import { fonts } from "./Screens/utils/fonts.js";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      SplashScreen.hideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="CreatePosts" component={CreatePostsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import { useEffect } from "react";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// import LoginScreen from "./Screens/LoginScreen.jsx";
// import { fonts } from "./Screens/utils/fonts.js";

// export default function App() {
//   const [fontsLoaded] = useFonts(fonts);

//   useEffect(() => {
//     async function prepare() {
//       await SplashScreen.preventAutoHideAsync();
//       SplashScreen.hideAsync();
//     }
//     prepare();
//   }, []);

//   if (!fontsLoaded) {
//     return "";
//   }

//   return <LoginScreen />;
// }

// import { useEffect } from "react";

// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// import LoginScreen from "./Screens/LoginScreen.jsx";
// // import RegistrationScreen from "./Screens/RegistrationScreen.jsx";

// import { fonts } from "./Screens/utils/fonts.js";
// // import { View } from "react-native-web";

// export default function App() {
//   const [fontsLoaded] = useFonts(fonts);
//   useEffect(() => {
//     async function prepare() {
//       await SplashScreen.preventAutoHideAsync();
//     }
//     prepare();
//   }, []);
//   if (!fontsLoaded) {
//     return undefined;
//   } else {
//     SplashScreen.hideAsync();
//   }

//   return (
//     <>
//       <LoginScreen />;
//     </>
//   );
// }

// /* <RegistrationScreen/>;  */
