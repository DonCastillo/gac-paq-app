import CarSVG from "assets/images/kids/transportation/car.svg";
import PublicTransportationSVG from "assets/images/kids/transportation/public_transport.svg";
import SchoolBusSVG from "assets/images/kids/transportation/school_bus.svg";
import SkateboardSVG from "assets/images/kids/transportation/skateboard.svg";
import BikeSVG from "assets/images/kids/transportation/bike.svg";
import SittingTransportationSVG from "assets/images/kids/graphics/sitting.svg";
import WalkingSVG from "assets/images/kids/transportation/small_walking.svg";
import NeutralSVG from "assets/images/kids/transportation/neutral_pose.svg";

const Options = {
	breaks: {
		easy_effort: require("assets/images/kids/options/breaks/easy-effort.png"),
		medium_effort: require("assets/images/kids/options/breaks/medium-or-hard-effort.png"),
		not_moving: require("assets/images/kids/options/breaks/not-moving.png"),
	},
	chores: {
		easy_effort: require("assets/images/kids/options/chores/easy-effort.png"),
		medium_effort: require("assets/images/kids/options/chores/medium-or-hard-effort.png"),
		not_moving: require("assets/images/kids/options/chores/not-moving.png"),
	},
	physical_education: {
		easy_effort: require("assets/images/kids/options/physical_education/easy-effort.png"),
		medium_effort: require("assets/images/kids/options/physical_education/medium-or-hard-effort.png"),
		not_moving: require("assets/images/kids/options/physical_education/not-moving.png"),
	},
	volunteering: {
		easy_effort: require("assets/images/kids/options/volunteering/easy-effort.png"),
		medium_effort: require("assets/images/kids/options/volunteering/medium-or-hard-effort.png"),
		not_moving: require("assets/images/kids/options/volunteering/not-moving.png"),
	},
	transportation: {
		walking: WalkingSVG,
		wheeling: BikeSVG,
		car: CarSVG,
		school_bus: SchoolBusSVG,
		public_transit: PublicTransportationSVG,
		staying_home: SittingTransportationSVG,
		other: NeutralSVG,
	},
};

export default Options;
