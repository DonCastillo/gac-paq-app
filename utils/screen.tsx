import PageAdult from "../base-pages/adult/PageAdult";
import QuestionAdult from "../base-pages/adult/QuestionAdult";
import QuestionExtroAdult from "../base-pages/adult/QuestionExtroAdult";
import QuestionIntroAdult from "../base-pages/adult/QuestionIntroAdult";
import SplashAdult from "../base-pages/adult/SplashAdult";
import PageKid from "../base-pages/kid/PageKid";
import QuestionExtroKid from "../base-pages/kid/QuestionExtroKid";
import QuestionIntroKid from "../base-pages/kid/QuestionIntroKid";
import QuestionKid from "../base-pages/kid/QuestionKid";
import SplashKid from "../base-pages/kid/SplashKid";
import Mode from "../constants/mode";
import ScreenType from "../constants/screen_type";


function getScreen(mode: Mode, screenType: ScreenType) {
    console.log('inside get screen: ', mode)
    console.log('inside get screen: ', screenType)
    if (mode === Mode.Adult && screenType === ScreenType.Splash)
        return SplashAdult;
    else if (mode === Mode.Adult && screenType === ScreenType.Page)
        return PageAdult;
    else if (mode === Mode.Adult && screenType === ScreenType.Question)
        return QuestionAdult;
    else if (mode === Mode.Adult && screenType === ScreenType.IntroQuestion)
        return QuestionIntroAdult;
    else if (mode === Mode.Adult && screenType === ScreenType.ExtroQuestion)
        return QuestionExtroAdult;
    else if (mode === Mode.Kid && screenType === ScreenType.Splash)
        return SplashKid;
    else if (mode === Mode.Kid && screenType === ScreenType.Page)
        return PageKid;
    else if (mode === Mode.Kid && screenType === ScreenType.Question)
        return QuestionKid;
    else if (mode === Mode.Kid && screenType === ScreenType.IntroQuestion)
        return QuestionIntroKid;
    else if (mode === Mode.Kid && screenType === ScreenType.ExtroQuestion)
        return QuestionExtroKid;
    else
        return <></>
    
}

export { getScreen };