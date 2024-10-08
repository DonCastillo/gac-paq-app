import Screen from "constants/screen.enum";
import type { LangPagePayloadInterface } from "interface/payload.type";

const OfflineSuccessPage: LangPagePayloadInterface = {
	ident: "offline_success_page",
	title: "Offline Success Page",
	name: "Offline Success Page",
	type: Screen.Page,
	translations: {
		"en-CA": {
			heading: "You are not connected to the Internet",
			description:
				"Your responses will be saved and automatically resubmitted when the connection is restored.\n\nThank you for your help!",
		},
		"en-AE": {
			heading: "You are not connected to the Internet",
			description:
				"Your responses will be saved and automatically resubmitted when the connection is restored.\n\nThank you for your help!",
		},
		"ar-AE": {
			heading: "لم تتصل بالإنترنت",
			description:
				"سيتم حفظ إجاباتك وإعادة إرسالها تلقائيًا عند استعادة الاتصال\n\n!شكرًا لمساعدتك.",
		},
		"ne-NP": {
			heading: "You are not connected to the Internet",
			description:
				"Your responses will be saved and automatically resubmitted when the connection is restored.\n\nThank you for your help!",
		},
		"pt-BR": {
			heading: "Você não está conectado à Internet",
			description:
				"Suas respostas serão salvas e enviadas automaticamente quando a conexão for restabelecida.\n\nObrigado(a) pela sua ajuda!",
		},
		"sv-SE": {
			heading: "Du är inte ansluten till internet",
			description:
				"Dina svar kommer att sparas och automatiskt skickas igen när anslutningen återställs.\n\nTack för din hjälp!",
		},
		"th-TH": {
			heading: "คุณไม่ได้เชื่อมต่อกับอินเทอร์เน็ต",
			description:
				"คำตอบของคุณจะถูกบันทึกและส่งอัตโนมัติเมื่อเชื่อมต่อกับอินเทอร์เน็ตอีกครั้ง\n\nขอบคุณสำหรับความช่วยเหลือของคุณ!",
		},
		"zh-CN": {
			heading: "你没有连接到互联网",
			description: "您的回答将被保存，并在连接恢复时自动重新提交。\n\n感谢您的帮助!",
		},
		"es-MX": {
			heading: "No estás conectado a Internet",
			description:
				"Tus respuestas se guardarán y se enviarán automáticamente cuando se restablezca la conexión.\n\n¡Gracias por tu ayuda!",
		},
		"es-ES": {
			heading: "No estás conectado a Internet",
			description:
				"Tus respuestas se guardarán y se enviarán automáticamente cuando se restablezca la conexión.\n\n¡Gracias por tu ayuda!",
		},
		"fr-CA": {
			heading: "Vous n'êtes pas connecté à Internet",
			description:
				"Vos réponses seront sauvegardées et automatiquement resoumises lorsque la connexion sera rétablie.\n\nMerci pour votre aide!",
		},
	},
};

export default OfflineSuccessPage;
