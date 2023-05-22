import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import KeyboardWrapper from "./components/KeyboardWrapper";
import { stylesScreen } from "./stylesScreen.js";

const {
  form,
  formInputWrapp,
  input,
  passwordInput,
  showPasswordBtn,
  title,
  button,
  text,
  subscribe,
  loginLink,
  avatarWrapper,
  icon,
} = stylesScreen;

const initialState = {
  login: "",
  email: "",
  password: "",
};

const initialFocus = {
  login: false,
  email: false,
  password: false,
};

const RegisterScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isFocus, setIsFocus] = useState(initialFocus);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleOnFocus = (inputName) => {
    setIsShowKeyboard(true);
    setIsFocus((prevState) => ({ ...prevState, [inputName]: true }));
  };

  const handleEndFocus = (inputName) => {
    setIsShowKeyboard(false);
    setIsFocus((prevState) => ({ ...prevState, [inputName]: false }));
  };

  const handleSubmit = () => {
    const { login, email, password } = state;
    if (login === "" || email === "" || password === "") {
      return Alert.alert("Заповніть поля");
    } else {
      setIsShowKeyboard(false);
      console.log(state);
      setState(initialState);
    }
  };

  const onTransition = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardWrapper>
      <View
        style={{
          ...form,
          paddingBottom: isShowKeyboard ? 32 : 78,
        }}
      >
        <View style={avatarWrapper}>
          <Pressable>
            <Ionicons
              name="add-circle-outline"
              size={30}
              color="#FF6C00"
              style={icon}
            />
          </Pressable>
        </View>
        <Text style={title}>Реєстрація</Text>
        <View style={formInputWrapp}>
          <TextInput
            value={state.login}
            keyboardType="default"
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, login: value.trim() }))
            }
            placeholder="Логін"
            style={{
              ...input,
              borderColor: isFocus.login ? "#FF6C00" : "#E8E8E8",
            }}
            onFocus={() => handleOnFocus("login")}
            onEndEditing={() => handleEndFocus("login")}
          />
          <TextInput
            value={state.email}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value.trim() }))
            }
            placeholder="Адреса електронної пошти"
            keyboardType="default"
            style={{
              ...input,
              borderColor: isFocus.email ? "#FF6C00" : "#E8E8E8",
            }}
            onFocus={() => handleOnFocus("email")}
            onEndEditing={() => handleEndFocus("email")}
          />
          <View style={passwordInput}>
            <TextInput
              value={state.password}
              onChangeText={(value) =>
                setState((prevState) => ({
                  ...prevState,
                  password: value.trim(),
                }))
              }
              placeholder="Придумайте пароль"
              style={{
                ...input,
                borderColor: isFocus.password ? "#FF6C00" : "#E8E8E8",
              }}
              keyboardType="default"
              secureTextEntry={!isShowPassword}
              onFocus={() => handleOnFocus("password")}
              onEndEditing={() => handleEndFocus("password")}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setIsShowPassword((prev) => !prev)}
            >
              {isShowPassword ? (
                <Text style={showPasswordBtn}>Сховати</Text>
              ) : (
                <Text style={showPasswordBtn}>Показати</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        {!isShowKeyboard && (
          <>
            <TouchableOpacity
              style={button}
              activeOpacity={0.5}
              onPress={handleSubmit}
            >
              <Text style={{ color: "#fff" }}>Зареєструватись</Text>
            </TouchableOpacity>
            <View style={subscribe}>
              <Text style={text}>Вже є акаунт? </Text>
              <Pressable onPress={onTransition} activeOpacity={0.5}>
                <Text style={loginLink}>Увійти</Text>
              </Pressable>
            </View>
          </>
        )}
      </View>
    </KeyboardWrapper>
  );
};

export default RegisterScreen;

// import React, {useState, useEffect} from 'react';

// import { Text, View, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
// import KeyboardWrapper from './components/KeyboardWrapper';

// import { stylesScreen } from "./stylesScreen.js";

// const { form, formInputWrapp, input, passwordInput, showPasswordBtn, title, button, text, subscribe, loginLink, avatarWrapper, icon } =
// stylesScreen;

// const initialState= {
//   login: '',
//   mail: '',
//   password: '',
//  }

