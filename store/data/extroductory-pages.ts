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
} from "interface/union.type";
import ChildEthnicitiesSE from "./extroductory-pages/adult/child-ethnicities/sv-SE";

const ChildEthnicitiesPages = [ChildEthnicitiesSE];
const KidExtroductoryPages: LangKidExtroductoryPagesType = [SocialEconomicsIntroKid, GenderKid];
const AdultExtroductoryPages: LangAdultExtroductoryPagesType = [
	SocialEconomicsIntroAdult,
	GenderAdult,
	Difficulties,
	ChildEthnicities,
	ParentEthnicities,
	Relationship,
	Education,
	Financial,
];
const FeedbackExtroductoryPages: LangFeedbackExtroductoryPagesType = [
	Satisfaction,
	Comment,
	AppExtro,
];

export {
	KidExtroductoryPages,
	AdultExtroductoryPages,
	FeedbackExtroductoryPages,
	ChildEthnicitiesPages,
};
