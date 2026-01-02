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
import { getPhrases } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { adjustPageHeadingText } from "@utils/style";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { LoadingScreenAdultPage } from "../adult";
import { LoadingScreenKidPage } from "../kid";

const GenericPendingSubmissions: Component = () => {
	console.log("Rendering GenericPendingSubmissions");
	const phrases = useSelector(getPhrases);
	const { mode } = useCharacter();
	const [isLoading, setIsLoading] = useState<boolean>(false);

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
			console.log("Response submitted successfully");
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

	const fetchData = async (): Promise<void> => {
		try {
			setIsLoading(true);
			const storedResponses = (await retrieveResponseFromStorage()) || [];
			setPendingResponses(storedResponses);
			console.log("Pending Responses: ", storedResponses);
		} catch (error) {
			console.log("Error submitting response: ", error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
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
