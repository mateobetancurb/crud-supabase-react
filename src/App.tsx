import { Toaster } from "@/components/ui/sonner";
import { TodoProvider } from "./context/todoProvider";
import { Header } from "@/components/Header.tsx";
import { Form } from "@/components/Form.tsx";
import { TodoList } from "@/components/TodoList";
import { TodosCounter } from "@/components/TodosCounter";
import { Footer } from "@/components/Footer";
import { ErrorBoundary } from "@/ErrorBoundary";

export default function App() {
	return (
		<ErrorBoundary>
			<TodoProvider>
				<main className="mt-10 bg-gray-900 p-10 w-3/4 md:w-1/2 mx-auto border border-gray-400 rounded-lg">
					<Header />
					<Form />
					<TodoList />
					<TodosCounter />
					<Footer />
					<Toaster
						position="top-right"
						theme="light"
						richColors
						toastOptions={{
							classNames: {
								toast:
									"shadow-lg rounded-lg flex items-center p-4 text-xs gap-1.5",
								error: "[&>button]:!bg-red-600",
								info: "[&>button]:!bg-blue-600",
								success: "[&>button]:!bg-green-600",
								warning: "[&>button]:!bg-yellow-600",
							},
						}}
					/>
				</main>
			</TodoProvider>
		</ErrorBoundary>
	);
}
