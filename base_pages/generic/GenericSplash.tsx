import React, { useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import LoadingScreenAdult from "base_pages/adult/LoadingScreenAdult";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPageNumber, getLanguage, getMode, skipPage } from "store/settings/settingsSlice";
import AnimatedView from "components/AnimatedView";
import {
	loadQuestionData,
	removeQuestionData,
	storeQuestionData,
} from "store/questions/questionsThunk";
import { loadPages } from "utils/load_pages.utils";
import { changeMode } from "utils/mode.utils";
import { resetResponses } from "store/responses/responsesSlice";

const GenericSplash = (): React.ReactElement => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const mode = useSelector(getMode);
	const currentPageNumber = useSelector(getCurrentPageNumber);

	const loadApp = async (): Promise<void> => {
		await dispatch(removeQuestionData());
		await dispatch(storeQuestionData());
		await dispatch(loadQuestionData(language));
		dispatch(resetResponses());
		loadPages();
		changeMode(mode, language);
		dispatch(skipPage(1));
	};

	useFocusEffect(
		useCallback(() => {
			const timer = setTimeout(() => {
				console.log("useFocusEffect on GenericSplash");
				loadApp()
					.then(() => {
						console.log("finished reloading app");
						navigation.navigate("RegularPageScreen" as never);
					})
					.catch((error) => {
						console.log(error);
					});
			}, 3000);

			return () => {
				console.log("exiting GenericSplash");
				clearTimeout(timer);
			};
		}, [navigation, currentPageNumber]),
	);

	return (
		<AnimatedView>
			<LoadingScreenAdult displayTitle={true} />
		</AnimatedView>
	);
};

export default GenericSplash;
