import Screen from "constants/screen.enum";
import type { LangPreamblePayloadInterface } from "interface/payload.type";

const S6Preamble: LangPreamblePayloadInterface = {
	ident: "play_preamble",
	heading: "Play or Free Time",
	audio_ident: "play_preamble",
	audio_autoplay: true,
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "Play or Free Time",
			subheading: "Section 6",
			description: {
				kid: "This includes all the physical activity that you do during your play or free time. This does not include organized activities or break times in school. For the next questions, do not include the activities that you just told us about.",
				adult:
					"This includes all the physical activity that your child does during their play or free time. This is the time that your child decides how to use. For the next questions, do not include the activities that you just told us about.",
			},
		},
		"en-NZ": {
			heading: "Play or Free Time",
			subheading: "Section 6",
			description: {
				kid: "This section includes all the physical activity that you do during your play or free time. This does not include organised activities or break times in school. For the next questions, do not include the activities that you just told us about.",
				adult:
					"This section includes all the physical activity that your child does during their play or free time. This is the time that your child decides how to use. For the next questions, do not include the activities that you just told us about.",
			},
		},
		"cz-CR": {
			heading: "Hra a volný čas",
			subheading: "Sekce 6",
			description: {
				kid: "TTato část se týká veškeré pohybové aktivity, které se věnuješ při hře nebo během volného času. Nejedná se o organizované aktivity ani přestávky ve škole. Do odpovědí na následující otázky nezahrnuj aktivity, které jsi právě uvedl(a).",
				adult:
					"Tato sekce se týká veškeré pohybové aktivity, které se vaše dítě věnuje při hře nebo během volného času. Je to čas, u kterého se vaše dítě rozhodne, jak jej bude trávit. Do odpovědí na následující otázky nezahrnujte aktivity, které jste právě uvedli.",
			},
		},
		"es-CO": {
			heading: "Juego o tiempo libre",
			subheading: "Sección 6",
			description: {
				kid: "Esto incluye toda la actividad física que realizas durante tu tiempo de juego o tiempo libre. No incluye las actividades organizadas ni los recreos en la escuela. Para las siguientes preguntas, no incluyas las actividades que acabas de informar.",
				adult:
					"Esto incluye toda la actividad física que realiza su hija o hijo durante su tiempo de juego o tiempo libre. No incluye las actividades organizadas ni los recreos en la escuela o colegio. Para las siguientes preguntas, no incluya las actividades que acaba de informar.",
			},
		},
		"en-MW": {
			heading: "Play or Free Time",
			subheading: "Section 6",
			description: {
				kid: "This includes all the physical activity that you do during your play or free time. This does not include organized activities or break times in school. For the next questions, do not include the activities that you just told us about.",
				adult:
					"This includes all the physical activity that your child does during their play or free time. This is the time that your child decides how to use. For the next questions, do not include the activities that you just told us about.",
			},
		},
		"en-NG": {
			heading: "Play or Free Time",
			subheading: "Section 6",
			description: {
				kid: "This includes all the physical activity that you do during your play or free time. This does not include organized activities or break times in school. For the next questions, do not include the activities that you just told us about.",
				adult:
					"This includes all the physical activity that your child does during their play or free time. This is the time that your child decides how to use. For the next questions, do not include the activities that you just told us about.",
			},
		},
		"ch-MW": {
			heading: "Nthawi yosewera kapena yopuma",
			subheading: "Gawo 6",
			description: {
				kid: "Izi zikuphatikiza zochitika zonse zolimbitsa thupi zomwe mumachita mukakhala ndi mpata kapena mukamasewera. Koma sizikuphatikizapo zochitika zokonzedwa ndi sukulu, kalabu kapena nthawi ya buleki ku sukulu. Pa mafunso otsatirawa, musaphatikizepo zochitika zomwe wanena kale.",
				adult:
					"Izi zikuphatikiza zochitika zonse zolimbitsa thupi zomwe mwana wanu amachita akakhala ndi mpata kapena akamasewera. Koma sizikuphatikizapo zochitika zokonzedwa ndi sukulu, kalabu kapena nthawi ya buleki ku sukulu. Pa mafunso otsatirawa, musaphatikizepo zochitika zomwe mwanena kale.",
			},
		},
		"ma-IN": {
			heading: "खेळायचा किंवा मोकळा वेळ",
			subheading: "विभाग ६",
			description: {
				kid: "या विभागात तुम्ही तुमच्या खेळादरम्यान किंवा मोकळ्या वेळेत करत असलेल्या सर्व शारीरिक हालचालींचा समावेश होतो. मात्र, यात तुम्ही शाळेत केलेल्या शारीरिकदृष्ट्या सक्रिय संघटनाची आवश्यकता असलेल्या उपक्रमांचा किंवा शाळेतील मधल्या सुट्ट्यांचा समावेश होत नाही. मोकळ्या वेळेतील शारीरिक हालचालींमध्ये मैदानी खेळ, नाच, कसरत व सक्रियपणे खेळण्याचा समावेश होतो. तुम्ही आत्ताच सांगितलेल्या उपक्रमांचा व हालचालींचा समावेश पुढील प्रश्नांच्या उत्तरांसाठी करू नका.",
				adult:
					"या विभागात तुमचे मूल त्याच्या खेळादरम्यान किंवा मोकळ्या वेळेत करत असलेल्या सर्व शारीरिक हालचालींचा समावेश होतो. यात त्याने शाळेत केलेल्या शारीरिकदृष्ट्या सक्रिय संघटनाची आवश्यकता असलेल्या उपक्रमांचा किंवा शाळेतील मधल्या सुट्ट्यांचा समावेश होत नाही. मोकळ्या वेळेतील शारीरिक हालचालींमध्ये मैदानी खेळ, नाच, कसरत व सक्रियपणे खेळण्याचा समावेश होतो. तुम्ही आत्ताच सांगितलेल्या उपक्रमांचा व हालचालींचा समावेश पुढील प्रश्नांच्या उत्तरांसाठी करू नका.",
			},
		},
		"hi-IN": {
			heading: "खेल या खाली समय",
			subheading: "भाग 6",
			description: {
				kid: "इसमें वे सभी शारीरिक गतिविधियाँ शामिल हैं जो आप अपने खेल या खाली समय के दौरान करते हैं। इसमें स्कूल में संगठित गतिविधियाँ या ब्रेक का समय शामिल नहीं है। अगले प्रश्नों के लिए, उन गतिविधियों को शामिल न करें जिनके बारे में आपने अभी हमें बताया है।",
				adult:
					"इसमें वे सभी शारीरिक गतिविधियाँ शामिल हैं जो आपका बच्चा अपने खेल या खाली समय के दौरान करता है। यही वह समय है जब आपका बच्चा निर्णय लेता है कि इसका उपयोग कैसे करना है। अगले प्रश्नों के लिए, उन गतिविधियों को शामिल न करें जिनके बारे में आपने अभी हमें बताया है।",
			},
		},
		"en-AE": {
			heading: "Play or Free Time",
			subheading: "Section 6",
			description: {
				kid: "This includes all the physical activity that you do during your play or free time. This does not include organized activities or break times in school. For the next questions, do not include the activities that you just told us about.",
				adult:
					"This includes all the physical activity that your child does during their play or free time. This is the time that your child decides how to use. For the next questions, do not include the activities that you just told us about.",
			},
		},
		"ar-AE": {
			heading: "اللعب أو وقت الفراغ",
			subheading: "القسم السادس [٦]",
			description: {
				kid: "يشمل ذلك كل أنواع النشاط البدني التي تقوم بها أثناء اللعب أو وقت الفراغ، ولا يشمل الأنشطة المنظّمة أو أوقات الاستراحة في المدرسة. للأسئلة التالية، لا تشمل الأنشطة التي قمت بذكرها سابقاً.",
				adult:
					"يشمل ذلك كل أنواع النشاط البدني التي يقوم بها طفلك أثناء اللعب أو وقت الفراغ، ولا يشمل الأنشطة المنظمة أو أوقات الاستراحة في المدرسة. للأسئلة التالية، لا تشمل الأنشطة التي قمت بذكرها سابقاً.",
			},
		},
		"ne-NP": {
			heading: "खाली समय वा खेल्ने समय",
			subheading: "खण्ड ६",
			description: {
				kid: "यस खन्डमा तपाईंले खाली समयमा रमाइलोको लागि गर्ने शारीरिक गतिविधिहरु संलग्न छन् l यसमा सन्गठित क्रियाकलाप वा स्कुलको ब्रेक समय पर्दैन l अबका प्रस्नहरुमा अघि भर्खर भनेका क्रियाकलापहरु समावेश नगर्नु होला l",
				adult:
					"यस खन्डमा, तपाईंको छोरा वा छोरीले खाली समयमा रमाइलोको लागि खेल्ने सबै खाले शारीरिक गतिविधिहरु पर्दछन् l यो समय भनेको, तपाइको छोरा वा छोरीले आफुखुशी उपयोग गर्ने समय हो । आगामी प्रश्नमा अगाडी भनिएका गतिविधिहरु समावेश नगर्नुहोला l",
			},
		},
		"pt-BR": {
			heading: "Brincadeiras Ou Tempo Livre",
			subheading: "Seção 6",
			description: {
				kid: "Esta seção inclui todas as atividades físicas que você pratica durante o seu tempo de lazer ou durante as suas brincadeiras. Isso não inclui atividades organizadas, esportes, recreios ou intervalos na escola.",
				adult:
					"Esta seção inclui todas as atividades físicas que a criança ou adolescente que você é responsável pratica durante o tempo de lazer ou durante as brincadeiras. Isso não inclui atividades físicas organizadas, esportes, recreios ou intervalos na escola.",
			},
		},
		"sv-SE": {
			heading: "Lek Och Fritid",
			subheading: "Sektion 6",
			description: {
				kid: "Denna delen handlar om fysisk aktivitet (hur mycket du rör på dig) på fritiden t.ex om man leker eller spelar fotboll med kompisar efter skolan för att det är roligt (ej i lag). Organiserad idrott eller vad man gör på sina raster i skolan räknas inte in i den här delen. För nästa frågor, räkna inte med de aktiviteter som du nyss berättat för oss om.",
				adult:
					"Denna del handlar om fysisk aktivitet på ditt barns fritid tex vid lek eller spontanidrott. Detta är den tid som barnet själv bestämmer vad han/hon gör. För nästa frågor, räkna inte med de aktiviteter som du nyss berättat för oss om.",
			},
		},
		"th-TH": {
			heading: "การเล่นหรือช่วงเวลาว่าง",
			subheading: "ส่วนที่ 6",
			description: {
				kid: "ส่วนนี้เป็นคำถามที่รวมกิจกรรมทางกายทั้งหมดที่น้องทำระหว่างการเล่นหรือช่วงที่มีเวลาว่าง แต่ไม่รวมถึงกิจกรรมที่ถูกจัดขึ้นหรือช่วงพักที่โรงเรียน สำหรับคำถามต่อไปนี้จะไม่รวมกิจกรรมที่น้องตอบไปแล้วในส่วนที่ผ่านมา",
				adult:
					"ส่วนนี้เป็นคำถามที่รวมกิจกรรมทางกายทั้งหมดที่บุตรหลานของคุณทำระหว่างการเล่นหรือช่วงที่มีเวลาว่าง แต่ไม่รวมถึงกิจกรรมที่ถูกจัดขึ้นหรือช่วงพักที่โรงเรียน สำหรับคำถามต่อไปนี้จะไม่รวมกิจกรรมที่คุณตอบไปแล้วในส่วนที่ผ่านมา",
			},
		},
		"zh-CN": {
			heading: "自由活动或玩耍的时间",
			subheading: "第六部分",
			description: {
				kid: "本部分是关于你在校外玩耍或空闲时间进行的所有身体活动的一些问题，不包括有组织的活动或学校休息时间的活动。[应用中会展示不同国家的示例]\n\n对于接下来的问题, 不要包括E部分的活动。",
				adult:
					"本部分是关于您的孩子校外玩耍或空闲时间进行的所有身体活动的一些问题。这部分时间由您的孩子自由支配。\n\n不包括有组织的活动或学校休息时间的活动。",
			},
		},
		"es-ES": {
			heading: "Juego o tiempo libre",
			subheading: "Sección 6",
			description: {
				kid: "Esto incluye toda la actividad física que realizas durante tu tiempo de juego o tiempo libre. No incluye las actividades organizadas ni los recreos en la escuela o colegio.",
				adult:
					"Este apartado incluye toda la actividad física que realiza su hija o hijo durante su tiempo de juego o tiempo libre. No incluye las actividades organizadas ni los recreos en la escuela o colegio.",
			},
		},
		"es-MX": {
			heading: "Juego o tiempo libre",
			subheading: "Sección 6",
			description: {
				kid: "Esto incluye toda la actividad física que realizas durante tu tiempo de juego o tiempo libre. No incluye las actividades organizadas ni los recreos en la escuela o colegio. Para las siguientes preguntas, no incluyas las actividades que acabas de informar.",
				adult:
					"Esto incluye toda la actividad física que realiza su hija o hijo durante su tiempo de juego o tiempo libre. No incluye las actividades organizadas ni los recreos en la escuela o colegio. Para las siguientes preguntas, no incluya las actividades que acaba de informar.",
			},
		},
		"fr-CA": {
			heading: "Jeu ou temps libres",
			subheading: "Section 6",
			description: {
				kid: "Cette section porte sur l'activité physique que tu fais durant tes temps libres. Cela n'inclus pas les activités organisées et les pauses à l'école. Pour répondre aux prochaines questions, n'inclus pas les activités que tu viens de mentionner.",
				adult:
					"Cette section porte sur l'activité physique que ton enfant fait durant ses temps libres. Ce sont des moments qu'il (elle) peux occuper à sa guise. Pour répondre aux prochaines questions, n'inclus pas les activités que tu viens de mentionner.",
			},
		},
	},
};

export default S6Preamble;
