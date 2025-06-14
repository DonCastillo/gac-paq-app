// for the kids, field border should be 3
// border should be color 100 (light color)

// nav should be color200 (dark)
const DARK_COLOR = "#333333";
const INACTIVE_COLOR = "#D8D8D8";
const DEFAULT_BORDER_WIDTH = 3;
const DEFAULT_BORDER_RADIUS = 10;
const DEFAULT_OPTION_FONT_SIZE = 18;
const DEFAULT_FIELD_MIN_HEIGHT = 60;
const DEFAULT_ELEVATION = 2;
const DEFAULT_SHADOW_COLOR = "#000";

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
			opacity: 0.65,
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
		icon: {
			fontSize: 33,
		},
		menuOption: {
			// borderBottomColor: "#000",
			// borderBottomWidth: 1,
		},
		menuText: {
			color: "#000",
			fontFamily: "SpaceRegular",
			fontSize: 20,
		},
		modal: {
			elevation: DEFAULT_ELEVATION,
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
			fontFamily: Font.PoppinsMedium,
			color: DARK_COLOR,
		},
		questionQuestionContainer: {
			maxWidth: 500,
		},
		questionQuestionLabel: {
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
		dropdownPickerListItemContainer: {},
		dropdownPickerListContainer: {
			borderWidth: DEFAULT_BORDER_WIDTH,
		},
		dropdownPickerListLabel: {
			fontFamily: Font.PoppinsRegular,
		},
		dropdownPickerListLabelChosen: {
			fontFamily: Font.PoppinsRegular,
		},
		dropdownPickerText: {
			fontFamily: Font.PoppinsRegular,
		},
		pageHeading: {
			marginBottom: 20,
			textAlign: "center",
			fontFamily: Font.PoppinsBold,
		},
		pageParagraph: {
			fontFamily: Font.PoppinsMedium,
			maxWidth: 800,
			textAlign: "center",
		},
		optionContainer: {
			borderWidth: DEFAULT_BORDER_WIDTH,
			borderRadius: DEFAULT_BORDER_RADIUS,
			paddingHorizontal: 20,
			paddingVertical: 14,
			marginBottom: 10,
			marginRight: 10,
			fontFamily: Font.SpaceSemiBold,
		},

		optionText: {
			fontSize: DEFAULT_OPTION_FONT_SIZE,
			fontFamily: Font.SpaceRegular,
		},
		optionImageLabelText: {
			fontSize: DEFAULT_OPTION_FONT_SIZE,
			fontFamily: Font.SpaceRegular,
		},
		optionImageSubLabelText: {
			fontSize: DEFAULT_OPTION_FONT_SIZE - 2,
			fontFamily: Font.SpaceRegular,
		},
		optionImage: {
			borderTopLeftRadius: 5,
			borderTopRightRadius: 5,
		},
		blockOptionContainer: {
			elevation: DEFAULT_ELEVATION,
			backgroundColor: "#fff",
			width: "100%",
			flex: 1,
			// height: 150,
			// maxWidth: 140,
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
			flexDirection: "column",
			position: "relative",
		},
		blockImageLabelContainer: {
			borderBottomLeftRadius: 5,
			borderBottomRightRadius: 5,
			paddingVertical: 10,
			paddingHorizontal: 10,
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
			flex: 1,
			minWidth: "100%",
		},
		flatListScrollContainer: {
			width: 6,
		},
		flatListScrollIndicator: {
			width: 6,
		},
		scrollContainer: {
			width: 6,
		},
		scrollIndicator: {
			width: 6,
		},
	},
	adult: {
		topHeaderSectionTitle: {
			fontFamily: Font.PoppinsRegular,
			fontSize: 22,
			color: "#fff",
		},
		questionContainer: {
			backgroundColor: "#fff",
			borderRadius: 25,
			paddingHorizontal: 30,
			paddingVertical: 20,
			shadowColor: DEFAULT_SHADOW_COLOR,
			shadowOffset: {
				width: 3,
				height: 8,
			},
			shadowOpacity: 0.3,
			shadowRadius: 5,
		},
		questionLabel: {
			fontFamily: Font.PoppinsMedium,
			color: DARK_COLOR,
		},
		questionSubLabel: {
			fontFamily: Font.PoppinsRegular,
			color: DARK_COLOR,
		},
		radioContainer: {
			paddingVertical: 4,
			marginBottom: 5,
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
		},
		pageHeading: {
			color: "white",
			marginBottom: 20,
			textAlign: "center",
			fontFamily: Font.PoppinsBold,
		},
		pageParagraph: {
			color: "white",
			fontFamily: Font.PoppinsMedium,
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
			elevation: DEFAULT_ELEVATION,
			backgroundColor: "#fff",
			width: "100%",
			flex: 1,
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
			flexDirection: "column",
			position: "relative",
		},
		blockImageLabelContainer: {
			borderBottomLeftRadius: 5,
			borderBottomRightRadius: 5,
			paddingVertical: 10,
			paddingHorizontal: 10,
		},
		blockOptionImageContainer: {
			borderTopLeftRadius: 5,
			borderTopRightRadius: 5,
		},
		optionImageLabelText: {
			fontSize: 13,
			fontFamily: Font.SpaceRegular,
		},
		flatListScrollContainer: {
			width: 4,
			backgroundColor: "#c4c4c4" + "99",
		},
		flatListScrollIndicator: {
			width: 4,
			backgroundColor: "#919191",
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
	defaultShadowColor: DEFAULT_SHADOW_COLOR,
	button: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderRadius: 10,
		borderWidth: 2,
		fontSize: 18,
		textAlign: "center",
		color: "#fff",
		backgroundColor: "#fff",
		lineHeight: 27,
		minWidth: 100,
	},
};

export { GeneralStyle, DefaultStyle, Font };
