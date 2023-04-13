import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Pressable, Alert } from "react-native";

import KeyboardWrapper from "./components/KeyboardWrapper";


import { stylesScreen } from "./stylesScreen.js";

const { form, formInputWrapp, input, passwordInput, showPasswordBtn, titleLogIn, button, text, subscribe, loginLink } = stylesScreen;

const initialState = {
	email: "",
	password: "",
};
const initialFocus = {
	email: false,
	password: false,
};

const LoginScreen = ({ navigation }) => {
	const [isShowKeyboard, setIsShowKeyboard] = useState(false);
	const [state, setState] = useState(initialState);
	const [isFocus, setIsFocus] = useState(initialFocus);
	const [isShowPassword, setIsShowPassword] = useState(false);

	const handleOnFocus = inputName => {
		setIsShowKeyboard(true);
		setIsFocus(prevState => ({ ...prevState, [inputName]: true }));
	};

	const handleEndFocus = inputName => {
		setIsShowKeyboard(false);
		setIsFocus(prevState => ({ ...prevState, [inputName]: false }));
	};
	const handleSubmit = () => {
		const { login, email, password } = state;
		if (email === "" || password === "") {
			return Alert.alert("Заповнить поля");
		} else {
			setIsShowKeyboard(false);

			console.log(state);
			setState(initialState);
		}
	};
	const onTransition = () => {
		navigation.navigate("Registration");
	};
	return (
		<KeyboardWrapper>
			<View
				style={{
					...form,
					paddingBottom: isShowKeyboard ? 32 : 144,
				}}
			>
				<Text style={titleLogIn}>Увійти</Text>
				<View style={formInputWrapp}>
					<TextInput
						value={state.email}
						onChangeText={value => setState(prevState => ({ ...prevState, email: value.trim() }))}
						placeholder="Адреса електронної пошти"
						placeholderTextColor="#BDBDBD"
						keyboardType="email-address"
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
							onChangeText={value => setState(prevState => ({ ...prevState, password: value.trim() }))}
							placeholder="Придумайте пароль"
							placeholderTextColor="#BDBDBD"
							style={{
								...input,
								borderColor: isFocus.password ? "#FF6C00" : "#E8E8E8",
							}}
							keyboardType="default"
							secureTextEntry={!isShowPassword}
							onFocus={() => handleOnFocus("password")}
							onEndEditing={() => handleEndFocus("password")}
						/>
						<TouchableOpacity activeOpacity={0.5} onPress={() => setIsShowPassword(prev => !prev)}>
							{isShowPassword ? <Text style={showPasswordBtn}>Сховати</Text> : <Text style={showPasswordBtn}>Показати</Text>}
						</TouchableOpacity>
					</View>
				</View>
				{!isShowKeyboard && (
					<>
						<TouchableOpacity style={button} activeOpacity={0.5} onPress={handleSubmit}>
							<Text style={{ color: "#fff" }}>Зареєструватись</Text>
						</TouchableOpacity>
						<View style={subscribe}>
							<Text style={text}>Ще немає акаунта?</Text>
							<Pressable onPress={onTransition} activeOpacity={0.5}>
								<Text style={loginLink}> Зареєструватись</Text>
							</Pressable>
						</View>
					</>
				)}
			</View>
		</KeyboardWrapper>
	);
};
export default LoginScreen;