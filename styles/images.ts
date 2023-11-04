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
import YellowStrokeLG from "./../assets/images/kids/doodles/stroke_yellow_lg.svg";
import YellowStroke from "./../assets/images/kids/doodles/stroke_yellow.svg";
import GreenStrokeLG from "./../assets/images/kids/doodles/stroke_green_lg.svg";
import GreenStroke from "./../assets/images/kids/doodles/stroke_green.svg";
import PinkStrokeLG from "./../assets/images/kids/doodles/stroke_pink_lg.svg";
import PinkStroke from "./../assets/images/kids/doodles/stroke_pink.svg";
import OrangeStrokeLG from "./../assets/images/kids/doodles/stroke_orange_lg.svg";
import OrangeStroke from "./../assets/images/kids/doodles/stroke_orange.svg";
import RedStarsLG from "./../assets/images/kids/doodles/stars_red_lg.svg";
import RedStars from "./../assets/images/kids/doodles/stars_red.svg";
import YellowStarsLG from "./../assets/images/kids/doodles/stars_yellow_lg.svg";
import YellowStars from "./../assets/images/kids/doodles/stars_yellow.svg";
import PurpleStarsLG from "./../assets/images/kids/doodles/stars_purple_lg.svg";
import PurpleStars from "./../assets/images/kids/doodles/stars_purple.svg";
import BlueStarsLG from "./../assets/images/kids/doodles/stars_blue_lg.svg";
import BlueStars from "./../assets/images/kids/doodles/stars_blue.svg";
import PinkLoopLG from "./../assets/images/kids/doodles/loop_pink_lg.svg";
import PinkLoop from "./../assets/images/kids/doodles/loop_pink.svg";

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
		yellow_stroke_lg: YellowStrokeLG,
		yellow_stroke: YellowStroke,
		pink_stroke_lg: PinkStrokeLG,
		pink_stroke: PinkStroke,
		green_stroke_lg: GreenStrokeLG,
		green_stroke: GreenStroke,
		orange_stroke_lg: OrangeStrokeLG,
		orange_stroke: OrangeStroke,
		yellow_stars_lg: YellowStarsLG,
		yellow_stars: YellowStars,
		red_stars_lg: RedStarsLG,
		red_stars: RedStars,
		purple_stars_lg: PurpleStarsLG,
		purple_stars: PurpleStars,
		blue_stars_lg: BlueStarsLG,
		blue_stars: BlueStars,
		pink_loop_lg: PinkLoopLG,
		pink_loop: PinkLoop,
	},
	adult: {
		mostly_not_moving: GirlHeadphones,
		mostly_easy_effort: GirlForest,
		mostly_medium: GirlExercising,
	},
};

export { Images };
