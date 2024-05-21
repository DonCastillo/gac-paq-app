import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import RegularPageScreen from "screens/RegularPageScreen";
import SectionType from "constants/section_type";
import { getScreenType } from "utils/screen";
import ScreenType from "constants/screen_type";
import Mode from "constants/mode";
import { loadLanguagesOffline, loadRegionsOffline } from "utils/load";
import GenericSplash from "base_pages/generic/GenericSplash";
import StateKid from "base_pages/kid/StateKid";
import StateType from "constants/state_type";
import StateAdult from "base_pages/adult/StateAdult";
import * as ScreenOrientation from "expo-screen-orientation";
import { getDeviceInfo, getInitialDeviceInfo } from "utils/responsive";
import type DeviceInterface from "interface/dimensions";
import fonts from "styles/fonts";
import { useDispatch, useSelector } from "react-redux";
import { addPage, getMode, setDevice, setSectionTotalPages } from "store/settings/settingsSlice";
import { printSetting } from "utils/sample";
import {
	getFeedbackExtroPages,
	getIntroductoryPages,
	getKidExtroPages,
	getQuestionPages,
	setRegionOption,
	setLanguageOption,
	identifyLastSectionExtroPage,
	addSectionPage,
} from "store/questions/questionsSlice";
import { resetResponses } from "store/responses/responsesSlice";

const Stack = createNativeStackNavigator();

function AppWrapper(): React.ReactElement {
	const [fontsLoaded] = useFonts(fonts);
	const dispatch = useDispatch();
	const introductoryPages = useSelector(getIntroductoryPages);
	const questionPages = useSelector(getQuestionPages);
	const kidExtroPages = useSelector(getKidExtroPages);
	const feedbackExtroPages = useSelector(getFeedbackExtroPages);
	const mode = useSelector(getMode);

	printSetting();
	// printQuestion();

	// set device dimensions
	useEffect(() => {
		const getInitialDeviceInfoAsync = async (): Promise<DeviceInterface> => {
			return await getInitialDeviceInfo();
		};
		getInitialDeviceInfoAsync()
			.then((initialDeviceInfo) => dispatch(setDevice(initialDeviceInfo)))
			.catch(console.error);

		const orientationListener = ScreenOrientation.addOrientationChangeListener(
			(orientationInfo) => {
				const newDeviceInfo = getDeviceInfo(orientationInfo.orientationInfo.orientation);
				dispatch(setDevice(newDeviceInfo));
			},
		);
		return () => {
			ScreenOrientation.removeOrientationChangeListener(orientationListener);
		};
	}, []);

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
		// clear all responses
		dispatch(resetResponses());
		// load offline regions
		const regions = loadRegionsOffline();
		dispatch(setRegionOption(regions));

		// load offline languages
		const languages = loadLanguagesOffline();
		dispatch(setLanguageOption(languages));

		// determine the last section extro page
		dispatch(identifyLastSectionExtroPage());

		let pageNumber = 1;
		let sectionNumber = 0;
		let sectionPageNumber = 1;

		// load introductory pages
		console.log("load intro pages...");
		introductoryPages.forEach((page: any, sectionIndex: number) => {
			const sectionPageNumber = ++sectionIndex;

			// add page to section
			dispatch(
				addPage({
					key: pageNumber,
					page: {
						pageNumber,
						page,
						screen: page.type,
						sectionNumber,
						section: SectionType.Intro,
						sectionPageNumber,
					},
				}),
			);
			// add section total pages
			dispatch(setSectionTotalPages({ sectionNumber, totalPages: sectionPageNumber }));
			pageNumber++;
		});

		// load section question pages
		console.log("load question and section pages...");
		questionPages.forEach((page: any) => {
			// add page to section
			if (getScreenType(page.type) === ScreenType.IntroQuestion) {
				dispatch(addSectionPage(page));
				sectionPageNumber = 1;
				sectionNumber++;
			}

			dispatch(
				addPage({
					key: pageNumber,
					page: {
						pageNumber,
						page,
						screen: page.type,
						section: SectionType.Question,
						sectionNumber,
						sectionPageNumber,
					},
				}),
			);

			// add section total pages
			dispatch(setSectionTotalPages({ sectionNumber, totalPages: sectionPageNumber }));
			sectionPageNumber++;
			pageNumber++;
		});

		// load default extro pages (kids)
		sectionNumber++;
		kidExtroPages.forEach((page: any, sectionIndex: number) => {
			const sectionPageNumber = ++sectionIndex;

			// add page to section
			if (getScreenType(page.type) === ScreenType.IntroQuestion) {
				dispatch(addSectionPage(page));
			}

			dispatch(
				addPage({
					key: pageNumber,
					page: {
						pageNumber,
						page,
						screen: page.type,
						section: SectionType.Extro,
						sectionNumber,
						sectionPageNumber,
					},
				}),
			);

			// add section total pages
			dispatch(setSectionTotalPages({ sectionNumber, totalPages: sectionPageNumber }));
			pageNumber++;
		});

		// load feedback pages
		sectionNumber++;
		feedbackExtroPages.forEach((page: any, sectionIndex: number) => {
			const sectionPageNumber = ++sectionIndex;

			// add page to section
			if (getScreenType(page.type) === ScreenType.IntroQuestion) {
				dispatch(addSectionPage(page));
			}

			dispatch(
				addPage({
					key: pageNumber,
					page: {
						pageNumber,
						page,
						screen: page.type,
						section: SectionType.Feedback,
						sectionNumber,
						sectionPageNumber,
					},
				}),
			);

			// add section total pages
			dispatch(setSectionTotalPages({ sectionNumber, totalPages: sectionPageNumber }));
			pageNumber++;
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
		// <></>
	);
}

export default AppWrapper;
