import { useAppContext } from "@/hooks/useAppContext";

function TodosCounter() {
	const { todos } = useAppContext();
	return (
		<footer className="flex items-center gap-3 text-white font-bold">
			<p>Total tasks:</p>
			<p>{todos.length}</p>
		</footer>
	);
}

export { TodosCounter };
