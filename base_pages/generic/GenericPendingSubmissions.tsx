import { useNavigation } from "@react-navigation/native";
import LoadingScreenAdult from "base_pages/adult/LoadingScreenAdult";
import LoadingScreenKid from "base_pages/kid/LoadingScreenKid";
import AnimatedView from "components/AnimatedView";
import FWBtnShadowed from "components/derived-buttons/FWBtnShadowed";
import CustomModal from "components/generic/subcomponents/CustomModal";
import PendingSubmissionList from "components/generic/subcomponents/PendingSubmissionList";
import Toolbar from "components/generic/subcomponents/Toolbar";
import Heading from "components/Heading";
import Main from "components/Main";
import Navigation from "components/Navigation";
import TopMain from "components/orientation/TopMain";
import Mode from "constants/mode.enum";
import { type FinalResponseType } from "interface/union.type";
import React, { useEffect } from "react";
import { BackHandler, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
	getCurrentPageNumber,
	getIsLoading,
	getMode,
	getPhrases,
	setDrawerOpened,
	setIsLoading,
} from "store/settings/settingsSlice";
import { GeneralStyle } from "styles/general";
import { retrieveResponseFromStorage, sendResponseQueue } from "utils/response.utils";
import { adjustPageHeadingText } from "utils/style";

const GenericPendingSubmissions = (): React.ReactElement => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const isLoading = useSelector(getIsLoading);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const phrases = useSelector(getPhrases);
	const mode = useSelector(getMode);

	const [pendingResponses, setPendingResponses] = React.useState<FinalResponseType[]>([]);
	const [modalVisible, setModalVisible] = React.useState<boolean>(false);
	const [modalMessage, setModalMessage] = React.useState<string>("");
	const [modalStatus, setModalStatus] = React.useState<boolean | undefined>(undefined);

	const submitResponseHandler = async (): Promise<void> => {
		// console.log("-----------");
		// console.log("pendingResponses: ", pendingResponses);
		// console.log("pendingResponses.length: ", pendingResponses.length);

		// if there no pending responses to submit
		if (pendingResponses.length === 0) {
			setModalMessage(phrases?.nothingToSubmit);
			setModalVisible(true);
			setModalStatus(undefined);
			return;
		}
		try {
			// successfully submitted the responses
			// throw new Error("This is a test error");
			dispatch(setIsLoading(true));
			await sendResponseQueue();
			setModalMessage(phrases?.responsesSubmitted);
			setModalStatus(true);
			await fetchData();
			console.log("Response submitted successfully");
		} catch (error) {
			// somthing went wrong while submitting the responses
			console.log("Error submitting response: ", error.message);
			setModalMessage(phrases?.tryAgain);
			setModalStatus(false);
		} finally {
			stopPageLoading();
			setModalVisible(true);
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

	useEffect(() => {
		console.log("yyy");
		const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
			console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
			dispatch(setDrawerOpened(false));
			navigation.navigate("RegularPageScreen");
			return true;
		});
		console.log("backHandler added for GenericPendingSubmissions");
		return () => backHandler.remove();
	}, [])

	if (isLoading) {
		if (mode === Mode.Kid) {
			return <LoadingScreenKid key={currentPageNumber} />;
		}
		return <LoadingScreenAdult key={currentPageNumber} />;
	}

	return (
		<View style={styles.container}>
			<Main customStyle={{ paddingTop: 10, position: "relative" }}>
				<CustomModal
					isVisible={modalVisible}
					status={modalStatus}
					mainText={modalMessage}
					buttonText={phrases?.done}
					setModalVisible={(visible: boolean) => setModalVisible(visible)}
				/>
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
	},
});
