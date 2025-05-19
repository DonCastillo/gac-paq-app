import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Icon } from "@rneui/themed";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { GeneralStyle } from "styles/general";
import { moderateScale } from "utils/responsive.utils";
import { useDispatch, useSelector } from "react-redux";
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
} from "store/settings/settingsSlice";
import { Audio } from "expo-av";
import { getAudioURI } from "utils/narration";
import { adjustToolbarHeadingText, adjustWritingDirection } from "utils/style";
import LanguageIndicator from "components/LanguageIndicator";
import Menu from "./Toolbar/Menu";

interface PropsInterface {
	sectionTitle?: string;
}

const Toolbar = ({ sectionTitle }: PropsInterface): React.ReactElement => {
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const sectionTitles = useSelector(getSectionTitles);
	const language = useSelector(getLanguage);
	const device = useSelector(getDevice);
	const isLoading = useSelector(getIsLoading);
	const dispatch = useDispatch();
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
	}, [currentPageNumber, sectionTitles]);

	// load source file
	useLayoutEffect(() => {
		console.log("load source file");
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
		console.log("load sound");
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
					accessibilityLabel="Stop narration"
					name="volume-up"
					size={GeneralStyle.general.icon.fontSize}
					color={"#fff"}
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
					accessibilityLabel="Play narration"
					name="volume-off"
					size={GeneralStyle.general.icon.fontSize}
					color={"#fff"}
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
			<View
				style={{
					justifyContent: "flex-start",
					alignItems: "flex-start",
					flexDirection: "row",
					flex: 7,
				}}
			>
				<View style={{ height: "100%", paddingTop: 8 }}>
					<LanguageIndicator langCode={language} />
				</View>
				<Text
					style={[
						GeneralStyle.adult.topHeaderSectionTitle,
						{
							...adjustToolbarHeadingText(),
							direction: adjustWritingDirection(),
							flex: 1,
							marginHorizontal: 5,
							height: "100%",
							paddingTop: 7,
						},
					]}
				>
					{title}
				</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					flex: 2,
					justifyContent: "flex-end",
				}}
			>
				{NarrationButtonComponent}

				<Menu />
			</View>
		</View>
	);
};

export default Toolbar;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		flexDirection: "row",
	},
	icon: {
		flex: 1,
	},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});
