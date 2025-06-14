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
	getDrawerOpened,
	getEnableNarration,
	getLanguage,
	getMode,
	getSectionTitles,
	getSoundType,
	setEnableNarration,
} from "store/settings/settingsSlice";
import { Audio } from "expo-av";
import { getAudioURI } from "utils/narration";
import { adjustToolbarHeadingText, adjustWritingDirection } from "utils/style";
import LanguageIndicator from "components/LanguageIndicator";
import MenuAdult from "./Toolbar/MenuAdult";
import Mode from "constants/mode.enum";

interface PropsInterface {
	sectionTitle?: string;
}

const Toolbar = ({ sectionTitle }: PropsInterface): React.ReactElement => {
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const sectionTitles = useSelector(getSectionTitles);
	const language = useSelector(getLanguage);
	const device = useSelector(getDevice);
	const dispatch = useDispatch();
	const enableNarration = useSelector(getEnableNarration);
	const drawerOpened = useSelector(getDrawerOpened);
	const isAudioAutoplaying = currentPage?.page?.audio_autoplay ?? false;
	const soundType = useSelector(getSoundType);
	const mode = useSelector(getMode);

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

	useLayoutEffect(() => {
		stopSound();
	}, [drawerOpened]);

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
					if (enableNarration && isAudioAutoplaying && !drawerOpened) {
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
					type={mode === Mode.Kid ? "simple-line-icon" : "material-icons"}
					name={mode === Mode.Kid ? "volume-2" : "volume-up"}
					color={mode === Mode.Kid ? "#000" : "#fff"}
					size={GeneralStyle.general.icon.fontSize}
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
					type={mode === Mode.Kid ? "simple-line-icon" : "material-icons"}
					name={mode === Mode.Kid ? "volume-off" : "volume-off"}
					color={mode === Mode.Kid ? "#000" : "#fff"}
					size={GeneralStyle.general.icon.fontSize}
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
							color: mode === Mode.Kid ? "#000" : "#fff",
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
					gap: 10,
				}}
			>
				{NarrationButtonComponent}
				<MenuAdult />
			</View>
		</View>
	);
};

export default Toolbar;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		paddingHorizontal: 15,
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
