interface ModeActivityInterface {
	kid: {
		school: string;
		work: string;
		both: string;
	};
	adult: {
		school: string;
		work: string;
		both: string;
	};
}

interface ModeActivityTransportationInterface {
	kid: {
		wheel: {
			school: string;
			work: string;
			both: string;
		};
		walk: {
			school: string;
			work: string;
			both: string;
		};
		both: {
			school: string;
			work: string;
			both: string;
		};
	};
	adult: {
		wheel: {
			school: string;
			work: string;
			both: string;
		};
		walk: {
			school: string;
			work: string;
			both: string;
		};
		both: {
			school: string;
			work: string;
			both: string;
		};
	};
}
export type Transportation7Interface = Record<string, ModeActivityInterface>;
export type Transportation8_10Interface = Record<string, ModeActivityTransportationInterface>;
export type Transportation9_11Interface = Record<string, ModeActivityTransportationInterface>;
