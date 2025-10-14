import { getCollections } from "@vivid-front/fake-api";
import type { Request, Response } from "@vivid-front/fake-api";
import type { Todo, TodoStatus } from "../../../src/types/types.ts";

export const get = async (_req: Request, res: Response) => {
	const page = parseInt((_req.query.page as string) || "1", 10);
	const limit = parseInt((_req.query.limit as string) || "10", 10);
	const { todos } = getCollections<{ todos: Todo[] }>();
	const startIndex = (page - 1) * limit;
	const endIndex = startIndex + limit;
	const paginatedTodos = todos.slice(startIndex, endIndex);
	res.setHeader("X-Total-Count", todos.length.toString());
	res.setHeader("Access-Control-Expose-Headers", "X-Total-Count");

	setTimeout(() => res.json(paginatedTodos), 2000);
};

export const post = async (_req: Request, res: Response) => {
	const { status, title, description } = _req.body;

	if (
		typeof status !== "string" ||
		status.trim() === "" ||
		typeof title !== "string" ||
		title.trim() === ""
	) {
		return res.status(400).json({
			error: "A propriedade newStatus é obrigatória e deve ser uma string.",
		});
	}

	const { todos } = getCollections<{ todos: Todo[] }>();
	const newTodo: Todo = {
		description: "",
		id: 0,
		status: "PENDING" as TodoStatus,
		title: "",
	};
	const min = 10000;
	const max = 100000;
	newTodo.id = Math.floor(Math.random() * (max - min + 1)) + min;
	newTodo.status = status as TodoStatus;
	newTodo.title = title;
	if (description || description === "") newTodo.description = description;
	todos.push(newTodo);

	setTimeout(() => res.json(newTodo), 2000);
};
