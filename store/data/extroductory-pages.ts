import ChildEthnicities from "./extroductory-pages/adult/ChildEthnicities";
import Difficulties from "./extroductory-pages/adult/Difficulties";
import Education from "./extroductory-pages/adult/Education";
import Financial from "./extroductory-pages/adult/Financial";
import ParentEthnicities from "./extroductory-pages/adult/ParentEthnicities";
import Relationship from "./extroductory-pages/adult/Relationship";
import GenderAdult from "./extroductory-pages/adult/GenderAdult";
import GenderKid from "./extroductory-pages/kid/GenderKid";
import Satisfaction from "./extroductory-pages/Satisfaction";
import Comment from "./extroductory-pages/Comment";
import AppExtro from "./extroductory-pages/AppExtro";
import SocialEconomicsIntroKid from "./extroductory-pages/kid/SocialEconomicsIntroKid";
import SocialEconomicsIntroAdult from "./extroductory-pages/adult/SocialEconomicsIntroAdult";
import type {
	LangAdultExtroductoryPagesType,
	LangFeedbackExtroductoryPagesType,
	LangKidExtroductoryPagesType,
	LangQuestionPagesType,
} from "interface/union.type";
import HBSC1 from "./hbsc-pages/HBSC1";
import HBSCIntro from "./hbsc-pages/HBSCIntro";
import HBSCPreamble from "./hbsc-pages/HBSCPreamble";
import HBSCExtro from "./hbsc-pages/HBSCExtro";
import HBSC2 from "./hbsc-pages/HBSC2";
import GSHSIntro from "./gshs-pages/GSHSIntro";
import GSHSPreamble_PA from "./gshs-pages/GSHSPreamble_PA";
import GSHS1 from "./gshs-pages/GSHS1";
import GSHS2 from "./gshs-pages/GSHS2";
import GSHS3 from "./gshs-pages/GSHS3";
import GSHS4 from "./gshs-pages/GSHS4";
import GSHSPreamble_Sitting from "./gshs-pages/GSHSPreamble_Sitting";
import GSHS5 from "./gshs-pages/GSHS5";
import GSHSPreamble_Sleep from "./gshs-pages/GSHSPreamble_Sleep";
import GSHS6 from "./gshs-pages/GSHS6";
import GSHSExtro from "./gshs-pages/GSHSExtro";
import FeedbackExtro from "./extroductory-pages/FeedbackExtro";
import FeedbackIntro from "./extroductory-pages/FeedbackIntro";
import DemographicExtro from "./extroductory-pages/DemographicExtro";

const KidExtroductoryPages: LangKidExtroductoryPagesType = [
	SocialEconomicsIntroKid,
	GenderKid,
	DemographicExtro,
];
const AdultExtroductoryPages: LangAdultExtroductoryPagesType = [
	SocialEconomicsIntroAdult,
	GenderAdult,
	Difficulties,
	ChildEthnicities,
	ParentEthnicities,
	Relationship,
	Education,
	Financial,
	DemographicExtro,
];
const FeedbackExtroductoryPages: LangFeedbackExtroductoryPagesType = [
	FeedbackIntro,
	Satisfaction,
	Comment,
	FeedbackExtro,
];

const HBSCPages: LangQuestionPagesType = [HBSCIntro, HBSCPreamble, HBSC1, HBSC2, HBSCExtro];

const GSHSPages: LangQuestionPagesType = [
	GSHSIntro,
	GSHSPreamble_PA,
	GSHS1,
	GSHS2,
	GSHS3,
	GSHS4,
	GSHSPreamble_Sitting,
	GSHS5,
	GSHSPreamble_Sleep,
	GSHS6,
	GSHSExtro,
];

const AppExtroPage: LangQuestionPagesType = [AppExtro];

export {
	KidExtroductoryPages,
	AdultExtroductoryPages,
	FeedbackExtroductoryPages,
	HBSCPages,
	GSHSPages,
	AppExtroPage,
};
