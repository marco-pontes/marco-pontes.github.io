import {
	createContext,
	useContext,
	type FunctionComponent,
	type ReactNode,
	useState,
	useRef,
} from "react";
import { useTodoList } from "@//hooks/useTodoList";
import type { AlertType, Todo } from "@/types/types.ts";
// import { useTranslation } from "react-i18next";

type MessageType = { type: AlertType; message: string };
export type ApplicationContextType = {
	//mutateUpdate: UseMutateFunction<Response, Error, Partial<Todo>>;
	message: MessageType | null;
	addMessage: (message: MessageType, duration?: number) => void;
	todos: Array<Todo> | undefined;
	isLoadingTodos: boolean;
};

const ApplicationContext = createContext<ApplicationContextType | undefined>(
	undefined
);

type ApplicationProviderProps = {
	children: ReactNode;
	overrideValues?: Partial<ApplicationContextType>;
};

export const ApplicationProvider: FunctionComponent<
	ApplicationProviderProps
> = ({ children, overrideValues }) => {
	const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

	// const { t } = useTranslation();
	const {
		data,
		isLoading: isLoadingTodos,
		isError: isErrorLoadingTodos,
	} = useTodoList(1);

	const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
	const [message, setMessage] = useState<MessageType | null>(null);

	const addMessage = (message: MessageType, duration = 3000): void => {
		if (timeoutIdRef.current) {
			clearTimeout(timeoutIdRef.current);
		}
		setMessage(message);
		timeoutIdRef.current = setTimeout(() => {
			setMessage(null);
			timeoutIdRef.current = null;
		}, duration);
	};

	// const successCreatedFn = (): void => {
	// 	addMessage({
	// 		type: AlertType.success,
	// 		message: t("todos.messages.created"),
	// 	});
	// };

	const isPending = isLoadingTodos;

	const contextValue = {
		editModalOpen,
		setEditModalOpen,
		message,
		isErrorLoadingTodos,
		isPending,
		todos: data?.todos,
		isLoadingTodos,
		addMessage,
	};

	return (
		<ApplicationContext.Provider value={{ ...contextValue, ...overrideValues }}>
			{children}
		</ApplicationContext.Provider>
	);
};

export const useApplicationContext = (): ApplicationContextType => {
	const context = useContext(ApplicationContext);
	if (context === undefined) {
		throw new Error(
			"useApplicationContext must be used within an ApplicationProvider"
		);
	}
	return context;
};
