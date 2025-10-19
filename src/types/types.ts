export type FunctionComponent = React.ReactElement | null;

export enum AlertType {
	success = "success",
	warning = "warning",
	info = "info",
	error = "error",
}
export type AlertProps = { type: AlertType; message: string };

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
