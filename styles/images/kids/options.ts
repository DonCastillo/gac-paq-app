import CarSVG from "assets/images/kids/transportation/car.svg";
import PublicTransportationSVG from "assets/images/kids/transportation/public_transport.svg";
import SchoolBusSVG from "assets/images/kids/transportation/school_bus.svg";
import BikeSVG from "assets/images/kids/transportation/bike.svg";
import SittingTransportationSVG from "assets/images/kids/graphics/sitting.svg";
import WalkingSVG from "assets/images/kids/transportation/small_walking.svg";
import NeutralSVG from "assets/images/kids/transportation/neutral_pose.svg";

const Options = {
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
