const GeneralStyle = {
	general: {
		extroColor: "#e3a324",
	},
	kid: {
		field: {
			fontSize: 18,
			fontWeight: "400",
			borderWidth: 2,
			borderRadius: 10,
			paddingHorizontal: 20,
			// paddingVertical: 3,
			paddingVertical: 18,
			minHeight: 60,
			marginBottom: 15,
			marginTop: 15,
			borderColor: "#000",
		},
	},
	adult: {
		field: {
			fontSize: 18,
			fontWeight: "400",
			borderWidth: 2,
			borderRadius: 4,
			paddingHorizontal: 15,
			// paddingVertical: 3,
			paddingVertical: 10,
			minHeight: 60,
			marginBottom: 15,
			marginTop: 15,
			borderColor: "#C5C5C5",
		},
		questionContainer: {
			// maxHeight: 450,
			borderRadius: 20,
			height: "auto",
			width: "100%",
			backgroundColor: "white",
			padding: 20,
			shadowColor: "#000",
			shadowOffset: {
				width: 0.5,
				height: 1,
			},
			shadowOpacity: 0.2,
			shadowRadius: 2,
		},
		optionContainer: {
			paddingVertical: 4,
			paddingHorizontal: 10,
			marginBottom: 5,
			width: "100%",
			flex: 1,
		},
		optionText: {
			fontSize: 16,
		},
		optionImageContainer: {
			backgroundColor: "#fff",
			height: 150,
			flex: 1,
			width: "100%",
			maxWidth: 130,
			borderRadius: 5,
			marginLeft: 10,
			marginBottom: 10,
			shadowColor: "#000",
			shadowOffset: {
				width: 0.5,
				height: 1,
			},
			shadowOpacity: 0.2,
			shadowRadius: 2,
		},
	},
};

const DefaultStyle = {
	button: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderRadius: 10,
		borderWidth: 2,
		fontSize: 18,
		textAlign: "center",
		fontWeight: "bold",
		color: "#fff",
		backgroundColor: "#fff",
		lineHeight: 27,
		minWidth: 100,
	},
};

export { GeneralStyle, DefaultStyle };
