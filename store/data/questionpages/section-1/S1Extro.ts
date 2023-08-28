import ScreenType from "../../../../constants/screen_type";
import ExtroPayloadInterface from "../../../../interface/directus/extro-payload";

const S1Extro: ExtroPayloadInterface = {
    name: "Section 1 Extro",
    type: ScreenType.ExtroQuestion,
    translations: [
        {
            id: 1,
            extro_section_id: 1,
            heading: "Section Complete!",
            image: "74cf789b-e40a-4bcb-a723-bdea3f7315f0",
            subheading: "Only six more to go!",
            languages_id: {
                name: "English",
                lang_code: "en-US",
            },
        },
        {
            id: 2,
            extro_section_id: 1,
            heading: "¡Sección completada!",
            image: "74cf789b-e40a-4bcb-a723-bdea3f7315f0",
            subheading: "¡Solo seis más por hacer!",
            languages_id: {
                name: "Spanish",
                lang_code: "es-ES",
            },
        },
        {
            id: 3,
            extro_section_id: 1,
            heading: "Section terminée!",
            image: "74cf789b-e40a-4bcb-a723-bdea3f7315f0",
            subheading: "Plus que six à faire !",
            languages_id: {
                name: "French",
                lang_code: "fr-FR",
            },
        },
    ],
};

export default S1Extro;
