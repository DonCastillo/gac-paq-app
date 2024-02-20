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
import SocialEconomicsIntro from "./extroductory-pages/SocialEconomicsIntro";

const KidExtroductoryPages = [SocialEconomicsIntro, GenderKid];
const AdultExtroductoryPages = [
	SocialEconomicsIntro,
	GenderAdult,
	Difficulties,
	ChildEthnicities,
	ParentEthnicities,
	Relationship,
	Education,
	Financial,
];
const FeedbackExtroductoryPages = [Satisfaction, AppExtro];

export { KidExtroductoryPages, AdultExtroductoryPages, FeedbackExtroductoryPages };
