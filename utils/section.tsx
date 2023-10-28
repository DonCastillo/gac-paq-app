import SectionType from "../constants/section_type";

function getSectionType(sectionType: string): SectionType {
	if (sectionType === "intro") {
		return SectionType.Intro;
	} else {
		return SectionType.Question;
	}
}

export { getSectionType };
