import {
	createContext,
	type FunctionComponent,
	type ReactNode,
	useContext,
	useState,
} from "react";

export type ApplicationContextType =
	| undefined
	| {
			is: boolean;
	  };

const AppContext = createContext<ApplicationContextType>(undefined);

type AppProviderProps = {
	children: ReactNode;
	overrideValues?: Partial<ApplicationContextType>;
};
export const ApplicationProvider: FunctionComponent<AppProviderProps> = ({
	children,
}) => {
	const [is, setIs] = useState(false);

	const value = { is, setIs };

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): ApplicationContextType => {
	const context = useContext(AppContext);
	if (context === undefined) {
		throw new Error("Use inside context provider!");
	}
	return context;
};
