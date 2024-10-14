import { TotalTodos } from "@/interfaces";

function TodosCounter({ totalTodos = 0 }: TotalTodos) {
	return (
		<footer className="flex items-center gap-3 text-white font-bold">
			<p>Total tasks:</p>
			<p>{totalTodos}</p>
		</footer>
	);
}

export { TodosCounter };
