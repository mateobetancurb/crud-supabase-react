import { createContext, useState, useEffect, ReactNode } from "react";
import {
	createTodo,
	deleteTodoById,
	getAllTodos,
	deleteAll,
	updateTodoById,
	updateTodoStatus,
} from "@/api";

interface Todo {
	id: number;
	message: string;
	is_completed: boolean;
	assing_to: string;
}

interface TodoContextType {
	todos: Todo[];
	refreshTodos: () => Promise<void>;
	create: (message: string, assing_to: string) => void;
	deleteTodo: (id: string | number) => void;
	deleteAllTodos: () => void;
	updateTodo: (id: string | number, message: string) => void;
	updateTodoByStatus: (id: string | number, status: string) => void;
	isLoadingTodos: boolean;
}

export const TodoContext = createContext<TodoContextType | undefined>(
	undefined
);

export function TodoProvider({ children }: { children: ReactNode }) {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [isLoadingTodos, setIsLoadingTodos] = useState<boolean>(false);

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

	const updateTodoByStatus = async (id: string | number, status: boolean) => {
		await updateTodoStatus(id, status);
		refreshTodos();
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
		setIsLoadingTodos(true);
		try {
			const response = await getAllTodos();
			if (response && response.data) {
				setTodos(response.data);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoadingTodos(false);
		}
	};

	return (
		<TodoContext.Provider
			value={{
				todos,
				isLoadingTodos,
				refreshTodos,
				create,
				updateTodo,
				deleteTodo,
				deleteAllTodos,
				updateTodoByStatus,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}
