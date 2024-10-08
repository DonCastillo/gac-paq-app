import Screen from "constants/screen.enum";
import type { LangPreamblePayloadInterface } from "interface/payload.type";

const S3Preamble: LangPreamblePayloadInterface = {
	ident: "work_preamble",
	heading: "Work",
	audio_ident: "work_preamble",
	audio_autoplay: true,
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "Work",
			subheading: "Section 3",
			description: {
				kid: "This section is about work or volunteering away from your home - different from chores. Working would be when you make money for you or your family. Volunteering would be helping others or an organization for free (no money). Work and volunteering can take place at location such as a store, farm, restaurant, etc. Please answer both together.",
				adult:
					"This section is about work or volunteering away from your home - different from chores. Working would be when your child makes money for them or for your family. Volunteering would be helping others or an organization for free (no money). Please answer both together.",
			},
		},
		"en-AE": {
			heading: "Work",
			subheading: "Section 3",
			description: {
				kid: "This section is about work or volunteering away from your home – different from chores. Working would be when you make money for you or your family. Volunteering would be helping others or an organization for free (no money). Work and volunteering can take place at location such as a store, farm, restaurant, etc. Please answer both together.",
				adult:
					"This section is about work or volunteering away from your home – different from chores. Working would be when your child makes money for them or for your family. Volunteering would be helping others or an organization for free (no money). Work and volunteering can take place at location such as a store, farm, restaurant, etc. Please answer both together.",
			},
		},
		"ar-AE": {
			heading: "العمل",
			subheading: "القسم الثالث (٣)",
			description: {
				kid: "يحتوي هذا القسم على أسئلة حول أعمال تطوعية أو وظائف خارج المنزل – هذا يختلف عن الأعمال المنزلية. الوظيفة قد تكون أي عمل تكتسب مقابله دفعة مالية (راتب). أما العمل التطوعي فهو عبارة عن مساعدة الآخرين أو منظمةٍ ما مجاناً (من دون مقابل مالي). يمكن أن يكون العمل التطوعي أو الوظيفة في أماكن مثل المتاجر أو المطاعم أو المزارع وغيرها. يرجى الإجابة عن كلا النوعين من العمل معاً في الأسئلة التالية.",
				adult:
					"يحتوي هذا القسم على أسئلة حول أعمال تطوعية أو وظائف خارج المنزل – هذا يختلف عن الأعمال المنزلية. الوظيفة قد تكون أي عمل تكتسب مقابله دفعة مالية (راتب). أما العمل التطوعي فهو عبارة عن مساعدة الآخرين أو منظمةٍ ما مجاناً (من دون مقابل مالي). يرجى الإجابة عن كلا النوعين من العمل معاً في الأسئلة التالية.",
			},
		},
		"ne-NP": {
			heading: "काम",
			subheading: "खण्ड ३",
			description: {
				kid: "यो खन्ड, तपाइले घरबाहिर (घरायसी काम वाहेक) का काम वा स्वयंमसेवकिय कार्यहरु सगं सम्बन्धित छ। गर्ने कामहरु, आफ्नो वा परिवारका लागि पैसा कमाउने हुन सक्छन् वा कुनै सन्स्थामा निसुल्क काम गर्ने पनि हुन सक्छन् । काम वा स्वयंमसेवकिय कार्य एकै ठाउमा जस्तै पसल, खेत, रेस्टुरा आदि हुन सक्छन् । कृपया दुबैको सँगै उत्तर दिनुहोस्।",
				adult:
					"यो खन्ड, घरबाहिर (घरायसी काम वाहेक) का काम वा स्वयंमसेवकिय कार्यहरु सगं सम्बन्धित छ। गर्ने कामहरुमा, तपाइको छोरा वा छोरीले आफ्नो वा परिवारका लागि पैसा कमाउने हुन सक्छन् वा कुनै सन्स्थामा निसुल्क काम गर्ने पनि हुन सक्छन्। कृपया दुबैको सँगै उत्तर दिनुहोस्।",
			},
		},
		"pt-BR": {
			heading: "Trabalho",
			subheading: "Seção 3",
			description: {
				kid: "Esta seção trata de trabalho voluntário ou trabalho remunerado fora de sua casa, diferente das atividades e tarefas domésticas. Trabalho remunerado é quando você ganha dinheiro para você ou sua família. Trabalho voluntário é quando você ajuda outras pessoas ou uma organização gratuitamente, sem receber dinheiro por isso. Tanto o trabalho remunerado quanto o trabalho voluntário podem ocorrer em locais como lojas, igrejas, fazendas, restaurantes, entre outros. Por favor, ao responder às próximas questões, considere tanto o trabalho remunerado quanto o trabalho voluntário.",
				adult:
					"Esta seção trata de trabalho voluntário ou trabalho remunerado fora de sua casa, diferente das atividades e tarefas domésticas. Trabalho remunerado é quando o seu filho ou filha ganha dinheiro para ele ou para a própria família. Trabalho voluntário é quando o seu filho ou filha ajuda outras pessoas ou uma organização gratuitamente, sem receber dinheiro por isso. Tanto o trabalho remunerado quanto o trabalho voluntário podem ocorrer em locais como lojas, igrejas, fazendas, restaurantes, entre outros. Por favor, ao responder às próximas questões, considere tanto o trabalho remunerado quanto o trabalho voluntário.",
			},
		},
		"sv-SE": {
			heading: "Arbete",
			subheading: "Sektion 3",
			description: {
				kid: "Den här delen handlar om arbete eller ideellt arbete och är inte samma som hushållssysslor. Arbete betyder att man får pengar när man jobbar. Ideellt arbete betyder att man hjälper en organisation utan att få betalt, till exempel att sälja bingolotter åt sitt fotbollslag. Här kommer du få svara på frågor om både arbete och ideellt arbete ihop.",
				adult:
					"Den här delen handlar om arbete eller ideellt arbete och är inte samma som hushållssysslor. Arbete skulle vara om ditt barn eller ni som familj får pengar när barnet arbetar. Ideellt arbete betyder att man hjälper en organisation utan att få betalt, till exempel att sälja bingolotter åt sitt fotbollslag. Här kommer du få svara på frågor om både jobb och ideellt arbete ihop.",
			},
		},
		"th-TH": {
			heading: "การทำงาน",
			subheading: "ส่วนที่ 3",
			description: {
				kid: "ส่วนนี้เป็นคำถามเกี่ยวกับการทำงานหรือการเป็นอาสาสมัครนอกบ้าน ซึ่งไม่รวมการทำงานบ้านในส่วนที่ผ่านมา ในส่วนนี้จะถามการทำงานที่น้องทำแล้วมีรายได้หรือได้รับเงินตอบแทนเพื่อตัวเองหรือเพื่อครอบครัว ส่วนการเป็นอาสาสมัครจะเป็นการทำงานเพื่อช่วยเหลือคนอื่นหรือหน่วยงานต่าง ๆ โดยไม่ได้รับค่าตอบแทน (ไม่ได้เงิน) การทำงานและการเป็นอาสาสมัครสามารถทำได้ตามสถานที่ต่าง ๆ เช่น ร้านขายของ ไร่สวนหรือฟาร์ม ร้านอาหาร ฯลฯ สำหรับคำถามส่วนนี้จะขอให้น้องนึกถึงและตอบทั้งสองอย่างพร้อม ๆ กัน",
				adult:
					"ส่วนนี้เป็นคำถามเกี่ยวกับการทำงานหรือการเป็นอาสาสมัครนอกบ้าน ซึ่งไม่รวมการทำงานบ้านในส่วนที่ผ่านมา ในส่วนนี้จะถามการทำงานที่บุตรหลานของคุณทำแล้วมีรายได้หรือได้รับเงินตอบแทนเพื่อตัวเองหรือเพื่อครอบครัว ส่วนการเป็นอาสาสมัครจะเป็นการทำงานเพื่อช่วยเหลือคนอื่นหรือหน่วยงานต่าง ๆ โดยไม่ได้รับค่าตอบแทน (ไม่ได้เงิน) การทำงานและการเป็นอาสาสมัครสามารถทำได้ตามสถานที่ต่าง ๆ เช่น ร้านขายของ ไร่สวนหรือฟาร์ม ร้านอาหาร ฯลฯ สำหรับคำถามส่วนนี้จะขอให้คุณนึกถึงและตอบทั้งสองอย่างพร้อม ๆ กัน",
			},
		},
		"zh-CN": {
			heading: "工作",
			subheading: "第3部分",
			description: {
				kid: "本部分是关于你在家之外所做的工作（非家务）或志愿服务的一些问题。工作是指为自己或家人赚钱的活动，志愿服务是指无偿帮助他人或组织(没有收入)的活动。工作和志愿服务可以在商店、农场、餐馆等地方进行。请将工作和志愿服务的情况合并起来回答。",
				adult:
					"本部分是关于您的孩子在家之外所做的工作（非家务）或志愿服务的一些问题。工作是指为自己或家人赚钱的活动，志愿服务是指无偿帮助他人或组织(没有收入)的活动。请将工作和志愿服务的情况合并起来回答。",
			},
		},
		"es-ES": {
			heading: "Trabajo",
			subheading: "Sección 3",
			description: {
				kid: "Esta sección se trata del trabajo o el voluntariado fuera de casa, no incluye las tareas del hogar o quehaceres. Trabajar es ganar dinero para ti o para tu familia. El voluntariado es ayudar a otras personas o a una organización de forma gratuita (sin dinero). El trabajo y el voluntariado pueden llevarse a cabo en lugares como una tienda, una granja, un restaurante, etc. Por favor, responde sobre estas dos actividades (trabajo y voluntariado) a la vez.",
				adult:
					"Esta sección se trata del trabajo o el voluntariado que hace su hijo o hija fuera de casa, no incluye las tareas del hogar o quehaceres. Trabajar es cuando su hija o hijo gana dinero para sí mismo o para su familia. El voluntariado es ayudar a otras personas o a una organización de forma gratuita (sin dinero). El trabajo y el voluntariado pueden llevarse a cabo en lugares como una tienda, una granja, un restaurante, etc. Por favor, responda a estas dos actividades (trabajo y voluntariado) a la vez.",
			},
		},
		"es-MX": {
			heading: "Trabajo",
			subheading: "Sección 3",
			description: {
				kid: "Esta sección se trata del trabajo o el voluntariado fuera de casa, no incluye las tareas del hogar o quehaceres. Trabajar es ganar dinero para ti o para tu familia. El voluntariado es ayudar a otras personas o a una organización de forma gratuita (sin dinero). El trabajo y el voluntariado pueden llevarse a cabo en lugares como una tienda, una granja, un restaurante, etc. Por favor, responde sobre estas dos actividades (trabajo y voluntariado) a la vez.",
				adult:
					"Esta sección se trata del trabajo o el voluntariado que hace su hijo o hija fuera de casa, no incluye las tareas del hogar o quehaceres. Trabajar es cuando su hija o hijo gana dinero para sí mismo o para su familia. El voluntariado es ayudar a otras personas o a una organización de forma gratuita (sin dinero). El trabajo y el voluntariado pueden llevarse a cabo en lugares como una tienda, una granja, un restaurante, etc. Por favor, responda a estas dos actividades (trabajo y voluntariado) a la vez.",
			},
		},
		"fr-CA": {
			heading: "Emploi",
			subheading: "Section 3",
			description: {
				kid: "Cette section porte sur le travail ou le bénévolat à l'extérieur de ta maison - contrairement aux tâches ménagères. Le travail te permettrait de gagner de l'argent pour toi ou ta famille. Le bénévolat c'est aider d'autres personnes ou une organisation gratuitement (pas d'argent). Le travail et le bénévolat peuvent avoir lieu à des endroits comme un magasin, une ferme, un restaurant, etc. Nous te demandons de répondre pour le travail et le bénévolat en même temps.",
				adult:
					"Cette section porte sur le travail ou le bénévolat à l'extérieur de la maison de ton enfant - contrairement aux tâches ménagères. Le travail permettrait à ton enfant de gagner de l'argent. Le bénévolat impliquerait d'aider d'autres personnes ou une organisation gratuitement (pas d’argent). Nous te demandons de répondre pour le travail et le bénévolat en même temps.",
			},
		},
	},
};

export default S3Preamble;
