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
		"en-IN": {
			heading: "Work",
			subheading: "Section 3",
			description: {
				kid: "This section is about work or volunteering away from your home - different from chores. Working would be when you make money for you or your family. Volunteering would be helping others or an organization for free (no money). Work and volunteering can take place at location such as a store, farm, restaurant, etc. Please answer both together.",
				adult:
					"This section is about work or volunteering away from your home - different from chores. Working would be when your child makes money for them or for your family. Volunteering would be helping others or an organization for free (no money). Please answer both together.",
			},
		},
		"mi-NZ": {
			heading: "Te Mahi",
			subheading: "Wāhanga 3",
			description: {
				kid: "E hāngai ana tēnei wāhanga ki te mahi, ki te mahi tūao rānei i tua atu i tō kāinga – He rerekē i ngā mahi o te kāinga. Ko te mahi te wā e whai pūtea ai koe mō te whānau. Ko te tūao te wā e āwhina ai koe i ētahi atu, i tētahi rōpū rānei (kāore he pūtea). Ka kitea te mahi me te tūao ki ngā wāhi pēnei i te hokomaha, i te wharekai, i te rōpū ohaoha tmtm. Tēnā, whakautua tahitia ngā pātai e rua.",
				adult:
					"E hāngai ana tēnei wāhanga ki te mahi, ki te mahi tūao rānei i tua atu i tō kāinga – He rerekē ki ngā mahi o te kāinga. Ko te mahi te wā e whai pūtea ai koe mō te whānau. Ko te tūao te wā e āwhina ai koe i ētahi atu, i tētahi rōpū rānei (kāore he pūtea).Tēnā whakautua tahitia ngā pātai e rua.",
			},
		},
		"en-NZ": {
			heading: "Work",
			subheading: "Section 3",
			description: {
				kid: "This section is about work or volunteering away from your home – different from chores. Working would be when you make money for you or your family. Volunteering would be helping others or an organization for free (no money). Work and volunteering can take place at location such as a store, farm, restaurant, charity etc. Please answer both together.",
				adult:
					"This section is about work or volunteering away from your home – different from chores. Working would be when your child makes money for them or for your family. Volunteering would be helping others or an organisation for free (no money). Please answer both together.",
			},
		},
		"cz-CR": {
			heading: "Práce",
			subheading: "Sekce 3",
			description: {
				kid: "Tato část je o brigádě nebo dobrovolnictví  mimo domov – nejedná se tedy o domácí povinnosti. Brigádou se rozumí vydělávání peněz pro tebe nebo tvou rodinu. Dobrovolnou prací se rozumí bezúplatná pomoc lidem nebo organizacím. K této brigádě nebo dobrovolné práci může docházet např. v obchodě, na farmě, v restauraci apod. prosím odpovězte na obě položky souhrnně.",
				adult:
					"Tato část je o brigádě nebo dobrovolnictví mimo domov – nejedná se tedy o domácí povinnosti. Brigádou se rozumí vydělávání peněz vaším dítětem pro něj nebo vaši rodinu. Dobrovolnictvím se rozumí bezúplatná pomoc lidem nebo organizacím. Do odpovědi prosím zahrňte obě položky.",
			},
		},
		"es-CO": {
			heading: "Trabajo",
			subheading: "Sección 3",
			description: {
				kid: "Esta sección se trata del trabajo o el voluntariado fuera de casa, no incluye las tareas domésticas. Trabajar es ganar dinero para ti o para tu familia. El voluntariado consiste en ayudar a otras personas o a una organización de forma gratuita (sin dinero). El trabajo y el voluntariado pueden llevarse a cabo en lugares como una tienda, una granja, un restaurante, etc. Por favor, responde a estas dos actividades (trabajo y voluntariado) a la vez.",
				adult:
					"Esta sección se trata del trabajo o el voluntariado fuera de casa, no incluye las tareas domésticas. Trabajar es ganar dinero para sí mismo o para su familia. El voluntariado consiste en ayudar a otras personas o a una organización de forma gratuita (sin dinero). El trabajo y el voluntariado pueden llevarse a cabo en lugares como una tienda, una granja, un restaurante, etc. Por favor, responda a estas dos actividades (trabajo y voluntariado) a la vez.",
			},
		},
		"es-CL": {
			heading: "Trabajo",
			subheading: "Sección 3",
			description: {
				kid: "Esta sección se trata del trabajo o el voluntariado fuera de casa, no incluye las tareas domésticas. Trabajar es ganar dinero para ti o para tu familia. El voluntariado consiste en ayudar a otras personas o a una organización de forma gratuita (sin dinero). El trabajo y el voluntariado pueden llevarse a cabo en lugares como una tienda, una granja, un restaurante, etc. Por favor, responda a estas dos actividades (trabajo y voluntariado) a la vez.",
				adult:
					"Esta sección se trata del trabajo o el voluntariado fuera de casa, no incluye las tareas domésticas. Trabajar es ganar dinero para sí mismo o para su familia. El voluntariado consiste en ayudar a otras personas o a una organización de forma gratuita (sin dinero). El trabajo y el voluntariado pueden llevarse a cabo en lugares como una tienda, una granja, un restaurante, etc. Por favor, responda a estas dos actividades (trabajo y voluntariado) a la vez.",
			},
		},
		"en-MW": {
			heading: "Work",
			subheading: "Section 3",
			description: {
				kid: "This section is about work or volunteering away from your home - different from chores. Working would be when you make money for you or your family. Volunteering would be helping others or an organization for free (no money). Work and volunteering can take place at location such as a store, farm, restaurant, etc. Please answer both together.",
				adult:
					"This section is about work or volunteering away from your home - different from chores. Working would be when your child makes money for them or for your family. Volunteering would be helping others or an organization for free (no money). Please answer both together.",
			},
		},
		"en-NG": {
			heading: "Work",
			subheading: "Section 3",
			description: {
				kid: "This section is about work or volunteering away from your home - different from chores. Working would be when you make money for you or your family. Volunteering would be helping others or an organization for free (no money). Work and volunteering can take place at location such as a store, farm, restaurant, etc. Please answer both together.",
				adult:
					"This section is about work or volunteering away from your home - different from chores. Working would be when your child makes money for them or for your family. Volunteering would be helping others or an organization for free (no money). Please answer both together.",
			},
		},
		"ch-MW": {
			heading: "Ntchito",
			subheading: "Gawo lachitatu",
			description: {
				kid: "Gawoli likunena za ntchito yolipidwa kapena yongodzipereka yomwe ungagwire Kumalo omwe sikwanu - izi ndi zosiyana ndi ntchito zapakhomo. Kugwira ntchito kungakhale pamene mukugwira ntchito kuti mupeze ndalama zothandizira inu kapena banja lanu. Ntchito yongodzipereka ingakhale yothandiza ena kapena bungwe kwaulere (popanda kulandira ndalama). Ntchito yolipidwa ndi yongodzipereka itha kuchitika pamalo monga kusitolo, kumunda, malo odyera, ndi ena ambiri. Chonde yankhirani zonse pamodzi.",
				adult:
					"Gawoli likunena za ntchito yolipidwa kapena yongodzipereka yomwe mwana wanu angagwire Kumalo omwe sikunyumba kwanu - izi ndi zosiyana ndi ntchito zapakhomo. Kugwira ntchito kungakhale pamene mwanayo akugwira ntchito kuti mupeze ndalama zothandizira iyeyo kapena banja lanu. Ntchito yongodzipereka ingakhale yongothandiza ena kapena bungwe kwaulere (popanda kulandira ndalama). Ntchito yolipidwa ndi yongodzipereka atha kugwirira pamalo monga kusitolo, kumunda, malo odyera, ndi ena ambiri. Chonde yankhirani zonse pamodzi.",
			},
		},
		"ma-IN": {
			heading: "नोकरीतील कामे",
			subheading: "विभाग ३",
			description: {
				kid: "हा विभाग तुमच्या औपचारिक कामाविषयी किंवा स्वयंसेवक म्हणून काम करण्याविषयी आहे जे तुम्ही घरापासून दूर असताना केले. यात तुम्ही केलेल्या घरातील नेहमीच्या कामांचा समावेश होत नाही. जेव्हा तुम्ही तुमच्यासाठी किंवा तुमच्या कुटुंबासाठी पैसे कमावता ते म्हणजे काम करणे. इतर व्यक्तींना किंवा संस्थेला मोफत (पैसे न घेता) मदत करता ते म्हणजे स्वयंसेवा करणे होय. काम किंवा स्वयंसेवा दुकाने, शेती, हॉटेल्स इत्यादी ठिकाणी होऊ शकते. कृपया दोन्हीची उत्तरे एकत्र द्या.",
				adult:
					"हा विभाग तुमच्या मुलाच्या औपचारिक कामांविषयी किंवा स्वयंसेवक म्हणून काम करण्याबद्दल आहे जे त्याने/ तिने घरापासून दूर असताना केले. यात तुमच्या मुलाने केलेल्या घरातील नेहमीच्या कामांचा समावेश होत नाही. जेव्हा तुमचे मूल स्वतःसाठी किंवा तुमच्या कुटुंबासाठी पैसे कमावते ते म्हणजे काम करणे होय. जेव्हा ते इतर व्यक्तींना किंवा संस्थांना मोफत म्हणजेच पैसे न घेता मदत करते ते म्हणजे स्वयंसेवा होय. काम किंवा स्वयंसेवा दुकाने, शेती, हॉटेल्स इत्यादी ठिकाणी होऊ शकते. कृपया दोन्हीची उत्तरे एकत्र द्या.",
			},
		},
		"hi-IN": {
			heading: "काम",
			subheading: "भाग 3",
			description: {
				kid: "यह अनुभाग आपके घर से दूर नौकरी या स्वयंसेवा के बारे में है - कामकाज से अलग। नौकरी करना तब होगा जब आप अपने या अपने परिवार के लिए पैसे कमाएंगे। स्वयंसेवा का मतलब दूसरों या किसी संगठन को मुफ्त में मदद करना होगा (पैसा नहीं दिया जाएगा)। नौकरी और स्वयंसेवा किसी स्टोर, फार्म, होटल आदि स्थानों पर हो सकती है। कृपया दोनों का उत्तर एक साथ दें।",
				adult:
					"यह अनुभाग आपके घर से दूर नौकरी या स्वयंसेवा के बारे में है - कामकाज से अलग। काम करना तब होगा जब आपका बच्चा अपने लिए या अपने परिवार के लिए पैसा कमा रहा हो। स्वयंसेवा का मतलब दूसरों या किसी संगठन को मुफ्त में मदद करना होगा (पैसा नहीं दिया जाएगा)। कृपया दोनों का उत्तर एक साथ दें।",
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
			subheading: "القسم الثالث [٣]",
			description: {
				kid: "يحتوي هذا القسم على أسئلة حول أعمال تطوعية أو وظائف خارج المنزل – هذا يختلف عن الأعمال المنزلية. الوظيفة قد تكون أي عمل تكتسب مقابله دفعة مالية (راتب). أما العمل التطوعي فهو عبارة عن مساعدة الآخرين أو منظمةٍ ما مجاناً (من دون مقابل مالي). يمكن أن يكون العمل التطوعي أو الوظيفة في أماكن مثل المتاجر أو المطاعم أو المزارع وغيرها. يرجى الإجابة عن كلا النوعين من العمل معاً في الأسئلة التالية.",
				adult:
					"يحتوي هذا القسم على أسئلة حول أعمال تطوعية أو وظائف خارج المنزل – هذا يختلف عن الأعمال المنزلية. الوظيفة قد تكون أي عمل تكتسب مقابله دفعة مالية (راتب). أما العمل التطوعي فهو عبارة عن مساعدة الآخرين أو منظمةٍ ما مجاناً (من دون مقابل مالي). يمكن أن يكون العمل التطوعي أو الوظيفة في أماكن مثل المتاجر أو المطاعم أو المزارع وغيرها. يرجى الإجابة عن كلا النوعين من العمل معاً في الأسئلة التالية.",
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
					"Esta seção trata de trabalho voluntário ou trabalho remunerado fora de sua casa, diferente das atividades e tarefas domésticas. Trabalho remunerado é quando a criança ou adolescente que você é responsável ganha dinheiro para ele ou para a própria família. Trabalho voluntário é quando a criança ou adolescente que você é responsável ajuda outras pessoas ou uma organização gratuitamente, sem receber dinheiro por isso. Tanto o trabalho remunerado quanto o trabalho voluntário podem ocorrer em locais como lojas, igrejas, fazendas, restaurantes, entre outros. Por favor, ao responder às próximas questões, considere tanto o trabalho remunerado quanto o trabalho voluntário.",
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
			subheading: "第三部分",
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
