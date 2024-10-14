import { useState, useEffect } from "react";
import { getAllTodos } from "@/api";
import { Header } from "@/components/Header.tsx";
import { Form } from "@/components/Form.tsx";
import { TodoList } from "@/components/TodoList";
import { TodosCounter } from "@/components/TodosCounter";
import { Footer } from "@/components/Footer";
import { ErrorBoundary } from "@/ErrorBoundary";

export default function App() {
	const [todos, setTodos] = useState([]);

	async function getTodos() {
		const { todos } = await getAllTodos();
		setTodos(todos);
	}

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<ErrorBoundary>
			<main className="mt-10 bg-gray-900 p-10 w-3/4 md:w-1/2 mx-auto border border-gray-400 rounded-lg">
				<Header />
				<Form />
				<TodoList todos={todos} />
				<TodosCounter />
				<Footer />
			</main>
		</ErrorBoundary>
	);
}
