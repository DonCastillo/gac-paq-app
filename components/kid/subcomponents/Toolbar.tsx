import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Icon } from "@rneui/themed";
import React, { useState, useEffect, memo } from "react";
import { GeneralStyle } from "styles/general";
import { moderateScale } from "utils/responsive.utils";
import { useSelector } from "react-redux";
import { type AVPlaybackStatus, Audio } from "expo-av";
import {
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getMode,
	getSectionTitles,
} from "store/settings/settingsSlice";
import { getAudioURI } from "utils/narration";

const ICON_SIZE = 30;

interface PropsInterface {
	sectionTitle?: string;
}

const Toolbar = ({ sectionTitle }: PropsInterface): React.ReactElement => {
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const sectionTitles = useSelector(getSectionTitles);
	const device = useSelector(getDevice);
	const mode = useSelector(getMode);

	const [title, setTitle] = useState<string>(sectionTitle ?? "");
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [hasAudio, setHasAudio] = useState<boolean>(false);
	const [sound, setSound] = useState<Audio.Sound | null>(null);
	const [sourceSrc, setSourceSrc] = useState<string | null>(null);
	const [status, setStatus] = useState<AVPlaybackStatus | null>(null);
	const [sourceType, setSourceType] = useState<"online" | "offline">("online");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	let NarrationButtonComponent = <></>;

	useEffect(() => {
		// set title
		if (title === sectionTitle) return;
		if (currentPage.sectionNumber !== null) {
			setTitle(sectionTitles[currentPage.sectionNumber] ?? "");
		} else {
			setTitle("");
		}
	}, [currentPageNumber]);

	useEffect(() => {
		setIsLoading(true);
		const stopSoundOnPageChange = async (): Promise<void> => {
			if (sound !== null && sound !== undefined) {
				await stopSound();
			}
		};

		// stop sound if it is playing
		stopSoundOnPageChange();

		// determine if audio exists, fetch appropriate audio file /  endpoint
		// const { sound } = await Audio.Sound.createAsync(require("./../../../assets/audio/P1.wav"), { shouldPlay: true });
		if (sourceType === "online") {
			const audioURI = getAudioURI();
			if (audioURI !== null && sourceSrc !== audioURI) {
				setHasAudio(true);
				setSourceSrc(audioURI);
			}
		}
		setIsLoading(false);
	}, [currentPageNumber, mode]);

	// load sound
	useEffect(() => {
		loadSound().catch((error) => {
			console.log("Error loading sound", error);
		});

		if (sound !== null && sound !== undefined) {
			return () => {
				console.log("Unloading Sound");
				sound
					.unloadAsync()
					.then(() => {
						console.log("Sound unloaded");
					})
					.catch((error) => {
						console.log("Error unloading sound", error);
					});
			};
		} else {
			return undefined;
		}
	}, [sourceSrc, sourceType]);

	useEffect(() => {
		if (sound !== null && sound !== undefined) {
			sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
				if (status.isLoaded) {
					if (status.didJustFinish) {
						console.log("sound finished");
						stopSound();
					}
				}
			});
		}
		updateStatus();
	}, [sound]);

	// sound status
	const updateStatus = async (): Promise<void> => {
		if (sound !== null && sound !== undefined) {
			setIsLoading(true);
			const status = await sound.getStatusAsync();
			setStatus(status);
			setIsLoading(false);
		}
	};

	// load sound
	const loadSound = async (): Promise<void> => {
		await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

		if (sourceSrc === "" || sourceSrc === null || sourceSrc === undefined) return;
		if (sourceType === "online") {
			setIsLoading(true);
			const { sound } = await Audio.Sound.createAsync({ uri: sourceSrc });
			setSound(sound);
			await updateStatus();
			setIsLoading(false);
		}
	};

	// play sound
	const playSound = async (): Promise<void> => {
		if (sound !== null && sound !== undefined) {
			setIsLoading(true);
			await sound.playAsync();
			setTimeout(() => {}, 9000);
			setIsPlaying(true);
			await updateStatus();
			setIsLoading(false);
		}
	};

	// stop sound
	const stopSound = async (): Promise<void> => {
		if (sound !== null && sound !== undefined) {
			setIsLoading(true);
			await sound.stopAsync();
			setIsPlaying(false);
			await updateStatus();
			setIsLoading(false);
		}
	};

	if (hasAudio) {
		if (isPlaying) {
			NarrationButtonComponent = (
				<Icon
					name="volume-off"
					size={ICON_SIZE}
					type={"simple-line-icon"}
					color={"#000"}
					containerStyle={styles.icon}
					onPress={stopSound}
				/>
			);
		} else {
			NarrationButtonComponent = (
				<Icon
					name="volume-2"
					size={ICON_SIZE}
					type={"simple-line-icon"}
					color={"#000"}
					containerStyle={styles.icon}
					onPress={playSound}
				/>
			);
		}
	}

	return (
		<View style={{ ...styles.container, paddingVertical: moderateScale(5, device.screenWidth) }}>
			<Text
				style={[
					GeneralStyle.kid.topHeaderSectionTitle,
					{
						fontSize: moderateScale(
							device.isTablet ? 13 : 13,
							device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
						),
						lineHeight: moderateScale(
							device.isTablet ? 16 : 16,
							device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
						),
					},
				]}
			>
				{title}
			</Text>
			{!isLoading ? NarrationButtonComponent : <ActivityIndicator size="small" />}
		</View>
	);
};

export default Toolbar;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		height: "100%",
		maxHeight: 45,
	},
	safearea: {},
	icon: {},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});
