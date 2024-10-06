import { Header, Form, TodosCounter } from "@/components";

export default function App() {
	return (
		<main className="mt-10 bg-gray-900 p-10 w-3/4 md:w-1/2 lg:w-1/4 mx-auto border border-gray-400 rounded-lg">
			<Header />
			<Form />
			<TodosCounter />
		</main>
	);
}
