const getCountry = (language = "en-CA"): string => {
	return language.split("-")[1].toUpperCase();
};

export { getCountry };
