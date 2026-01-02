import State from "@constants/state.enum";
import { ButtonProvider } from "@contexts/common/ButtonContext";
import { StateProvider } from "@contexts/specific/StateContext";
import React from "react";
import StateAdultContent from "./StateAdultContent";
import StateAdultLayout from "./StateAdultLayout";

interface Props {
	state: State;
}

const StateAdultPage = ({ state }: Props): React.ReactElement => {
	return (
		<ButtonProvider>
			<StateProvider state={state}>
				<StateAdultLayout>
					<StateAdultContent />
				</StateAdultLayout>
			</StateProvider>
		</ButtonProvider>
	);
};

export default StateAdultPage;
