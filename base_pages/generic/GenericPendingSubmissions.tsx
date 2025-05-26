import LoadingScreenAdult from "base_pages/adult/LoadingScreenAdult";
import LoadingScreenKid from "base_pages/kid/LoadingScreenKid";
import AnimatedView from "components/AnimatedView";
import FWBtnShadowed from "components/derived-buttons/FWBtnShadowed";
import PendingSubmissionList from "components/generic/subcomponents/PendingSubmissionList";
import Toolbar from "components/generic/subcomponents/Toolbar";
import Heading from "components/Heading";
import Main from "components/Main";
import Navigation from "components/Navigation";
import TopMain from "components/orientation/TopMain";
import Mode from "constants/mode.enum";
import { type FinalResponseType } from "interface/union.type";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
	getCurrentPageNumber,
	getIsLoading,
	getMode,
	getPhrases,
	setIsLoading,
} from "store/settings/settingsSlice";
import { GeneralStyle } from "styles/general";
import { retrieveResponseFromStorage, sendResponseQueue } from "utils/response.utils";
import { adjustPageHeadingText } from "utils/style";

const GenericPendingSubmissions = (): React.ReactElement => {
	const dispatch = useDispatch();
	const isLoading = useSelector(getIsLoading);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const phrases = useSelector(getPhrases);
	const mode = useSelector(getMode);

	const [pendingResponses, setPendingResponses] = React.useState<FinalResponseType[]>([]);

	const submitResponseHandler = async (): Promise<void> => {
		try {
			dispatch(setIsLoading(true));
			await sendResponseQueue();
			await fetchData();
			console.log("Response submitted successfully");
		} catch (error) {
			console.log("Error submitting response: ", error.message);
		} finally {
			stopPageLoading();
		}
	};

	const fetchData = async (): Promise<void> => {
		try {
			dispatch(setIsLoading(true));
			const storedResponses = await retrieveResponseFromStorage();
			if (
				storedResponses === null ||
				storedResponses === undefined ||
				storedResponses.length === 0
			) {
				setPendingResponses([]);
			} else {
				setPendingResponses(storedResponses);
			}
		} catch (error) {
			console.log("Error submitting response: ", error.message);
			// display error message below this
		} finally {
			stopPageLoading();
		}
	};

	const stopPageLoading = (): void => {
		const timeout = setTimeout(() => {
			clearInterval(timeout);
			dispatch(setIsLoading(false));
		}, 1000);
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (isLoading) {
		if (mode === Mode.Kid) {
			return <LoadingScreenKid key={currentPageNumber} />;
		}
		return <LoadingScreenAdult key={currentPageNumber} />;
	}

	return (
		<View style={styles.container}>
			<Main customStyle={{ paddingTop: 10 }}>
				<Toolbar />
				<TopMain>
					<AnimatedView style={{ width: "100%", flex: 1 }}>
						<View style={{}}>
							<Heading
								customStyle={{
									...GeneralStyle.adult.pageHeading,
									...adjustPageHeadingText(),
									color: "#000",
								}}
							>
								{phrases?.pendingSubmissions}
							</Heading>
						</View>
						<PendingSubmissionList data={pendingResponses} />
					</AnimatedView>
				</TopMain>
				<Navigation>
					<FWBtnShadowed
						label={phrases?.submit}
						onPress={async () => await submitResponseHandler()}
						colorTheme={"#FFCB66"}
					/>
				</Navigation>
			</Main>
		</View>
	);
};

export default GenericPendingSubmissions;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
		backgroundColor: "white",
	},
});
