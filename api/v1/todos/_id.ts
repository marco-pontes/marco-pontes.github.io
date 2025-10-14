import { getCollections } from "@vivid-front/fake-api";
import type { Request, Response } from "@vivid-front/fake-api";
import type { Todo } from "../../../src/types/types.ts";
import type { TodoStatus } from "../../../src/types/types.ts";

export const patch = async (_req: Request, res: Response) => {
	const id = parseInt(_req.params.id as string, 10);
	const { status, title, description } = _req.body;

	if (typeof status !== "string" || status.trim() === "") {
		return res.status(400).json({
			error: "A propriedade newStatus é obrigatória e deve ser uma string.",
		});
	}

	const { todos } = getCollections<{ todos: Todo[] }>();
	let todoWasFound = false;
	todos.forEach((todo) => {
		if (todo.id === id) {
			todo.status = status as TodoStatus;
			if (title) todo.title = title;
			if (description || description === "") todo.description = description;
			todoWasFound = true;
		}
	});

	if (!todoWasFound) {
		return res.status(404).json({ error: `Todo with id ${id} not found` });
	}

	setTimeout(() => res.json(todos), 1000);
};

const _delete = async (_req: Request, res: Response) => {
	const id = parseInt(_req.params.id as string, 10);
	const { todos } = getCollections<{ todos: Todo[] }>();
	const todoIndex = todos.findIndex((todo) => todo.id === id);

	if (todoIndex > -1) {
		todos.splice(todoIndex, 1);
	}

	if (todoIndex === -1) {
		return res.status(404).json({ error: `Todo with id ${id} not found` });
	}

	setTimeout(() => res.json(todos), 1000);
};

export { _delete as delete };
