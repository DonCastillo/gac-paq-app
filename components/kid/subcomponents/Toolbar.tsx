import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Icon } from "@rneui/themed";
import React, { useState, useEffect } from "react";
import { GeneralStyle } from "styles/general";
import { moderateScale } from "utils/responsive.utils";
import { useDispatch, useSelector } from "react-redux";
import { type AVPlaybackStatus, Audio } from "expo-av";
import {
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getEnableNarration,
	getIsLoading,
	getMode,
	getSectionTitles,
	setEnableNarration,
	setIsLoading,
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
	const isLoading = useSelector(getIsLoading);
	const dispatch = useDispatch();
	const enableNarration = useSelector(getEnableNarration);
	const isAudioAutoplaying = currentPage?.page?.audio_autoplay ?? false;

	const [title, setTitle] = useState<string>(sectionTitle ?? "");
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [hasAudio, setHasAudio] = useState<boolean>(false);
	const [sound, setSound] = useState<Audio.Sound | null>(null);
	const [sourceSrc, setSourceSrc] = useState<string | null>(null);
	const [status, setStatus] = useState<AVPlaybackStatus | null>(null);
	const [sourceType, setSourceType] = useState<"online" | "offline">("online");
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
		dispatch(setIsLoading(true));
		stopSound();

		// determine if audio exists, fetch appropriate audio file /  endpoint
		// const { sound } = await Audio.Sound.createAsync(require("./../../../assets/audio/P1.wav"), { shouldPlay: true });
		if (sourceType === "online") {
			const audioURI = getAudioURI();
			if (audioURI !== null && sourceSrc !== audioURI) {
				setHasAudio(true);
				setSourceSrc(audioURI);
			}
		}
		dispatch(setIsLoading(false));
	}, [currentPageNumber, mode]);

	// load sound
	useEffect(() => {
		dispatch(setIsLoading(true));
		loadSound().catch((error) => {
			console.log("Error loading sound", error);
			setHasAudio(false);
		});
		dispatch(setIsLoading(false));

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
		dispatch(setIsLoading(true));
		if (sound !== null && sound !== undefined) {
			sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
				if (status.isLoaded) {
					if (status.didJustFinish) {
						stopSound();
					}
				}
			});
		}
		updateStatus();

		// autoplay sounds only works if the following conditions are met:
		// 1. if narration is enabled
		// 2. if there is audio available
		// 3. if the page's audio_autoplay is set to TRUE
		if (hasAudio && enableNarration && isAudioAutoplaying) {
			playSound();
		}
		dispatch(setIsLoading(false));
	}, [sound]);

	// sound status
	const updateStatus = async (): Promise<void> => {
		if (sound !== null && sound !== undefined) {
			const status = await sound.getStatusAsync();
			setStatus(status);
		}
	};

	// load sound
	const loadSound = async (): Promise<void> => {
		await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
		if (sourceSrc === "" || sourceSrc === null || sourceSrc === undefined) return;
		if (sourceType === "online") {
			const { sound } = await Audio.Sound.createAsync({ uri: sourceSrc });
			setSound(sound);
			await updateStatus();
		}
	};

	// play sound
	const playSound = async (): Promise<void> => {
		if (sound !== null && sound !== undefined) {
			await sound.playAsync();
			setIsPlaying(true);
			await updateStatus();
		}
	};

	// stop sound
	const stopSound = async (): Promise<void> => {
		if (sound !== null && sound !== undefined) {
			await sound.stopAsync();
			setIsPlaying(false);
			await updateStatus();
		}
	};

	if (hasAudio) {
		if (enableNarration) {
			NarrationButtonComponent = (
				<Icon
					name="volume-2"
					size={ICON_SIZE}
					type={"simple-line-icon"}
					color={"#000"}
					containerStyle={styles.icon}
					onPress={() => {
						stopSound()
							.then(() => {
								dispatch(setEnableNarration(false));
							})
							.catch((error) => {
								console.error(error);
							});
					}}
				/>
			);
		} else {
			NarrationButtonComponent = (
				<Icon
					name="volume-off"
					size={ICON_SIZE}
					type={"simple-line-icon"}
					color={"#000"}
					containerStyle={styles.icon}
					onPress={() => {
						playSound()
							.then(() => {
								dispatch(setEnableNarration(true));
							})
							.catch((error) => {
								console.error(error);
							});
					}}
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
