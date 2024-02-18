// for the kids, field border should be 3
// border should be color 100 (light color)

import { horizontalScale } from "utils/responsive";

// nav should be color200 (dark)
const Font = {
	PoppinsBold: "PoppinsBold",
	PoppinsMedium: "PoppinsMedium",
	PoppinsRegular: "PoppinsRegular",
	SpaceBold: "SpaceBold",
	SpaceLight: "SpaceLight",
	SpaceMedium: "SpaceMedium",
	SpaceRegular: "SpaceRegular",
	SpaceSemiBold: "SpaceSemiBold",
};

const GeneralStyle = {
	general: {
		extroColor: "#e3a324",
	},
	kid: {
		field: {
			fontSize: 18,
			fontWeight: "400",
			borderWidth: 3,
			borderRadius: 10,
			paddingHorizontal: 20,
			// paddingVertical: 3,
			paddingVertical: 14,
			minHeight: 60,
			marginBottom: 15,
			marginTop: 15,
			borderColor: "#000",
		},
		inactiveField: {
			borderColor: "#ABABAB",
			backgroundColor: "#FFF",
		},
		inactiveText: {
			color: "#ABABAB",
		},
	},
	adult: {
		questionContainer: {
			borderRadius: 25,
			maxWidth: 500,
			backgroundColor: "white",
			paddingHorizontal: 30,
			paddingVertical: 20,
			shadowColor: "#000",
			shadowOffset: {
				width: 3,
				height: 8,
			},
			shadowOpacity: 0.3,
			shadowRadius: 5,
		},
		questionLabel: {
			fontSize: 25,
			fontFamily: Font.PoppinsMedium,
			fontWeight: "bold",
		},
		radioContainer: {
			paddingVertical: 4,
			paddingHorizontal: 10,
			marginBottom: 5,
			flex: 1,
		},
		radioButton: {
			height: 25,
			width: 25,
			marginRight: 15,
			borderRadius: 25 / 2,
			borderColor: "#D8D8D8",
			borderWidth: 2,
		},
		radioText: {
			fontSize: 18,
			fontFamily: Font.SpaceRegular
		},
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
		
		
		optionImageContainer: {
			backgroundColor: "#fff",
			width: "100%",
			flex: 1,
			height: 150,
			maxWidth: 140,
			borderRadius: 5,
			marginRight: 10,
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

export { GeneralStyle, DefaultStyle, Font };
