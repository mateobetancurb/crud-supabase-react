import { createContext, useState, ReactNode } from "react";
import { getAllTodos } from "@/api";

interface Todo {
	id: number;
	message: string;
	assing_to: string;
}

interface TodoContextType {
	todos: Todo[];
	refreshTodos: () => Promise<void>;
}

export const TodoContext = createContext<TodoContextType | undefined>(
	undefined
);

export function TodoProvider({ children }: { children: ReactNode }) {
	const [todos, setTodos] = useState<Todo[]>([]);

	const refreshTodos = async () => {
		const response = await getAllTodos();
		if (response && response.data) {
			setTodos(response.data);
		}
	};

	return (
		<TodoContext.Provider value={{ todos, refreshTodos }}>
			{children}
		</TodoContext.Provider>
	);
}
