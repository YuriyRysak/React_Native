import { StyleSheet } from "react-native";

export const stylesScreen = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: "#fff",
	},

	image: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		resizeMode: "cover",
	},
	form: {
		// paddingLeft: 16,
		// paddingRight: 16,
		width: "100%",
		backgroundColor: "#fff",
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		alignItems: "center",
	},
	formInputWrapp: {
		gap: 16,
	},
	input: {
		paddingLeft: 16,
		borderWidth: 1,
		borderColor: "#E8E8E8",
		borderRadius: 8,

		backgroundColor: "#F6F6F6",
		width: 343,
		// width: "100%",
		height: 50,
	},
	passwordInput: {
		flexDirection: "row",
		alignItems: "center",
	},
	showPasswordBtn: {
		marginLeft: -80,
		color: "#1B4371",
	},
	title: {
		fontFamily: "Roboto-Medium",
		fontSize: 30,
		lineHeight: 35,
		textAlign: "center",
		letterSpacing: 0.01,
		color: "#212121",
		marginBottom: 33,
		marginTop: 92,
	},
	titleLogIn: {
		fontFamily: "Roboto-Medium",
		fontSize: 30,
		lineHeight: 35,
		textAlign: "center",
		letterSpacing: 0.01,
		color: "#212121",
		marginBottom: 33,
		marginTop: 32,
	},
	button: {
		backgroundColor: "#FF6C00",
		borderRadius: 100,
		width: 343,
		height: 50,
		marginTop: 43,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "#212121",
	},
	subscribe: {
		marginTop: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	loginLink: {
		fontSize: 16,
		color: "#1B4371",
	},
	avatarWrapper: {
		width: 120,
		height: 120,
		backgroundColor: "#F6F6F6",
		borderRadius: 16,
		position: "absolute",
		// left: 128,
		top: -60,
		alignSelf: "center",
	},
	icon: {
		top: 70,
		left: 105,
	},
  });
  