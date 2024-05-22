import { useSelector } from "react-redux";
import { getQuestions } from "store/questions/questionsSlice";
import { getSetting } from "store/settings/settingsSlice";

const printSetting = (): any => {
	console.log(
		"----\n",
		JSON.stringify(useSelector(getSetting).sectionTotalPages, null, 1),
		"----\n",
	);
	// console.log("----\n", useSelector(getSetting), "----\n");
};

const printQuestion = (): any => {
	console.log("----\n", JSON.stringify(useSelector(getQuestions), null, 5), "----\n");
};

export { printSetting, printQuestion };