//  const initialFocus = {
// 	login: false,
// 	email: false,
// 	password: false,
// };

// const RegisterScreen = ({ navigation }) => {
// 	const [isShowKeyboard, setIsShowKeyboard] = useState(false);
// 	const [state, setState] = useState(initialState);
// 	const [isFocus, setIsFocus] = useState(initialFocus);
// 	const [isShowPassword, setIsShowPassword] = useState(false);

// 	const handleOnFocus = inputName => {
// 		setIsShowKeyboard(true);
// 		setIsFocus(prevState => ({ ...prevState, [inputName]: true }));
// 	};

// 	const handleEndFocus = inputName => {
// 		setIsShowKeyboard(false);
// 		setIsFocus(prevState => ({ ...prevState, [inputName]: false }));
// 	};
// 	const handleSubmit = () => {
// 		const { login, email, password } = state;
// 		if (login === "" || email === "" || password === "") {
// 			return Alert.alert("Заповнить поля");
// 		} else {
// 			setIsShowKeyboard(false);

// 			console.log(state);
// 			setState(initialState);
// 		}
// 	};
// 	const onTransition = () => {
// 		navigation.navigate("Login");
// 	};
// 	return (
// 		<KeyboardWrapper>
// 			<View
// 				style={{
// 					...form,
// 					paddingBottom: isShowKeyboard ? 32 : 78,
// 				}}
// 			>
// 				<View style={avatarWrapper}>
// 					<Pressable>
// 						<Ionicons name="add-circle-outline" size={30} color="#FF6C00" style={icon} />
// 					</Pressable>
// 				</View>
// 				<Text style={title}>Реєстрація</Text>
// 				<View style={formInputWrapp}>
// 					<TextInput
// 						value={state.login}
// 						keyboardType="default"
// 						onChangeText={value => setState(prevState => ({ ...prevState, login: value.trim() }))}
// 						placeholder="Логiн"
// 						style={{
// 							...input,
// 							borderColor: isFocus.login ? "#FF6C00" : "#E8E8E8",
// 						}}
// 						onFocus={() => handleOnFocus("login")}
// 						onEndEditing={() => handleEndFocus("login")}
// 					/>
// 					<TextInput
// 						value={state.email}
// 						onChangeText={value => setState(prevState => ({ ...prevState, email: value.trim() }))}
// 						placeholder="Адреса електронної пошти"
// 						keyboardType="default"
// 						style={{
// 							...input,
// 							borderColor: isFocus.email ? "#FF6C00" : "#E8E8E8",
// 						}}
// 						onFocus={() => handleOnFocus("email")}
// 						onEndEditing={() => handleEndFocus("email")}
// 					/>
// 					<View style={passwordInput}>
// 						<TextInput
// 							value={state.password}
// 							onChangeText={value => setState(prevState => ({ ...prevState, password: value.trim() }))}
// 							placeholder="Придумайте пароль"
// 							style={{
// 								...input,
// 								borderColor: isFocus.password ? "#FF6C00" : "#E8E8E8",
// 							}}
// 							keyboardType="default"
// 							secureTextEntry={!isShowPassword}
// 							onFocus={() => handleOnFocus("password")}
// 							onEndEditing={() => handleEndFocus("password")}
// 						/>
// 						<TouchableOpacity activeOpacity={0.5} onPress={() => setIsShowPassword(prev => !prev)}>
// 							{isShowPassword ? <Text style={showPasswordBtn}>Сховати</Text> : <Text style={showPasswordBtn}>Показати</Text>}
// 						</TouchableOpacity>
// 					</View>
// 				</View>
// 				{!isShowKeyboard && (
// 					<>
// 						<TouchableOpacity style={button} activeOpacity={0.5} onPress={handleSubmit}>
// 							<Text style={{ color: "#fff" }}>Зареєструватись</Text>
// 						</TouchableOpacity>
// 						<View style={subscribe}>
// 							<Text style={text}>Вже є акаунт? </Text>
// 							<Pressable onPress={onTransition} activeOpacity={0.5}>
// 								<Text style={loginLink}> Увійти</Text>
// 							</Pressable>
// 						</View>
// 					</>
// 				)}
// 			</View>
// 		</KeyboardWrapper>
// 	);
// };
// export default RegisterScreen;
