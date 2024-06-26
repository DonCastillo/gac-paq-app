import { store } from "store/store";

const getAudioURI = (): string | null => {
	const { settings } = store.getState();
	const currentPageAudioIdent = settings.currentPage.page.audio_ident;
	const directusAccessToken = settings.directusAccessToken;
	const directusBaseEndpoint = settings.directusBaseEndpoint;
	const narrations = settings.narrations;

	if (currentPageAudioIdent !== null && currentPageAudioIdent !== undefined) {
		const audioID = narrations[currentPageAudioIdent];
		const audioURI = `${directusBaseEndpoint}/assets/${audioID}?access_token=${directusAccessToken}`;
		return audioURI;
	}

	return null;
};

export { getAudioURI };
