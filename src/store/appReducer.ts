type TestAction = { type: "TEST" };
type OtherAction = { type: "OTHER" };

export type AppActions = TestAction | OtherAction;

export type AppState = {
	name: string;
	numero: number;
};

export const initialState = (): AppState => ({
	name: "",
	numero: 0,
});

export const appReducer = (state: AppState, action: AppActions) => {
	switch (action.type) {
		case "TEST":
			return { ...state, name: "FOOOOI" };
		case "OTHER":
			return { ...state, name: "FOOOOI" };
	}
};
