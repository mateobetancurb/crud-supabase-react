import { Header, Form, TodoList, TodosCounter, Footer } from "@/components";

const todoList = [
	{ id: 1, description: "Task 1" },
	{ id: 2, description: "Task 2" },
];

export default function App() {
	return (
		<main className="mt-10 bg-gray-900 p-10 w-3/4 md:w-1/2 mx-auto border border-gray-400 rounded-lg">
			<Header />
			<Form />
			<TodoList list={todoList} />
			<TodosCounter />
			<Footer />
		</main>
	);
}
