import State from "@constants/state.enum";
import { ButtonProvider } from "@contexts/common/ButtonContext";
import { StateProvider } from "@contexts/specific/StateContext";
import React from "react";
import StateKidContent from "./StateKidContent";
import StateKidLayout from "./StateKidLayout";

interface Props {
	state: State;
}

const StateKidPage = ({ state }: Props): React.ReactElement => {
	return (
		<ButtonProvider>
			<StateProvider state={state}>
				<StateKidLayout>
					<StateKidContent />
				</StateKidLayout>
			</StateProvider>
		</ButtonProvider>
	);
};

export default StateKidPage;
