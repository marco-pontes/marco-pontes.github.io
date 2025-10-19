export type FunctionComponent = React.ReactElement | null;

export enum TodoStatus {
	PENDING = "PENDING",
	COMPLETED = "COMPLETED",
}

export type Todo = {
	id: number;
	title: string;
	description: string;
	status: TodoStatus;
};

export type FetchResponse = {
	totalResults: number;
	todos: Array<Todo>;
};
