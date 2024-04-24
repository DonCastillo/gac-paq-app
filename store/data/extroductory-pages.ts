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

const KidExtroductoryPages = [SocialEconomicsIntroKid, GenderKid];
const AdultExtroductoryPages = [
	SocialEconomicsIntroAdult,
	GenderAdult,
	Difficulties,
	ChildEthnicities,
	ParentEthnicities,
	Relationship,
	Education,
	Financial,
];
const FeedbackExtroductoryPages = [Satisfaction, Comment, AppExtro];

export { KidExtroductoryPages, AdultExtroductoryPages, FeedbackExtroductoryPages };
