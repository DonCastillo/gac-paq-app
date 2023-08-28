import RunningSVG from "./../store/assets/images/running.svg";
import SmallWalkingSVG from "./../store/assets/images/small_walking.svg";
import SittingSVG from "./../store/assets/images/sitting.svg";
import BasketSVG from "./../store/assets/images/sitting.svg";
import Basket1SVG from "./../store/assets/images/basket_1.svg";
import Basket2SVG from "./../store/assets/images/basket_2.svg";
import Basket4SVG from "./../store/assets/images/basket_4.svg";
import Basket5SVG from "./../store/assets/images/basket_5.svg";
import CarrotSVG from "./../store/assets/images/carrot.svg";
import CarrotBiteSVG from "./../store/assets/images/carrot_bite.svg";
import EmptyBasket from "./../store/assets/images/empty_basket.svg";

const Images = {
    kid: {
        mostly_not_moving: SittingSVG,
        mostly_easy_effort: SmallWalkingSVG,
        mostly_medium: RunningSVG,
        extro_question_page: BasketSVG,
        background_image_1: Basket1SVG,
        background_image_2: Basket2SVG,
        background_image_3: Basket4SVG,
        background_image_4: Basket5SVG,
        background_image_5: CarrotSVG,
        background_image_6: CarrotBiteSVG,
        background_image_7: EmptyBasket,
    },
    adult: {},
};

export { Images };
