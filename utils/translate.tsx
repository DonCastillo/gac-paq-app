import type ButtonInterface from "../interface/button";

function translateButton(buttons: ButtonInterface[], langCode: string | null) {
	if (!langCode) return null;
	if (buttons.length === 0) null;

	const translatedButton = buttons.find((button: ButtonInterface) => {
		const buttonLanguage = button.languages_id.lang_code.toLowerCase();
		langCode = langCode.toLowerCase();
		return buttonLanguage === langCode;
	});
	return translatedButton?.label || null;
}

export { translateButton };
