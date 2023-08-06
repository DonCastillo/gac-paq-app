import PageInterface from "../interface/page";
import QuestionDropdownInterface from "../interface/question_dropdown";
import QuestionTextInterface from "../interface/question_text";

function translate(translationArray: PageInterface[] | QuestionDropdownInterface[], langCode: string) {
    return translationArray.find(page => {
        const pageLanguage = page.languages_id.lang_code.toLowerCase();
        langCode = langCode.toLowerCase();
        return pageLanguage === langCode;
    });
}

export { translate };
