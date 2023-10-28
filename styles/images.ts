import RunningSVG from "./../assets/images/kids/running.svg";
import SmallWalkingSVG from "./../assets/images/kids/small_walking.svg";
import SittingSVG from "./../assets/images/kids/sitting.svg";
import BasketSVG from "./../assets/images/kids/basket.svg";
import BasketOutlineSVG from "./../assets/images/kids/basket_outline.svg";
import BasketFullSVG from "./../assets/images/kids/basket_full.svg";
import Basket1SVG from "./../assets/images/kids/basket_1.svg";
import Basket2SVG from "./../assets/images/kids/basket_2.svg";
import Basket4SVG from "./../assets/images/kids/basket_4.svg";
import Basket5SVG from "./../assets/images/kids/basket_5.svg";
import CarrotSVG from "./../assets/images/kids/carrot.svg";
import CarrotBiteSVG from "./../assets/images/kids/carrot_bite.svg";
import EmptyBasket from "./../assets/images/kids/empty_basket.svg";
import RabbitFaceSVG from "./../assets/images/kids/logo.svg";

const GirlExercising = {
	uri: require("./../assets/images/adult/girl-exercising.jpg"),
};
const GirlForest = {
	uri: require("./../assets/images/adult/girl-in-the-forest.jpg"),
};
const GirlHeadphones = {
	uri: require("./../assets/images/adult/girl-with-headphones.jpg"),
};

const Images = {
	kid: {
		mostly_not_moving: SittingSVG,
		mostly_easy_effort: SmallWalkingSVG,
		mostly_medium: RunningSVG,
		extro_question_page: BasketFullSVG,
		background_image_1: Basket1SVG,
		background_image_2: Basket2SVG,
		background_image_3: Basket4SVG,
		background_image_4: Basket5SVG,
		background_image_5: CarrotSVG,
		background_image_6: CarrotBiteSVG,
		background_image_7: EmptyBasket,
		splash_image: RabbitFaceSVG,
	},
	adult: {
		mostly_not_moving: GirlHeadphones,
		mostly_easy_effort: GirlForest,
		mostly_medium: GirlExercising,
	},
};

export { Images };
