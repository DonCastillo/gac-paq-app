import useCharacter from "@/hooks/useCharacter";
import useCurrentPage from "@/hooks/useCurrentPage";
import useNarration from "@/hooks/useNarration";
import { getNarrationPayload } from "@/store/settings/settingsThunk";
import { ParentComponent } from "@interface/function.type";
import { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";

interface NarrationContextType {
	isLoaded: boolean;
	isPlaying: boolean;
	stop: () => void;
	replay: () => void;
	play: () => void;
	pause: () => void;
	currentTime: number;
	duration: number;
}

const NarrationContext = createContext<NarrationContextType | undefined>(undefined);

const NarrationProvider: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const { currentPage } = useCurrentPage();
	const { language, mode } = useCharacter();
	const { isLoaded, isPlaying, stop, replay, play, pause, currentTime, duration } = useNarration();

	// fetch narration payload when language or mode changes
	useEffect(() => {
		if (language && mode) {
			if (["mode", "language_location", "welcome"].includes(currentPage.page.ident)) {
				dispatch(getNarrationPayload({ mode, language }) as any);
			}
		}
	}, [language, mode, currentPage.page.ident]);

	const value: NarrationContextType = {
		isLoaded,
		isPlaying,
		stop,
		replay,
		play,
		pause,
		currentTime,
		duration,
	};

	return <NarrationContext.Provider value={value}>{children}</NarrationContext.Provider>;
};

const useNarrationContext = (): NarrationContextType => {
	const context = useContext(NarrationContext);
	if (context === undefined) {
		throw new Error("useNarrationContext must be used within a NarrationProvider");
	}
	return context;
};

export { NarrationProvider, useNarrationContext };
