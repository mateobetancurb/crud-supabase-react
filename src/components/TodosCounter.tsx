import { useAppContext } from "@/hooks/useAppContext";

function TodosCounter() {
	const { todos } = useAppContext();
	return (
		<footer className="flex items-center gap-3 text-white font-bold">
			{todos.length > 0 ? (
				<>
					<p>Total tasks:</p>
					<p>{todos.length}</p>
				</>
			) : (
				<p className="mx-auto">Your todo list are empty</p>
			)}
		</footer>
	);
}

export { TodosCounter };
