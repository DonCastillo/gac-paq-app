import { StateAdultPage } from "@base_pages/adult";
import { StateKidPage } from "@base_pages/kid";
import State from "@constants/state.enum";
import useCharacter from "@hooks/useCharacter";

export default function Success() {
	const { mode } = useCharacter();

	if (mode === "kid") {
		return <StateKidPage state={State.Success} />;
	}
	return <StateAdultPage state={State.Success} />;
}
