import { createContext, useState, useEffect, ReactNode } from "react";
import {
	createTodo,
	deleteTodoById,
	getAllTodos,
	deleteAll,
	updateTodoById,
} from "@/api";

interface Todo {
	id: number;
	message: string;
	assing_to: string;
}

interface TodoContextType {
	todos: Todo[];
	refreshTodos: () => Promise<void>;
	create: (message: string, assing_to: string) => void;
	deleteTodo: (id: string | number) => void;
	deleteAllTodos: () => void;
	updateTodo: (id: string | number, message: string) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(
	undefined
);

export function TodoProvider({ children }: { children: ReactNode }) {
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		if (todos.length < 1) {
			refreshTodos();
		}
	}, []);

	const create = async (message: string, assing_to: string) => {
		await createTodo(message, assing_to);
		refreshTodos();
	};

	const updateTodo = async (id: string | number, message: string) => {
		console.log(id);
		// await updateTodoById(id, message);
		// refreshTodos();
	};

	const deleteTodo = async (id: string | number) => {
		await deleteTodoById(id);
		refreshTodos();
	};

	const deleteAllTodos = async () => {
		await deleteAll();
		refreshTodos();
	};

	const refreshTodos = async () => {
		const response = await getAllTodos();
		if (response && response.data) {
			setTodos(response.data);
		}
	};

	return (
		<TodoContext.Provider
			value={{
				todos,
				refreshTodos,
				create,
				updateTodo,
				deleteTodo,
				deleteAllTodos,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}
