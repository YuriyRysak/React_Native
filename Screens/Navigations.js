import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

// Экраны
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Экраны стека авторизации
const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Registration"
      component={RegistrationScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

// Экраны главной навигации
const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Posts"
      component={PostsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="newspaper" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="CreatePosts"
      component={CreatePostsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="create" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeTabs}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
