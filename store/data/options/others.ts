// Q4
const School_4_Options: Record<string, Record<string, string[]>> = {
	"ma-IN": {
		adult_options: ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०"],
	},
};

// Q7
// const School_7_Options: Record<string, Record<string, string[]>> = {
// 	"ma-IN": {
// 		kid_options: ["च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण"],
// 		teen_options: ["च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण"],
// 	},
// };

// Q8
const Household_1_Options: Record<string, Record<string, string[]>> = {
	"ma-IN": {
		kid_options: ["झ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब"],
		teen_options: ["झ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब"],
	},
};

// Q11
const Household_4_Options: Record<string, Record<string, string[]>> = {
	"ma-IN": {
		kid_options: ["ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न"],
		teen_options: ["ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न"],
	},
};

// Q12
const Work_1_Options: Record<string, Record<string, string[]>> = {
	"ma-IN": {
		teen_options: ["ढ", "ण", "त", "थ", "द"],
	},
};

// Q13
const Work_2_Options: Record<string, Record<string, string[]>> = {
	"ma-IN": {
		adult_options: ["च", "छ", "ज", "झ", "ण"],
	},
};

// Q14
const Work_3_Options: Record<string, Record<string, string[]>> = {
	"ma-IN": {
		teen_options: ["त", "थ", "द", "ध", "न"],
	},
};

// Q15
const Transportation_1_Options: Record<string, Record<string, string[]>> = {
	"ma-IN": {
		kid_options: ["ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल"],
		teen_options: ["ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल"],
	},
};

// Q15c
const Transportation_3_Options: Record<string, Record<string, string[]>> = {
	"ma-IN": {
		adult_options: ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०"],
	},
};

// Q16
const Transportation_4_Options: Record<string, Record<string, string[]>> = {
	"ma-IN": {
		teen_options: ["य", "र", "ल", "श", "ह", "ळ"],
	},
};

// Q16c
const Transportation_6_Options: Record<string, Record<string, string[]>> = {
	"ma-IN": {
		adult_options: ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०"],
	},
};

// Q17c walk and wheel
const Transportation_9_11_Options: Record<string, Record<string, string[]>> = {
	"ma-IN": {
		kid_options: ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०"],
		teen_options: ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०"],
		adult_options: ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०"],
	},
};

// Q23
const Outdoors_1_Options: Record<string, Record<string, string[]>> = {
	"ma-IN": {
		kid_options: ["च", "छ", "ज", "झ", "ण"],
		teen_options: ["च", "छ", "ज", "झ", "ण"],
	},
};

// Q24-30
const Numbered_Options: Record<string, Record<string, string[]>> = {
	"ma-IN": {
		adult_options: ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०"],
	},
};

export {
	School_4_Options,
	// School_7_Options,
	Household_1_Options,
	Household_4_Options,
	Transportation_1_Options,
	Transportation_3_Options,
	Transportation_9_11_Options,
	Outdoors_1_Options,
	Work_1_Options,
	Work_2_Options,
	Work_3_Options,
	Transportation_4_Options,
	Transportation_6_Options,
	Numbered_Options,
};
