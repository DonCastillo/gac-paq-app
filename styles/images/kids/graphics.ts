import RunningSVG from "assets/images/kids/graphics/running.svg";
import SmallWalkingSVG from "assets/images/kids/graphics/small_walking.svg";
import SittingSVG from "assets/images/kids/graphics/sitting.svg";
import BasketFullSVG from "assets/images/kids/graphics/basket_full.svg";
import VolunteerClubSVG from "assets/images/kids/graphics/volunteer_club.svg";
import WinkPoseSVG from "assets/images/kids/graphics/wink_pose.svg";
import SurprisedPoseSVG from "assets/images/kids/graphics/surprised_pose.svg";
import ChoresSVG from "assets/images/kids/graphics/chores.svg";
import Basket1SVG from "assets/images/kids/graphics/basket_1.svg";
import Basket2SVG from "assets/images/kids/graphics/basket_2.svg";
import Basket4SVG from "assets/images/kids/graphics/basket_4.svg";
import Basket5SVG from "assets/images/kids/graphics/basket_5.svg";
import CarrotSVG from "assets/images/kids/graphics/carrot.svg";
import CarrotBiteSVG from "assets/images/kids/graphics/carrot_bite.svg";
import EmptyBasket from "assets/images/kids/graphics/empty_basket.svg";
import RabbitFaceSVG from "assets/images/kids/logo.svg";
import CarSVG from "assets/images/kids/transportation/car.svg";
import PublicTransportationSVG from "assets/images/kids/transportation/public_transport.svg";
import SchoolBusSVG from "assets/images/kids/transportation/school_bus.svg";
import SkateboardSVG from "assets/images/kids/transportation/skateboard.svg";
import SittingTransportationSVG from "assets/images/kids/graphics/sitting.svg";
import WalkingSVG from "assets/images/kids/transportation/small_walking.svg";
import NeutralSVG from "assets/images/kids/transportation/neutral_pose.svg";

const Graphics = {
	mostly_not_moving: SittingSVG,
	mostly_easy_effort: SmallWalkingSVG,
	mostly_medium: RunningSVG,
	extro_question_page: BasketFullSVG,
	volunteer_club: VolunteerClubSVG,
	chores: ChoresSVG,
	wink_pose: WinkPoseSVG,
	surprised_pose: SurprisedPoseSVG,
	background_image_1: Basket1SVG,
	background_image_2: Basket2SVG,
	background_image_3: Basket4SVG,
	background_image_4: Basket5SVG,
	background_image_5: CarrotSVG,
	background_image_6: CarrotBiteSVG,
	background_image_7: EmptyBasket,
	splash_image: RabbitFaceSVG,
	success_image: RabbitFaceSVG,
	error_image: SurprisedPoseSVG,
	transportation: {
		walking: WalkingSVG,
		wheeling: SkateboardSVG,
		car: CarSVG,
		school_bus: SchoolBusSVG,
		public_transit: PublicTransportationSVG,
		staying_home: SittingTransportationSVG,
		other: NeutralSVG,
	},
};

export default Graphics;
