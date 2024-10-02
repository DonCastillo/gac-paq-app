import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Icon } from "@rneui/themed";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { GeneralStyle } from "styles/general";
import { moderateScale } from "utils/responsive.utils";
import { useDispatch, useSelector } from "react-redux";
import { Audio } from "expo-av";
import {
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getEnableNarration,
	getIsLoading,
	getLanguage,
	getSectionTitles,
	getSoundType,
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
	const isLoading = useSelector(getIsLoading);
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const enableNarration = useSelector(getEnableNarration);
	const isAudioAutoplaying = currentPage?.page?.audio_autoplay ?? false;
	const soundType = useSelector(getSoundType);

	const soundSrc = useRef<null | string>(null);
	const sound = useRef(new Audio.Sound());

	const [loaded, setLoaded] = useState<boolean>(false);
	const [title, setTitle] = useState<string>(sectionTitle ?? "");
	let NarrationButtonComponent = <></>;

	useEffect(() => {
		if (title === sectionTitle) return;
		if (currentPage.sectionNumber !== null) {
			setTitle(sectionTitles[currentPage.sectionNumber] ?? "");
		} else {
			setTitle("");
		}
	}, [currentPageNumber]);

	// load source file
	useLayoutEffect(() => {
		stopSound();
		unloadSound();
		if (soundType === "online") {
			const audioURI = getAudioURI();
			if (audioURI !== null && soundSrc.current !== audioURI) {
				soundSrc.current = audioURI;
			}
		}
		return () => {
			stopSound();
			unloadSound();
			soundSrc.current = null;
		};
	}, []);

	// load sound
	useLayoutEffect(() => {
		loadSound(soundSrc.current);
		return () => {
			stopSound();
			unloadSound();
			soundSrc.current = null;
		};
	}, [soundSrc]);

	const loadSound = async (soundSrc: string): Promise<void> => {
		setLoaded(false);
		await Audio.setIsEnabledAsync(true);
		await Audio.setAudioModeAsync({
			playsInSilentModeIOS: true,
			allowsRecordingIOS: false,
			interruptionModeIOS: 1,
			shouldDuckAndroid: false,
			interruptionModeAndroid: 1,
		});
		const soundStatus = await sound.current.getStatusAsync();

		// if sound is not loaded, load it
		if (!soundStatus.isLoaded) {
			try {
				// loading sound
				const result = await sound.current.loadAsync({ uri: soundSrc });

				// if sound is not loaded
				if (!result.isLoaded) {
					setLoaded(false);
					throw new Error("Sound not loaded");
				} else {
					setLoaded(true);
					if (enableNarration && isAudioAutoplaying) {
						await playSound();
					}
				}
			} catch (error) {
				setLoaded(false);
				console.log("Sound not loaded", error);
			}
		} else {
			setLoaded(true);
		}
	};

	const unloadSound = async (): Promise<void> => {
		await sound.current.unloadAsync();
		setLoaded(false);
	};

	const playSound = async (): Promise<void> => {
		try {
			const soundStatus = await sound.current.getStatusAsync();
			if (soundStatus.isLoaded) {
				if (!soundStatus.isPlaying) {
					await sound.current.playAsync();
				}
			}
		} catch (error) {
			console.log("Error playing sound", error);
		}
	};

	const stopSound = async (): Promise<void> => {
		try {
			const soundStatus = await sound.current.getStatusAsync();
			if (soundStatus.isLoaded) {
				if (soundStatus.isPlaying) {
					await sound.current.stopAsync();
				}
			}
		} catch (error) {
			console.log("Error playing sound", error);
		}
	};

	NarrationButtonComponent = <></>;
	if (loaded) {
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
								console.log("Error stopping sound", error);
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
								console.log("Error playing sound", error);
							});
					}}
				/>
			);
		}
	} else {
		if (soundSrc.current !== null) {
			NarrationButtonComponent = <ActivityIndicator size="small" />;
		}
	}

	return (
		<View style={{ ...styles.container, paddingVertical: moderateScale(5, device.screenWidth) }}>
			<Text
				style={[
					GeneralStyle.kid.topHeaderSectionTitle,
					{
						fontSize: moderateScale(
							device.isTablet ? (language === "ar-AE" ? 16 : 13) : language === "ar-AE" ? 16 : 13,
							device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
						),
						lineHeight: moderateScale(
							device.isTablet ? (language === "ar-AE" ? 19 : 16) : language === "ar-AE" ? 19 : 16,
							device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
						),
						direction: language === "ar-AE" ? "rtl" : "ltr",
					},
				]}
			>
				{title}
			</Text>
			{NarrationButtonComponent}
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
