import { stylesScreen } from "../stylesScreen.js";
import { StatusBar } from "expo-status-bar";
const { container, image } = stylesScreen;
import { View, ImageBackground, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Dimensions } from "react-native";
import { useState, useEffect } from "react";
const KeyboardWrapper = ({ children }) => {
	const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

	useEffect(() => {
		const subscription = Dimensions.addEventListener("change", ({ window }) => {
			setDimensions(window.width);
		});
		return () => subscription?.remove();
	}, []);
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={{ ...container, width: dimensions }}>
				<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"}>
					<ImageBackground style={image} source={require("../../assets/img/Photo-BG.jpg")}>
						{children}
					</ImageBackground>
				</KeyboardAvoidingView>
				<StatusBar style="auto" />
			</View>
		</TouchableWithoutFeedback>
	);
};
export default KeyboardWrapper;