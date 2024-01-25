import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext, useEffect } from "react";
import { SettingContext } from "store/settings";
import { QuestionContext } from "store/questions";
import RegularPageScreen from "screens/RegularPageScreen";
import SectionType from "constants/section_type";
import { getScreenType } from "utils/screen";
import ScreenType from "constants/screen_type";
import Mode from "constants/mode";
import { loadLanguagesOffline, loadRegionsOffline } from "utils/load";
import GenericSplash from "base_pages/generic/GenericSplash";
import StateKid from "base_pages/kid/StateKid";
import StateType from "constants/state_type";
import StateAdult from "base_pages/adult//StateAdult";

const Stack = createNativeStackNavigator();

function AppWrapper(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const questionCtx = useContext(QuestionContext);
	const { mode } = settingCtx.settingState;

	const introductoryPages = questionCtx.questionState.introductoryPages;
	const questionPages = questionCtx.questionState.questionPages;

	function SplashScreen(): React.ReactElement {
		return mode === Mode.Kid ? <GenericSplash /> : <GenericSplash />;
	}

	function ErrorScreen(): React.ReactElement {
		return mode === Mode.Kid ? (
			<StateKid state={StateType.Error} />
		) : (
			<StateAdult state={StateType.Error} />
		);
	}

	function SuccessScreen(): React.ReactElement {
		return mode === Mode.Kid ? (
			<StateKid state={StateType.Success} />
		) : (
			<StateAdult state={StateType.Success} />
		);
	}

	useEffect(() => {
		// load offline regions
		const regions = loadRegionsOffline();
		questionCtx.setRegionOption(regions);

		// load offline languages
		const languages = loadLanguagesOffline();
		questionCtx.setLanguageOption(languages);

		// determine the last section extro page
		questionCtx.identifyLastSectionExtroPage();

		let pageNumber = 1;
		let sectionNumber = 0;
		let sectionPageNumber = 1;

		console.log("load intro pages...");
		introductoryPages.forEach((page, sectionIndex) => {
			settingCtx.addPage({
				pageNumber: pageNumber++,
				page,
				screen: page.type,
				sectionNumber,
				section: SectionType.Intro,
				sectionPageNumber: ++sectionIndex,
			});
		});

		console.log("load question and section pages...");
		questionPages.forEach((page) => {
			if (getScreenType(page.type) === ScreenType.IntroQuestion) {
				sectionPageNumber = 1;
				sectionNumber++;
			}

			settingCtx.addPage({
				pageNumber: pageNumber++,
				page,
				screen: page.type,
				section: SectionType.Question,
				sectionNumber,
				sectionPageNumber: sectionPageNumber++,
			});
		});
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					animation: "none",
				}}
			>
				<Stack.Screen
					name="SplashScreen"
					component={SplashScreen}
				/>

				<Stack.Screen
					name="RegularPageScreen"
					component={RegularPageScreen}
				/>
				<Stack.Screen
					name="SuccessScreen"
					component={SuccessScreen}
				/>
				<Stack.Screen
					name="ErrorScreen"
					component={ErrorScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppWrapper;
