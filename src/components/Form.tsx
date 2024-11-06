import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState, FormEvent, ChangeEvent } from "react";
import { useAppContext } from "@/hooks/useAppContext";

function Form() {
	const [todo, setTodo] = useState<string>("");
	const [isCreateTodoLoading, setIsCreateTodoLoading] =
		useState<boolean>(false);
	const { todos, create, refreshTodos, deleteAllTodos } = useAppContext();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTodo(e.target.value);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		setIsCreateTodoLoading(true);
		e.preventDefault();
		try {
			if (todo.trim()) {
				create(todo, "pending to define");
				toast.success("Task has been created!");
				setTodo("");
			}
			refreshTodos();
		} catch (error) {
			console.log(error);
		} finally {
			setIsCreateTodoLoading(false);
		}
	};

	const handleDeleteAll = () => {
		deleteAllTodos();
		toast.warning("All todos has been deleted!");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="text-white flex justify-center flex-col md:flex-row items-center gap-3 mb-10"
		>
			<input
				onChange={handleInputChange}
				value={todo}
				type="text"
				className="py-2 px-3 rounded-md text-black w-full md:w-80"
			/>
			<Button
				disabled={isCreateTodoLoading}
				className="bg-white text-black hover:bg-gray-300 hover:text-black transition-colors"
			>
				{isCreateTodoLoading && (
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
				)}
				{isCreateTodoLoading ? "Loading..." : "Create task"}
			</Button>
			{todos.length > 0 && (
				<Button
					onClick={handleDeleteAll}
					className="bg-red-500 hover:bg-red-600 transition-all"
				>
					Delete all
				</Button>
			)}
		</form>
	);
}

export { Form };
