import { useNarrationContext } from "@/contexts/common/NarrationContext";
import useCurrentPage from "@/hooks/useCurrentPage";
import { Component } from "@/interface/function.type";
import { getEnableNarration, getIsConnected, getNarrations, setEnableNarration } from "@/store/settings/settingsSlice";
import { useMemo } from "react";
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AudioContainer from "./AudioContainer";
import AudioIcon from "./AudioIcon";

const Audio: Component = () => {
	const { currentPage } = useCurrentPage();
	const enableNarration = useSelector(getEnableNarration);
	const isConnected = useSelector(getIsConnected);
	const allNarrations = useSelector(getNarrations);
	const { isLoaded, isPlaying, stop, replay, play, pause, currentTime, duration } = useNarrationContext();
	const dispatch = useDispatch();

	const showReplayOnAudioAutoplay = useMemo(() => {
		const percentDone = (currentTime / duration) * 100;
		return percentDone >= 80;
	}, [currentTime, duration]);

	const showReplayOnNonAudioAutoplay = useMemo(() => {
		if (currentTime === 0) return true;
		if ((Math.abs(duration - currentTime) / duration) * 100 === 0) return true;
		return false;
	}, [currentTime, duration]);

	const Replay: Component = () => {
		return (
			<AudioIcon
				label="Replay narration"
				kidIcon="action-undo"
				adultIcon="replay"
				controlHandler={() => {
					replay();
				}}
			/>
		);
	};

	const Play: Component = () => {
		return (
			<AudioIcon
				label="Play narration"
				kidIcon="control-play"
				adultIcon="play-arrow"
				controlHandler={() => {
					play();
				}}
			/>
		);
	};

	const Pause: Component = () => {
		return (
			<AudioIcon
				label="Pause narration"
				kidIcon="control-pause"
				adultIcon="pause"
				controlHandler={() => {
					pause();
				}}
			/>
		);
	};

	const Enable: Component = () => {
		return (
			<AudioIcon
				label="Play narration"
				kidIcon="volume-off"
				adultIcon="volume-off"
				controlHandler={() => {
					stop();
					dispatch(setEnableNarration(true));
				}}
			/>
		);
	};

	const Disable: Component = () => {
		return (
			<AudioIcon
				label="Stop narration"
				kidIcon="volume-2"
				adultIcon="volume-up"
				controlHandler={() => {
					stop();
					dispatch(setEnableNarration(false));
				}}
			/>
		);
	};

	if (allNarrations && Object.keys(allNarrations).length > 0 && isConnected && currentPage?.page?.audio_ident) {
		if (enableNarration) {
			if (currentPage?.page?.audio_autoplay) {
				return (
					<AudioContainer>
						<Disable />
						{isLoaded ? (
							<>
								{!isPlaying && showReplayOnAudioAutoplay && <Replay />}
								{!isPlaying && !showReplayOnAudioAutoplay && <Play />}
								{isPlaying && <Pause />}
							</>
						) : (
							<ActivityIndicator size="small" />
						)}
					</AudioContainer>
				);
			} else {
				return (
					<AudioContainer>
						<Disable />
						{isLoaded ? (
							<>
								{!isPlaying && showReplayOnNonAudioAutoplay && <Replay />}
								{!isPlaying && !showReplayOnNonAudioAutoplay && <Play />}
								{isPlaying && <Pause />}
							</>
						) : (
							<ActivityIndicator size="small" />
						)}
					</AudioContainer>
				);
			}
		} else {
			return (
				<AudioContainer>
					<Enable />
				</AudioContainer>
			);
		}
	} else {
		return (
			<AudioContainer>
				<></>
			</AudioContainer>
		);
	}
};

export default Audio;
