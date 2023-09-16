import PageAdult from "../base-pages/adult/PageAdult";
import QuestionAdult from "../base-pages/adult/QuestionAdult";
import QuestionExtroAdult from "../base-pages/adult/QuestionExtroAdult";
import QuestionIntroAdult from "../base-pages/adult/QuestionIntroAdult";
import SplashAdult from "../base-pages/adult/SplashAdult";
import PageKid from "../base-pages/kid/PageKid";
import QuestionExtroKid from "../base-pages/kid/QuestionExtroKid";
import QuestionIntroKid from "../base-pages/kid/QuestionIntroKid";
import {default as IntroQuestionSingleKid} from "../base-pages/kid/intro/QuestionSingleKid";
import {default as IntroQuestionSingleAdult} from "../base-pages/adult/intro/QuestionSingleAdult";
import {default as QuestionQuestionSingleKid} from "../base-pages/kid/question/QuestionSingleKid";
import SplashKid from "../base-pages/kid/SplashKid";
import Mode from "../constants/mode";
import ScreenType from "../constants/screen_type";
import SectionType from "../constants/section_type";
import LanguageKid from "../base-pages/kid/LanguageKid";
import LanguageAdult from "../base-pages/adult/LanguageAdult";

function getScreen(mode: Mode | string, screenType: ScreenType | string, sectionType?: SectionType | string) {
    // if (mode === Mode.Adult && screenType === ScreenType.Splash)
    //     return SplashAdult;
    // else if (mode === Mode.Adult && screenType === ScreenType.Question)
    //     return QuestionAdult;
    // else if (mode === Mode.Adult && screenType === ScreenType.IntroQuestion)
    //     return QuestionIntroAdult;
    // else if (mode === Mode.Adult && screenType === ScreenType.ExtroQuestion)
    //     return QuestionExtroAdult;
    // if (mode === Mode.Kid && screenType === ScreenType.Splash)
//     return <SplashKid />;
    if (mode === Mode.Adult && screenType === ScreenType.Language)
        return <LanguageAdult />;
    else if (mode === Mode.Kid && screenType === ScreenType.Language)
        return <LanguageKid />;
    else if (mode === Mode.Adult && screenType === ScreenType.Page)
        return <PageAdult />;
    else if (mode === Mode.Kid && screenType === ScreenType.Page)
        return <PageKid />;
    else if (mode === Mode.Adult && screenType === ScreenType.SingleQuestion && sectionType === SectionType.Intro)
        return <IntroQuestionSingleAdult />;
    else if (mode === Mode.Kid && screenType === ScreenType.SingleQuestion && sectionType === SectionType.Intro)
        return <IntroQuestionSingleKid />;
    else if (mode === Mode.Kid && screenType === ScreenType.SingleQuestion && sectionType === SectionType.Question)
        return <QuestionQuestionSingleKid />;
    else if (mode === Mode.Kid && screenType === ScreenType.IntroQuestion)
        return <QuestionIntroKid />;
    else if (mode === Mode.Kid && screenType === ScreenType.ExtroQuestion)
        return <QuestionExtroKid />;
    else return <></>;
}

function getScreenType(screenType: string) : ScreenType {
    if (screenType === "page") {
        return ScreenType.Page;
    } else if (screenType === "question_single") {
        return ScreenType.SingleQuestion;
    } else if (screenType === "question_intro") {
        return ScreenType.IntroQuestion;
    } else if (screenType === "question_extro") {
        return ScreenType.ExtroQuestion;
    } else {
        return ScreenType.Page;
    }
}

export { getScreen, getScreenType };
