import LocalStorageKey from "constants/localstorage.enum";
import Languages from "store/data/languages";
import { readData, removeData, storeData } from "./localstorage.utils";
import IntroductoryPages from "store/data/introductory-pages";
import QuestionPages from "store/data/question-pages";
import {
	AdultExtroductoryPages,
	FeedbackExtroductoryPages,
	KidExtroductoryPages,
} from "store/data/extroductory-pages";
import DemographicKidPage from "store/data/introductory-pages/demographic_kid_age";
import DemographicTeenPage from "store/data/introductory-pages/demographic_teen_age";
import DemographicAdultPage from "store/data/introductory-pages/demographic_adult";
import DonePhrase from "store/data/phrase/done";
import DontKnowPhrase from "store/data/phrase/dont-know";
import IntroductionPhrase from "store/data/phrase/introduction";
import TryAgainPhrase from "store/data/phrase/try-again";
import FeedbackPhrase from "store/data/phrase/feedback";
import SelectPhrase from "store/data/phrase/select";
import PleaseSpecifyPhrase from "store/data/phrase/please-specify";
import SuccessPage from "store/data/state-pages/success";
import OfflineSuccessPage from "store/data/state-pages/offline-success";
import ErrorPage from "store/data/state-pages/error";
import Transportation7 from "store/data/questionpages/section-4/transportation_7/S4Q7a";
import Transportation8_10 from "store/data/questionpages/section-4/transportation_7/S4Q8_10";
import Transportation9_11 from "store/data/questionpages/section-4/transportation_7/S4Q9_11";
import BackPhrase from "store/data/phrase/back";
import CompletePhrase from "store/data/phrase/complete";
import NextPhrase from "store/data/phrase/next";

// save all the raw pages and their different translations to local storage
const saveAppData = async (): Promise<void> => {
	const appData = {
		languageOption: Languages,
		introductoryPages: IntroductoryPages,
		questionPages: QuestionPages,
		kidExtroPages: KidExtroductoryPages,
		adultExtroPages: AdultExtroductoryPages,
		kidAgePage: DemographicKidPage,
		teenAgePage: DemographicTeenPage,
		adultAgePage: DemographicAdultPage,
		feedbackExtroPages: FeedbackExtroductoryPages,
		backPhrase: BackPhrase,
		completePhrase: CompletePhrase,
		donePhrase: DonePhrase,
		dontKnowPhrase: DontKnowPhrase,
		feedbackPhrase: FeedbackPhrase,
		introductionPhrase: IntroductionPhrase,
		nextPhrase: NextPhrase,
		pleaseSpecifyPhrase: PleaseSpecifyPhrase,
		selectPhrase: SelectPhrase,
		tryAgainPhrase: TryAgainPhrase,
		successPage: SuccessPage,
		offlineSuccessPage: OfflineSuccessPage,
		errorPage: ErrorPage,
		Transportation7,
		Transportation8_10,
		Transportation9_11,
		sectionPages: [],
	};
	await storeData(LocalStorageKey.app_data, appData);
};

const readAppData = async (): Promise<any> => {
	return await readData(LocalStorageKey.app_data).then((data) => data);
};

const removeAppData = async (): Promise<void> => {
	await removeData(LocalStorageKey.app_data);
};

export { saveAppData, readAppData, removeAppData };
