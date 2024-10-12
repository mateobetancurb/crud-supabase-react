import { Header, Form, TodoList, TodosCounter, Footer } from "@/components";
import { getAllTodos } from "@/actions";

export default async function App() {
	const todos = await getAllTodos();

	return (
		<main className="mt-10 bg-gray-900 p-10 w-3/4 md:w-1/2 mx-auto border border-gray-400 rounded-lg">
			<Header />
			<Form />
			<TodoList todos={todos} />
			<TodosCounter totalTodos={todos.length} />
			<Footer />
		</main>
	);
}
