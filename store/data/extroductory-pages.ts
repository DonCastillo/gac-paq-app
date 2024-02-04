import ChildEthnicities from "./extroductory-pages/ChildEthnicities";
import Difficulties from "./extroductory-pages/Difficulties";
import Education from "./extroductory-pages/Education";
import Financial from "./extroductory-pages/Financial";
import ParentEthnicities from "./extroductory-pages/ParentEthnicities";
import Relationship from "./extroductory-pages/Relationship";
import GenderAdult from "./extroductory-pages/adult/GenderAdult";
import GenderKid from "./extroductory-pages/kid/GenderKid";

const KidExtroductoryPages = [GenderKid];
const AdultExtroductoryPages = [
	GenderAdult,
	Difficulties,
	ChildEthnicities,
	ParentEthnicities,
	Relationship,
	Education,
	Financial,
];

export { KidExtroductoryPages, AdultExtroductoryPages };
