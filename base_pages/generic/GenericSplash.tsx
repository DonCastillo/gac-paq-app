import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import LoadingScreenAdult from "base_pages/adult/LoadingScreenAdult";
import { useDispatch } from "react-redux";
import { setIsLoading } from "store/settings/settingsSlice";
import AnimatedView from "components/AnimatedView";
import {
	loadQuestionData,
	removeQuestionData,
	storeQuestionData,
} from "store/questions/questionsThunk";
import { loadPages } from "utils/load_pages.utils";
import { resetResponses } from "store/responses/responsesSlice";

const GenericSplash = (): React.ReactElement => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	useEffect(() => {
		const loadApp = async (): Promise<void> => {
			dispatch(setIsLoading(true));
			await dispatch(removeQuestionData());
			await dispatch(storeQuestionData());
			await dispatch(loadQuestionData("en-CA"));
			dispatch(resetResponses());
			loadPages();
			dispatch(setIsLoading(false));
		};

		const timeout = setTimeout(() => {
			loadApp()
				.then(() => {
					console.log("app reloaded ...");
					navigation.navigate("RegularPageScreen" as never);
				})
				.catch((err) => {
					console.log("error loading app", err);
				});
		}, 3000);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<AnimatedView>
			<LoadingScreenAdult displayTitle={true} />
		</AnimatedView>
	);
};

export default GenericSplash;
