import CarSVG from "assets/images/general/transportation/car.svg";
import PublicTransportationSVG from "assets/images/general/transportation/public_transport.svg";
import SchoolBusSVG from "assets/images/general/transportation/school_bus.svg";
import SkateboardSVG from "assets/images/general/transportation/skateboard.svg";
import SittingSVG from "assets/images/kids/graphics/sitting.svg";
import WalkingSVG from "assets/images/kids/graphics/small_walking.svg";
import NeutralSVG from "assets/images/kids/graphics/neutral_pose.svg";

const GenericImages = {
	pages: {
		phone: {
			language: require("assets/images/generic/phone/1.png"),
			participant: require("assets/images/generic/phone/2.png"),
			mode: require("assets/images/generic/phone/3.png"),
			age: require("assets/images/generic/phone/4.png"),
		},
		tablet: {
			language: require("assets/images/generic/tablet/1.png"),
			participant: require("assets/images/generic/tablet/2.png"),
			mode: require("assets/images/generic/tablet/3.png"),
			age: require("assets/images/generic/tablet/4.png"),
		},
	},
	transportation: {
		walking: WalkingSVG,
		wheeling: SkateboardSVG,
		car: CarSVG,
		school_bus: SchoolBusSVG,
		public_transit: PublicTransportationSVG,
		staying_home: SittingSVG,
		other: NeutralSVG,
	},
};

export default GenericImages;
