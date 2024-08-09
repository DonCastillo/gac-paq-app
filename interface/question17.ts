export interface ModeActivityInterface {
	kid: {
		none: string;
		school: string;
		work: string;
		both: string;
	};
	adult: {
		none: string;
		school: string;
		work: string;
		both: string;
	};
}

export interface ModeActivityTransportationInterface {
	kid: {
		wheel: {
			none: string;
			school: string;
			work: string;
			both: string;
		};
		walk: {
			none: string;
			school: string;
			work: string;
			both: string;
		};
	};
	adult: {
		wheel: {
			none: string;
			school: string;
			work: string;
			both: string;
		};
		walk: {
			none: string;
			school: string;
			work: string;
			both: string;
		};
	};
}
export type Transportation7Interface = Record<string, ModeActivityInterface>;
export type Transportation8_10Interface = Record<string, ModeActivityTransportationInterface>;
export type Transportation9_11Interface = Record<string, ModeActivityTransportationInterface>;
