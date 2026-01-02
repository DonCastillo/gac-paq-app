import Mode from "@/constants/mode.enum";
import { StateAdultPage } from "@base_pages/adult";
import { StateKidPage } from "@base_pages/kid";
import State from "@constants/state.enum";
import useCharacter from "@hooks/useCharacter";

export default function Error() {
	const { mode } = useCharacter();

	if (mode === Mode.Kid) {
		return <StateKidPage state={State.Error} />;
	}
	return <StateAdultPage state={State.Error} />;
}
