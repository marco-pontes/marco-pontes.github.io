import {
	createContext,
	useContext,
	type FunctionComponent,
	type ReactNode,
	useState,
	type Dispatch,
	type SetStateAction,
	useRef,
} from "react";
import { useUpdateTodo } from "@/features/todos/hooks/useUpdateTodo";
import type { UseMutateFunction } from "@tanstack/react-query";
import type { Todo } from "@/features/todos/types/todo.ts";
import { useTodoList } from "@/features/todos/hooks/useTodoList";
import { useDeleteTodo } from "@/features/todos/hooks/useDeleteTodo";
import { useCreateTodo } from "@/features/todos/hooks/useCreateTodo";
import { AlertType } from "@/types/types.ts";
import { useTranslation } from "react-i18next";

type MessageType = { type: AlertType; message: string };
export type ApplicationContextType = {
	mutateUpdate: UseMutateFunction<Response, Error, Partial<Todo>>;
	mutateCreate: UseMutateFunction<Response, Error, Partial<Todo>>;
	mutateDelete: UseMutateFunction<Response, Error, number>;
	isPending: boolean;
	isPendingCreate: boolean;
	editModalOpen: boolean;
	setEditModalOpen: Dispatch<SetStateAction<boolean>>;
	setActiveEditTodo: Dispatch<SetStateAction<Partial<Todo> | undefined>>;
	activeEditTodo: Partial<Todo> | undefined;
	handleUpdateTodo: (todo: Partial<Todo>) => void;
	handleEditTodo: (todo: Todo) => void;
	message: MessageType | null;
	addMessage: (message: MessageType, duration?: number) => void;
	todos: Array<Todo> | undefined;
	isLoadingTodos: boolean;
	selection: Array<number>;
	setSelection: Dispatch<SetStateAction<Array<number>>>;
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	totalResults: number | undefined;
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
	const [page, setPage] = useState<number>(1);
	const [activeEditTodo, setActiveEditTodo] = useState<Partial<Todo>>();
	const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

	const { t } = useTranslation();
	const {
		data,
		isLoading: isLoadingTodos,
		isError: isErrorLoadingTodos,
	} = useTodoList(page);

	const [selection, setSelection] = useState<Array<number>>([]);
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

	const successCreatedFn = (): void => {
		addMessage({
			type: AlertType.success,
			message: t("todos.messages.created"),
		});
	};

	const successUpdatedFn = (): void => {
		addMessage({
			type: AlertType.success,
			message: t("todos.messages.updated"),
		});
	};

	const successDeletedFn = (): void => {
		addMessage({
			type: AlertType.success,
			message: t("todos.messages.deleted"),
		});
	};

	const { mutate: mutateCreate, isPending: isPendingCreate } =
		useCreateTodo(successCreatedFn);

	const { mutate: mutateUpdate, isPending: isPendingUpdate } =
		useUpdateTodo(successUpdatedFn);

	const { mutate: mutateDelete, isPending: isPendingDelete } =
		useDeleteTodo(successDeletedFn);

	const isPending = isPendingUpdate || isPendingDelete || isLoadingTodos;

	const handleUpdateTodo = (todo: Partial<Todo>): void => {
		mutateUpdate(todo);
		setEditModalOpen(false);
	};

	const handleEditTodo = (todo: Todo): void => {
		setActiveEditTodo({ ...todo });
		setEditModalOpen(true);
	};

	const contextValue = {
		page,
		setPage,
		activeEditTodo,
		setActiveEditTodo,
		editModalOpen,
		setEditModalOpen,
		todos: data?.todos,
		totalResults: data?.totalResults,
		message,
		selection,
		setSelection,
		handleUpdateTodo,
		handleEditTodo,
		mutateUpdate,
		mutateDelete,
		mutateCreate,
		isErrorLoadingTodos,
		isPending,
		isPendingCreate,
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
