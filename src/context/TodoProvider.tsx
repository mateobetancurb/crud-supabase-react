import { createContext, useState, ReactNode } from "react";
import { createTodo, deleteTodoById, getAllTodos } from "@/api";

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
}

export const TodoContext = createContext<TodoContextType | undefined>(
	undefined
);

export function TodoProvider({ children }: { children: ReactNode }) {
	const [todos, setTodos] = useState<Todo[]>([]);

	const create = async (message: string, assing_to: string) => {
		await createTodo(message, assing_to);
		refreshTodos();
	};

	const deleteTodo = async (id: string | number) => {
		await deleteTodoById(id);
		refreshTodos();
	};

	const refreshTodos = async () => {
		const response = await getAllTodos();
		if (response && response.data) {
			setTodos(response.data);
		}
	};

	return (
		<TodoContext.Provider value={{ todos, refreshTodos, create, deleteTodo }}>
			{children}
		</TodoContext.Provider>
	);
}