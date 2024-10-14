import { TotalTodos } from "@/interfaces";

export function TodosCounter({ totalTodos = 0 }: TotalTodos) {
	return (
		<footer className="flex items-center gap-3 font-bold">
			<p>Total tasks:</p>
			<p>{totalTodos}</p>
		</footer>
	);
}
