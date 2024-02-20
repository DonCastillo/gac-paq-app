// for the kids, field border should be 3
// border should be color 100 (light color)

// nav should be color200 (dark)
const DARK_TEXT_COLOR = "#333333";
const DEFAULT_BORDER_WIDTH = 3;
const DEFAULT_BORDER_RADIUS = 10;
const DEFAULT_OPTION_FONT_SIZE = 18;

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
		sectionIntroPanel: {
			paddingHorizontal: 60,
			bottom: 0,
			borderTopRightRadius: 45,
			borderTopLeftRadius: 45,
			paddingTop: 20,
			paddingBottom: 30,
		},
		sectionIntroHeading: {
			color: "#fff",
			fontFamily: Font.PoppinsRegular,
			fontSize: 20,
		},
		sectionIntroSubheading: {
			paddingTop: 20,
			color: "#fff",
			fontSize: 32,
			fontFamily: Font.PoppinsBold,
		},
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
		introQuestionContainer: {
			maxWidth: 500,
		},
		introQuestionLabel: {
			fontSize: 25,
			fontFamily: Font.PoppinsMedium,
			color: DARK_TEXT_COLOR,
			// backgroundColor: "red",
		},
		questionQuestionContainer: {
			maxWidth: 500,
		},
		questionQuestionLabel: {
			fontSize: 23,
			fontFamily: Font.PoppinsBold,
			color: DARK_TEXT_COLOR,
		},
		questionQuestionTitle: {
			marginVertical: 5,
			fontFamily: Font.SpaceLight,
			fontSize: 18,
			color: DARK_TEXT_COLOR,
		},

		dropdownPickerContainer: {
			borderWidth: DEFAULT_BORDER_WIDTH,
			borderRadius: DEFAULT_BORDER_RADIUS,
			minHeight: 60,
			fontSize: DEFAULT_OPTION_FONT_SIZE,
			// backgroundColor: "red",
		},
		dropdownPickerListItemContainer: {
			height: 60,
		},
		dropdownPickerListContainer: {
			borderWidth: DEFAULT_BORDER_WIDTH,
		},
		dropdownPickerListLabel: {
			fontSize: DEFAULT_OPTION_FONT_SIZE,
			fontFamily: Font.PoppinsRegular,
		},
		dropdownPickerListLabelChosen: {
			fontSize: DEFAULT_OPTION_FONT_SIZE,
			fontFamily: Font.PoppinsRegular,
		},
		dropdownPickerText: {
			fontSize: DEFAULT_OPTION_FONT_SIZE,
			fontFamily: Font.PoppinsRegular,
		},
		pageHeading: {
			fontSize: 40,
			marginBottom: 50,
			textAlign: "center",
			fontFamily: Font.PoppinsBold,
		},
		pageParagraph: {
			fontFamily: Font.PoppinsMedium,
			fontSize: 15,
			lineHeight: 17,
			maxWidth: 800,
			textAlign: "center",
		},
		optionContainer: {
			borderWidth: DEFAULT_BORDER_WIDTH,
			borderRadius: DEFAULT_BORDER_RADIUS,
			paddingHorizontal: 20,
			paddingVertical: 14,
			marginBottom: 15,
			// backgroundColor: "orange",
		},
		optionText: {
			fontSize: DEFAULT_OPTION_FONT_SIZE,
			fontFamily: Font.SpaceRegular,
		},
	},
	adult: {
		questionContainer: {
			borderRadius: 25,
			maxWidth: 700,
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
			color: DARK_TEXT_COLOR,
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
			fontFamily: Font.SpaceRegular,
			color: DARK_TEXT_COLOR,
		},
		pageHeading: {
			color: "white",
			fontSize: 40,
			marginBottom: 50,
			textAlign: "center",
			fontFamily: Font.PoppinsBold,
			// maxWidth: 700,
			// backgroundColor: "green",
		},
		pageParagraph: {
			color: "white",
			// backgroundColor: "green",
			fontFamily: Font.PoppinsMedium,
			fontSize: 15,
			lineHeight: 17,
			maxWidth: 800,
			textAlign: "left",
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
