import FWBtnShadowed from "components/derived-buttons/FWBtnShadowed";
import Paragraph from "components/Paragraph";
import React from "react";
import { StyleSheet, View, Modal } from "react-native";
import { GeneralStyle } from "styles/general";
import Images from "styles/images";
import { adjustPageDescriptionText } from "utils/style";

interface Props {
	isVisible: boolean;
	mainText: string;
	buttonText: string;
	status: boolean | undefined;
	setModalVisible: (visible: boolean) => void;
}

const CustomModal = ({
	isVisible,
	mainText,
	buttonText,
	status,
	setModalVisible,
}: Props): React.ReactElement => {
	const ErrorMark = Images.general.error;
	const CheckMark = Images.general.check;

	return (
		<Modal
			transparent={true}
			visible={isVisible}
			onRequestClose={() => {
				setModalVisible(false);
			}}
		>
			<View style={styles.container}>
				<View style={styles.modalContainer}>
					<View style={{}}>
						{status !== undefined && (
							<View
								style={{
									justifyContent: "center",
									alignItems: "center",
									height: 100,
								}}
							>
								{status ? (
									<CheckMark style={styles.statusIcon} />
								) : (
									<ErrorMark style={styles.statusIcon} />
								)}
							</View>
						)}

						<Paragraph
							customStyle={{
								...GeneralStyle.adult.pageParagraph,
								...adjustPageDescriptionText(),
								color: "#000",
								marginTop: 20,
							}}
						>
							{mainText}
						</Paragraph>
						<View style={{ marginTop: 20 }}>
							<FWBtnShadowed
								label={buttonText}
								onPress={() => setModalVisible(false)}
								colorTheme={"#FFCB66"}
							/>
						</View>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default CustomModal;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.8)",
		alignItems: "center",
		justifyContent: "center",
	},
	modalContainer: {
		backgroundColor: "white",
		paddingVertical: 40,
		paddingHorizontal: 30,
		alignSelf: "center",
		position: "absolute",
		zIndex: 9999,
		width: "80%",
		elevation: GeneralStyle.general.modal.elevation,
	},
	statusIcon: {
		width: "100%",
		height: "100%",
		transform: [{ scale: 0.6 }],
	},
});
