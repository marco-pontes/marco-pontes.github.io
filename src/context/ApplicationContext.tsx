import {
	createContext,
	type FunctionComponent,
	type ReactNode,
	useContext,
	useState,
} from "react";

type AppContextType =
	| undefined
	| {
			is: boolean;
	  };

const AppContext = createContext<AppContextType>(undefined);

type AppProviderProps = { children: ReactNode };
export const AppProvider: FunctionComponent<AppProviderProps> = ({
	children,
}) => {
	const [is, setIs] = useState(false);

	const value = { is, setIs };

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
	const context = useContext(AppContext);
	if (context === undefined) {
		throw new Error("Use inside context provider!");
	}
	return context;
};
