import { getDirectusAccessToken, getDirectusBaseEndpoint, getEnableNarration, getNarrations } from "@/store/settings/settingsSlice";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import useCurrentPage from "./useCurrentPage";

const useNarration = () => {
	const { currentPageNumber, currentPage } = useCurrentPage();
	const allNarrations = useSelector(getNarrations);
	const directusAccessToken = useSelector(getDirectusAccessToken);
	const directusBaseEndpoint = useSelector(getDirectusBaseEndpoint);
	const [audioIdent, setAudioIdent] = useState<string | null>(currentPage?.page?.audio_ident ?? null);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const enableNarration = useSelector(getEnableNarration);

	const audioURI = useMemo(() => {
		if (!audioIdent) return null;
		if (!allNarrations) return null;
		const audioID = allNarrations[audioIdent];
		if (!audioID) return null;
		return `${directusBaseEndpoint}/assets/${audioID}?access_token=${directusAccessToken}`;
	}, [audioIdent, allNarrations, directusBaseEndpoint, directusAccessToken]);

	// Create/update the player with the current source
	const player = useAudioPlayer(audioURI ?? null);
	const status = useAudioPlayerStatus(player);

	// Track player load/unload state so callers can gate actions
	useEffect(() => {
		setIsLoaded(status?.isLoaded ?? false);
	}, [status?.isLoaded]);

	useEffect(() => {
		setAudioIdent(currentPage?.page?.audio_ident ?? null);

		return () => {
			setAudioIdent(null);
		};
	}, [currentPageNumber, currentPage?.page?.audio_ident]);

	// When the audio source changes, start playback
	useEffect(() => {
		if (!enableNarration) return;
		if (!audioURI) return;
		if (!isLoaded) return;
		if (!currentPage?.page?.audio_autoplay) return;
		try {
			player.play();
		} catch (e) {
			console.warn("Failed to play audioURI", e);
		}
	}, [audioURI, isLoaded, player, enableNarration]);

	const stop = () => {
		if (!isLoaded || !audioURI) return;
		player.pause();
		player.seekTo(0);
	};

	const replay = () => {
		if (!isLoaded || !audioURI) return;
		player.seekTo(0);
		player.play();
	};

	const play = () => {
		if (!isLoaded || !audioURI) return;
		player.play();
	};

	const pause = () => {
		if (!isLoaded || !audioURI) return;
		player.pause();
	};

	return {
		isLoaded,
		isPlaying: status?.playing ?? false,
		currentTime: status?.currentTime ?? 0,
		duration: status?.duration ?? 0,
		stop: stop,
		replay: replay,
		play: play,
		pause: pause,
	};
};

export default useNarration;
