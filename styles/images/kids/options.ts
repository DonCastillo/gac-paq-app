import SittingTransportationSVG from "@assets/images/kid/graphics/sitting.svg";
import BikeSVG from "@assets/images/kid/transportation/bike.svg";
import CarSVG from "@assets/images/kid/transportation/car.svg";
import NeutralSVG from "@assets/images/kid/transportation/neutral_pose.svg";
import PublicTransportationSVG from "@assets/images/kid/transportation/public_transport.svg";
import SchoolBusSVG from "@assets/images/kid/transportation/school_bus.svg";
import WalkingSVG from "@assets/images/kid/transportation/small_walking.svg";

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
} as const;

export default Options;
