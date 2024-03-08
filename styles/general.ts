// for the kids, field border should be 3
// border should be color 100 (light color)

// nav should be color200 (dark)
const DARK_COLOR = "#333333";
const INACTIVE_COLOR = "#D8D8D8";
const DEFAULT_BORDER_WIDTH = 3;
const DEFAULT_BORDER_RADIUS = 10;
const DEFAULT_OPTION_FONT_SIZE = 18;
const DEFAULT_FIELD_MIN_HEIGHT = 60;

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
			paddingBottom: 80,
		},
		sectionIntroHeading: {
			paddingTop: 20,
			color: "#fff",
			fontSize: 32,
			fontFamily: Font.PoppinsBold,
		},
		sectionIntroSubheading: {
			color: "#fff",
			fontFamily: Font.PoppinsRegular,
			fontSize: 20,
		},
		imageFilter: {
			position: "absolute",
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			opacity: 0.75,
			zIndex: 1,
		},
		inlineOptionImage: {
			height: "100%",
			width: "100%",
			minHeight: 50,
			maxWidth: 50,
			marginRight: 15,
			aspectRatio: 1,
		},
	},
	kid: {
		topHeaderSectionTitle: {
			fontFamily: Font.SpaceRegular,
			fontSize: 22,
			color: "#000",
		},
		field: {
			fontSize: DEFAULT_OPTION_FONT_SIZE,
			borderWidth: DEFAULT_BORDER_WIDTH,
			borderRadius: DEFAULT_BORDER_RADIUS,
			paddingHorizontal: 20,
			paddingVertical: 14,
			backgroundColor: "#fff",
		},
		inactiveField: {
			borderColor: INACTIVE_COLOR,
			backgroundColor: "#FFF",
		},
		inactiveText: {
			color: "#000",
		},
		introQuestionContainer: {
			maxWidth: 500,
		},
		introQuestionLabel: {
			fontSize: 25,
			fontFamily: Font.PoppinsMedium,
			color: DARK_COLOR,
		},
		questionQuestionContainer: {
			maxWidth: 500,
		},
		questionQuestionLabel: {
			fontSize: 23,
			fontFamily: Font.PoppinsBold,
			color: DARK_COLOR,
		},
		questionQuestionTitle: {
			marginVertical: 5,
			fontFamily: Font.SpaceLight,
			fontSize: 18,
			color: DARK_COLOR,
		},

		dropdownPickerContainer: {
			borderWidth: DEFAULT_BORDER_WIDTH,
			borderRadius: DEFAULT_BORDER_RADIUS,
			minHeight: DEFAULT_FIELD_MIN_HEIGHT,
			fontSize: DEFAULT_OPTION_FONT_SIZE,
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
			marginBottom: 20,
			textAlign: "center",
			fontFamily: Font.PoppinsBold,
		},
		pageParagraph: {
			fontFamily: Font.PoppinsMedium,
			fontSize: 15,
			lineHeight: 17,
			maxWidth: 800,
			textAlign: "center",
			// backgroundColor: "pink"
		},
		optionContainer: {
			borderWidth: DEFAULT_BORDER_WIDTH,
			borderRadius: DEFAULT_BORDER_RADIUS,
			paddingHorizontal: 20,
			paddingVertical: 14,
			marginBottom: 10,
			marginRight: 10,
		},

		optionText: {
			fontSize: DEFAULT_OPTION_FONT_SIZE,
			fontFamily: Font.SpaceRegular,
		},
		optionImageLabelText: {
			fontSize: 13,
			fontFamily: Font.SpaceRegular,
		},
		optionImage: {
			borderTopLeftRadius: 5,
			borderTopRightRadius: 5,
		},
		blockOptionContainer: {
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
		blockImageLabelContainer: {
			borderBottomLeftRadius: 5,
			borderBottomRightRadius: 5,
			paddingVertical: 5,
			paddingHorizontal: 7,
		},
		blockOptionImageContainer: {
			borderTopLeftRadius: 5,
			borderTopRightRadius: 5,
		},
		extroPageHeading: {
			color: "#000",
			textAlign: "center",
			fontFamily: Font.SpaceBold,
			marginBottom: 20,
		},
		extroPageParagraph: {
			color: "#000",
			textAlign: "center",
			fontFamily: Font.PoppinsMedium,
			marginBottom: 20,
		},
		questionComponentContainer: {
			marginTop: 25,
			flex: 1,
			minWidth: "100%",
		},
	},
	adult: {
		topHeaderSectionTitle: {
			fontFamily: Font.PoppinsRegular,
			fontSize: 22,
			color: "#fff",
		},
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
			color: DARK_COLOR,
		},
		radioContainer: {
			paddingVertical: 4,
			paddingHorizontal: 10,
			marginBottom: 5,
			// flex: 1,
		},
		radioButton: {
			height: 25,
			width: 25,
			marginRight: 15,
			borderRadius: 25 / 2,
			borderColor: INACTIVE_COLOR,
			borderWidth: 2,
		},
		radioText: {
			fontSize: 18,
			fontFamily: Font.SpaceRegular,
			color: DARK_COLOR,
			maxWidth: "100%",
			flexWrap: "wrap",
			height: "100%",
			// flexShrink: 1,
			// flex: 1,
			// flexGrow: 1,
		},
		pageHeading: {
			color: "white",
			fontSize: 40,
			marginBottom: 50,
			textAlign: "center",
			fontFamily: Font.PoppinsBold,
		},
		pageParagraph: {
			color: "white",
			fontFamily: Font.PoppinsMedium,
			fontSize: 15,
			lineHeight: 17,
			maxWidth: 800,
			textAlign: "center",
		},
		field: {
			fontSize: DEFAULT_OPTION_FONT_SIZE,
			borderWidth: 2,
			borderRadius: 4,
			borderColor: "#C5C5C5",
			paddingHorizontal: 15,
			paddingVertical: 10,
			backgroundColor: "#fff",
		},
		inactiveField: {
			borderColor: INACTIVE_COLOR,
			backgroundColor: "#FFF",
		},
		inactiveText: {
			color: "#ABABAB",
		},
		blockOptionContainer: {
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
		blockImageLabelContainer: {
			borderBottomLeftRadius: 5,
			borderBottomRightRadius: 5,
			paddingVertical: 5,
			paddingHorizontal: 7,
		},
		blockOptionImageContainer: {
			borderTopLeftRadius: 5,
			borderTopRightRadius: 5,
		},
		optionImageLabelText: {
			fontSize: 13,
			fontFamily: Font.SpaceRegular,
		},
	},
};

const DefaultStyle = {
	darkColor: DARK_COLOR,
	inactiveColor: INACTIVE_COLOR,
	defaultBorderWidth: DEFAULT_BORDER_WIDTH,
	defaultBorderRadius: DEFAULT_BORDER_RADIUS,
	defaultOptionFontSize: DEFAULT_OPTION_FONT_SIZE,
	defaultFieldMinHeight: DEFAULT_FIELD_MIN_HEIGHT,
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
