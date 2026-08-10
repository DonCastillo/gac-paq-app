import Mode from "@/constants/mode.enum";
import useCharacter from "@/hooks/useCharacter";
import { retrieveResponseFromStorage, sendResponseQueue } from "@/utils/response.utils";
import AnimatedView from "@components/AnimatedView";
import FWBtnShadowed from "@components/derived-buttons/FWBtnShadowed";
import CustomModal from "@components/generic/subcomponents/CustomModal";
import PendingSubmissionList from "@components/generic/subcomponents/PendingSubmissionList";
import Toolbar from "@components/generic/subcomponents/Toolbar";
import Heading from "@components/Heading";
import Navigation from "@components/Navigation";
import TopMain from "@components/orientation/TopMain";
import { Component } from "@interface/function.type";
import { FinalResponseType } from "@interface/union.type";
import { getNumPendingSubmissions, getPhrases } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { adjustPageHeadingText } from "@utils/style";
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { LoadingScreenAdultPage } from "../adult";
import { LoadingScreenKidPage } from "../kid";

const GenericPendingSubmissions: Component = () => {
	const phrases = useSelector(getPhrases);
	const numPendingSubmissions = useSelector(getNumPendingSubmissions);
	const { mode } = useCharacter();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const hasLoadedOnce = useRef<boolean>(false);

	const [pendingResponses, setPendingResponses] = useState<FinalResponseType[]>([]);
	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [modalMessage, setModalMessage] = useState<string>("");
	const [modalStatus, setModalStatus] = useState<boolean | undefined>(undefined);

	const submitResponseHandler = async (): Promise<void> => {
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
			setIsLoading(true);
			await sendResponseQueue();
			setModalMessage(phrases?.responsesSubmitted);
			setModalStatus(true);
			await fetchData();
		} catch (error) {
			// somthing went wrong while submitting the responses
			console.log("Error submitting response: ", error);
			setModalMessage(phrases?.tryAgain);
			setModalStatus(false);
		} finally {
			setIsLoading(false);
			setModalVisible(true);
		}
	};

	// showLoading swaps the whole screen for the loading page, which is right for the first read but
	// not for a refresh triggered by a drain the user did not start
	const fetchData = async (showLoading: boolean = true): Promise<void> => {
		try {
			if (showLoading) setIsLoading(true);
			const storedResponses = (await retrieveResponseFromStorage()) || [];
			setPendingResponses(storedResponses);
		} catch (error) {
			console.log("Error reading pending responses: ", error);
		} finally {
			if (showLoading) setIsLoading(false);
		}
	};

	// the queue also drains from the background task and the network-regain effect, neither of which
	// this page starts. Every queue change dispatches setNumPendingSubmissions, so following that
	// count keeps the list in step with all three drain sources instead of only this page's button.
	useEffect(() => {
		fetchData(!hasLoadedOnce.current);
		hasLoadedOnce.current = true;
	}, [numPendingSubmissions]);

	useEffect(() => {
		return () => {
			setPendingResponses([]);
		};
	}, []);

	if (isLoading) {
		if (mode === Mode.Kid) {
			return <LoadingScreenKidPage />;
		}
		return <LoadingScreenAdultPage />;
	}

	return (
		<>
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
					<>
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
					</>
				</AnimatedView>
			</TopMain>
			<Navigation>
				<FWBtnShadowed
					label={phrases?.submit}
					onPress={submitResponseHandler}
					colorTheme={"#FFCB66"}
				/>
			</Navigation>
		</>
	);
};

export default GenericPendingSubmissions;
