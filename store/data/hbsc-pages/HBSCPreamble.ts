import Screen from "constants/screen.enum";
import type { LangPreamblePayloadInterface } from "interface/payload.type";

const HBSCPreamble: LangPreamblePayloadInterface = {
	ident: "hbsc_preamble",
	heading: "HBSC Preamble",
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "Health Behaviour in School-aged Children",
			subheading: "",
			description: {
				kid: "Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, rollerblading, biking, dancing, skateboarding, swimming, soccer, basketball, football, & surfing.",
				adult:
					"Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, rollerblading, biking, dancing, skateboarding, swimming, soccer, basketball, football, & surfing.",
			},
		},
		"fr-CA": {
			heading: "Comportement de santé chez les enfants en âge scolaire",
			subheading: "",
			description: {
				kid: "L'activité physique est une activité qui augmente ton rythme cardiaque et t'essouffle pendant un moment. Tu peux faire de l'activité physique en faisant du sport, des activités sportives à l’école, en jouant avec des amis ou amies, ou en marchant pour aller à l'école.\n\nVoici quelques exemples d'activités physiques : courir, marcher rapidement, danser, faire du vélo, nager, faire du patin à roues alignées, de la planche à roulettes; jouer au soccer, au basketball ou au football.",
				adult:
					"L'activité physique est une activité qui augmente ton rythme cardiaque et t'essouffle pendant un moment. Tu peux faire de l'activité physique en faisant du sport, des activités sportives à l’école, en jouant avec des amis ou amies, ou en marchant pour aller à l'école.\n\nVoici quelques exemples d'activités physiques : courir, marcher rapidement, danser, faire du vélo, nager, faire du patin à roues alignées, de la planche à roulettes; jouer au soccer, au basketball ou au football.",
			},
		},
		"es-MX": {
			heading: "Comportamiento de salud en escolares",
			subheading: "",
			description: {
				kid: "Actividad física es cualquier actividad que incrementa tu ritmo cardiaco y que te hace sentir “sin aliento” una parte del tiempo. La actividad física puede realizarse en deportes, actividades escolares, jugando con los amigos o caminando hacia la escuela. Algunos ejemplos son: correr, caminar rápido, patinar con patines o patineta, andar en bicicleta, bailar, nadar, fútbol, basquetbol, fútbol americano y surfear.",
				adult:
					"Actividad física es cualquier actividad que incrementa tu ritmo cardiaco y que te hace sentir “sin aliento” una parte del tiempo. La actividad física puede realizarse en deportes, actividades escolares, jugando con los amigos o caminando hacia la escuela. Algunos ejemplos son: correr, caminar rápido, patinar con patines o patineta, andar en bicicleta, bailar, nadar, fútbol, basquetbol, fútbol americano y surfear.",
			},
		},
		"en-NZ": {
			heading: "Health Behaviour in School-aged Children",
			subheading: "",
			description: {
				kid: "Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, rollerblading, biking, dancing, skateboarding, swimming, soccer, basketball, football, & surfing.",
				adult:
					"Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, rollerblading, biking, dancing, skateboarding, swimming, soccer, basketball, football, & surfing.",
			},
		},
		"en-MW": {
			heading: "Health Behaviour in School-aged Children",
			subheading: "",
			description: {
				kid: "Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, rollerblading, biking, dancing, skateboarding, swimming, soccer, basketball, football, & surfing.",
				adult:
					"Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, rollerblading, biking, dancing, skateboarding, swimming, soccer, basketball, football, & surfing.",
			},
		},
		"en-NG": {
			heading: "Health Behaviour in School-aged Children",
			subheading: "",
			description: {
				kid: "Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, rollerblading, biking, dancing, skateboarding, swimming, soccer, basketball, football, & surfing.",
				adult:
					"Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, rollerblading, biking, dancing, skateboarding, swimming, soccer, basketball, football, & surfing.",
			},
		},
		"en-AE": {
			heading: "Health Behaviour in School-aged Children",
			subheading: "",
			description: {
				kid: "Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, rollerblading, biking, dancing, skateboarding, swimming, soccer, basketball, football, & surfing.",
				adult:
					"Physical activity is any activity that increases your heart rate and makes you get out of breath some of the time. Physical activity can be done in sports, school activities, playing with friends, or walking to school. Some examples of physical activity are running, brisk walking, rollerblading, biking, dancing, skateboarding, swimming, soccer, basketball, football, & surfing.",
			},
		},
		"sv-SE": {
			heading: "Hälsobeteende hos skolbarn",
			subheading: "",
			description: {
				kid: "Fysisk aktivitet är all aktivitet som får ditt hjärta att slå snabbare och som ibland gör dig andfådd. Fysisk aktivitet kan man hålla på med i idrottssammanhang, i olika aktiviteter på skolan, när man leker med kamrater eller då man går till skolan. Några exempel på fysisk aktivitet är att springa, gå snabba promenader, åka skridskor eller rullskridskor, simma, spela fotboll, cykla eller dansa.",
				adult:
					"Fysisk aktivitet är all aktivitet som får ditt hjärta att slå snabbare och som ibland gör dig andfådd. Fysisk aktivitet kan man hålla på med i idrottssammanhang, i olika aktiviteter på skolan, när man leker med kamrater eller då man går till skolan. Några exempel på fysisk aktivitet är att springa, gå snabba promenader, åka skridskor eller rullskridskor, simma, spela fotboll, cykla eller dansa.",
			},
		},
		"zh-CN": {
			heading: "学龄儿童的健康行为",
			subheading: "",
			description: {
				kid: "在下面的问题中，身体活动是指任何让你心跳加速并有时让你呼吸急促、上气不接下气的活动。体育运动时、学校体育活动活动时、与朋友玩耍时或步行上下学时都在进行身体活动。身体活动的例子包括如跑步、快走、轮滑、骑自行车、跳舞、滑板、游泳、足球、篮球、橄榄球和冲浪等[可给出所在国家的特定例子]。",
				adult:
					"在下面的问题中，身体活动是指任何让你心跳加速并有时让你呼吸急促、上气不接下气的活动。体育运动时、学校体育活动活动时、与朋友玩耍时或步行上下学时都在进行身体活动。身体活动的例子包括如跑步、快走、轮滑、骑自行车、跳舞、滑板、游泳、足球、篮球、橄榄球和冲浪等[可给出所在国家的特定例子]。",
			},
		},
	},
};

export default HBSCPreamble;
