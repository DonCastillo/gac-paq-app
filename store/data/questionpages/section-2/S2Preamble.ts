import Screen from "constants/screen.enum";
import type { LangPreamblePayloadInterface } from "interface/payload.type";

const S2Preamble: LangPreamblePayloadInterface = {
	ident: "household_preamble",
	heading: "Household Chores",
	audio_ident: "household_preamble",
	audio_autoplay: true,
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "Household Chores",
			subheading: "Section 2",
			description: {
				kid: "This section is about chores or tasks that require you to be active. Examples of chores or tasks include housework, yard work, gardening, and other related tasks.",
				adult:
					"This section is about household chores or tasks that require your child to be active. Examples of chores or tasks include housework, yard work, gardening, and other related tasks.",
			},
		},
		"en-NZ": {
			heading: "Household Chores",
			subheading: "Section 2",
			description: {
				kid: "This section is about chores or jobs that require you to be active. Examples of chores or jobs include housework and outdoor jobs like gardening, lawn mowing and other related jobs.",
				adult:
					"This section is about chores or jobs that require you to be active. Examples of chores or jobs include housework, and outdoor jobs like gardening, lawn mowing and other related jobs.",
			},
		},
		"cz-CR": {
			heading: "Domácí povinnosti",
			subheading: "Sekce 2",
			description: {
				kid: "Tato část je o domácích povinnostech, u kterých jsi pohybově aktivní. Tyto povinnosti zahrnují domácí práce, práce okolo domu, na zahradě apod.",
				adult:
					"Tato část je o domácích povinnostech, u kterých jsou vaše děti pohybově aktivní. Tyto povinnosti zahrnují domácí práce, práce okolo domu, na zahradě apod.",
			},
		},
		"es-CO": {
			heading: "Tareas domesticas",
			subheading: "Sección 2",
			description: {
				kid: "Esta sección trata de las tareas o quehaceres del hogar que requieren actividad física. Ejemplos de tareas o quehaceres incluyen las labores domésticas, el trabajo en el jardín, la jardinería y otras tareas relacionadas.",
				adult:
					"Esta sección trata de las tareas o quehaceres del hogar que requieren actividad física. Ejemplos de tareas o quehaceres incluyen las labores domésticas, el trabajo en el jardín, la jardinería y otras tareas relacionadas.",
			},
		},
		"en-MW": {
			heading: "Household Chores",
			subheading: "Section 2",
			description: {
				kid: "This section is about chores or tasks that require you to be active. Examples of chores or tasks include housework, yard work, gardening, and other related tasks.",
				adult:
					"This section is about household chores or tasks that require your child to be active. Examples of chores or tasks include housework, yard work, gardening, and other related tasks.",
			},
		},
		"en-NG": {
			heading: "Household Chores",
			subheading: "Section 2",
			description: {
				kid: "This section is about chores or tasks that require you to be active. Examples of chores or tasks include housework, yard work, gardening, and other related tasks.",
				adult:
					"This section is about household chores or tasks that require your child to be active. Examples of chores or tasks include housework, yard work, gardening, and other related tasks.",
			},
		},
		"ch-MW": {
			heading: "Ntchito zapakhomo",
			subheading: "Gawo lachiwiri",
			description: {
				kid: "Gawoli likunena za ntchito zapakhomo kapena ntchito zomwe zimafuna kuti ukhale otanganidwa. Zitsanzo za ntchito zapakhomo ndi ntchito yokonza nyumba, panja panyumba, kulima dimba, ndi zina.",
				adult:
					"Gawoli likunena za ntchito zapakhomo kapena ntchito zomwe zimafuna kuti mwana wanu akhale otanganidwa. Zitsanzo za ntchito zapakhomo ndi ntchito yokonza nyumba, panja panyumba, kulima pa munda wapakhomo, ndi zina.",
			},
		},
		"ma-IN": {
			heading: "घरातील नेहमीची कामे",
			subheading: "विभाग २",
			description: {
				kid: "हा विभाग त्या कामांबद्दल आहे जी करताना तुम्हाला सक्रिय असणे आवश्यक आहे. यांमध्ये घरकाम, अंगणातील काम, बागकाम आणि इतर संबंधित कामे यांचा समावेश होतो.",
				adult:
					"हा विभाग त्या कामांबद्दल आहे जी करताना तुमचे मूल सक्रिय असणे आवश्यक आहे. यांमध्ये घरकाम, अंगणातील काम, बागकाम आणि इतर संबंधित कामे यांचा समावेश होतो.",
			},
		},
		"hi-IN": {
			heading: "घरेलू काम",
			subheading: "भाग 2",
			description: {
				kid: "यह अनुभाग उन घरेलू कामकाज या ऐसे कार्यों के बारे में है जिनके लिए आपको सक्रिय रहने की आवश्यकता होती है। घरेलू कामकाज या कार्यों के उदाहरणों में गृहकार्य, यार्ड कार्य, बागवानी और अन्य संबंधित कार्य शामिल हैं।",
				adult:
					"यह अनुभाग उन घरेलू कामकाज या ऐसे कार्यों के बारे में है जिनके लिए आपके बच्चे को सक्रिय रहने की आवश्यकता होती है। घरेलू कामकाज या कार्यों के उदाहरणों में गृहकार्य, यार्ड कार्य, बागवानी और अन्य संबंधित कार्य शामिल हैं।",
			},
		},
		"en-AE": {
			heading: "Household Chores",
			subheading: "Section 2",
			description: {
				kid: "This section is about chores or tasks that require you to be active. Examples of chores or tasks include housework such as washing dishes, preparing meals, gardening tasks, and more.",
				adult:
					"This section is about household chores or tasks that require your child to be active. Examples of chores or tasks include housework such as washing dishes, preparing meals, gardening tasks, and more.",
			},
		},
		"ar-AE": {
			heading: "الواجبات المنزلية",
			subheading: "القسم الثاني [٢]",
			description: {
				kid: "يحتوي هذا القسم على أسئلة حول الأعمال أو المهام التي تتطلب منك النشاط البدني خلال وجودك في المنزل، بما في ذلك الواجبات المنزلية مثل غسل الأطباق، إعداد وجبات الطعام، مهام الزراعة، وغيرها.",
				adult:
					"يحتوي هذا القسم على أسئلة حول الأعمال أو المهام التي تتطلّب من طفلك النشاط البدني خلال وجوده في المنزل، بما في ذلك الواجبات المنزلية مثل غسل الأطباق، إعداد وجبات الطعام، مهام الزراعة، وغيرها.",
			},
		},
		"ne-NP": {
			heading: "घरायसी काम",
			subheading: "खण्ड २",
			description: {
				kid: "यो खन्डले, तपाइले सक्रिय हुनको लागि घरमा गर्ने घरायसी कामलाई जनाउछ । उदाहरणको लागि घरको काम, करेसाबारीको काम, बगैंचामा गोडमेल गर्ने र अन्य कामहरु पर्छन् ।",
				adult:
					"यो खन्डले, तपाईंको छोरा वा छोरीले सक्रिय हुनको लागि घरमा गर्ने घरायसी कामलाई जनाउछ । उदाहरणको लागि घरको काम, करेसाबारीको काम, बगैंचामा गोडमेल गर्ने र अन्य कामहरु पर्छन् ।",
			},
		},
		"pt-BR": {
			heading: "Atividades Ou Tarefas Domésticas",
			subheading: "Seção 2",
			description: {
				kid: "Esta seção trata de tarefas ou afazeres em casa que exigem que você esteja ativo fisicamente. Exemplos de tarefas ou afazeres em casa incluem limpeza de casa, limpeza no jardim, jardinagem, limpeza ou trabalho no quintal, limpeza ou trabalho na varanda, entre outras tarefas relacionadas.",
				adult:
					"Esta seção trata de tarefas ou afazeres em casa que exigem que a criança ou adolescente que você é responsável esteja ativo fisicamente. Exemplos de tarefas ou afazeres em casa incluem limpeza de casa, limpeza no jardim, jardinagem, limpeza ou trabalho no quintal, limpeza ou trabalho na varanda, entre outras tarefas relacionadas.",
			},
		},
		"sv-SE": {
			heading: "Hushållssysslor",
			subheading: "Sektion 2",
			description: {
				kid: "Den här delen handlar om hushållssysslor där du måste vara aktiv (röra på dig). Det kan till exempel vara hushållssysslor både inne och ute, trädgårdsarbete eller andra likande saker.",
				adult:
					"Den här delen handlar om hushållssysslor där ditt barn måste vara aktiv. Det kan till exempel vara hushållssysslor både inne och ute, trädgårdsarbete eller andra likande saker.",
			},
		},
		"th-TH": {
			heading: "งานบ้าน",
			subheading: "ส่วนที่ 2",
			description: {
				kid: "ส่วนนี้เป็นคำถามเกี่ยวกับงานบ้านหรืองานที่ได้รับมอบหมายหน้าที่จากครอบครัว ที่น้องต้องออกแรง ตัวอย่างของงานบ้านหรืองานที่ได้รับมอบหมายในบ้าน เช่น งานทำความสะอาดบ้านต่าง ๆ  งานดูแลสนามบริเวณบ้าน งานทำสวน และงานอื่น ๆ ที่เกี่ยวข้อง",
				adult:
					"ส่วนนี้เป็นคำถามเกี่ยวกับงานบ้านหรืองานที่ได้รับมอบหมายหน้าที่จากครอบครัว ที่บุตรหลานของคุณต้องออกแรง ตัวอย่างของงานบ้านหรืองานที่ได้รับมอบหมายในบ้าน เช่น งานทำความสะอาดบ้านต่าง ๆ  งานดูแลสนามบริเวณบ้าน งานทำสวน และงานอื่น ๆ ที่เกี่ยวข้อง",
			},
		},
		"zh-CN": {
			heading: "家务",
			subheading: "第二部分",
			description: {
				kid: "本部分是关于你做的家务活的一些问题，包括各种家务、打扫庭院、打理植物及其他与家务有关的需要身体活动的任务。",
				adult:
					"本部分是关于您的孩子做的家务活的一些问题，包括各种家务、打扫庭院、打理植物及其他与家务有关的需要身体活动的任务。",
			},
		},
		"es-ES": {
			heading: "Tareas del hogar o quehaceres",
			subheading: "Sección 2",
			description: {
				kid: "Esta sección trata de las tareas o quehaceres del hogar que requieren actividad física. Ejemplos de tareas o quehaceres incluyen las labores domésticas, el trabajo en el patio de casa, la jardinería y otras tareas relacionadas.",
				adult:
					"Esta sección trata de las tareas o quehaceres del hogar que requieren que su hija o hijo sea activo físicamente. Ejemplos de tareas o quehaceres incluyen las labores domésticas, el trabajo en el patio de casa, la jardinería y otras tareas relacionadas.",
			},
		},
		"es-MX": {
			heading: "Tareas del hogar o quehaceres",
			subheading: "Sección 2",
			description: {
				kid: "Esta sección trata de las tareas o quehaceres del hogar que requieren actividad física. Ejemplos de tareas o quehaceres incluyen las tareas del hogar, el trabajo en el jardín, la jardinería y otras tareas relacionadas.",
				adult:
					"Esta sección trata de las tareas o quehaceres del hogar que requieren que su hija o hijo sea activo físicamente. Ejemplos de tareas o quehaceres incluyen las labores domésticas, el trabajo en el jardín, la jardinería y otras tareas relacionadas.",
			},
		},
		"fr-CA": {
			heading: "Tâches Ménagères",
			subheading: "Section 2",
			description: {
				kid: "Cette section porte sur les tâches qui exigent que tu sois actif (active). Les exemples incluent faire le ménage, des travaux extérieurs, jardiner et d'autres tâches semblables.",
				adult:
					"Cette section porte sur les tâches qui exigent que ton enfant soit actif (active). Les exemples incluent faire le ménage, les travaux extérieurs, jardiner et d'autres tâches semblables.",
			},
		},
	},
};

export default S2Preamble;
