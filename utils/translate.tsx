import type ButtonInterface from "../interface/button";

function translateButton(buttons: ButtonInterface[], langCode: string | null): string | null {
	if (langCode === null || langCode === undefined || langCode === "") return null;
	if (buttons.length === 0) return null;

	const translatedButton = buttons.find((button: ButtonInterface) => {
		const buttonLanguage = button?.languages_id?.lang_code?.toLowerCase();
		const langCodeLowercase = langCode?.toLowerCase();
		return buttonLanguage === langCodeLowercase;
	});

	if (translatedButton === undefined || translatedButton === null) {
		return null;
	} else {
		return translatedButton?.label;
	}
}

export { translateButton };
