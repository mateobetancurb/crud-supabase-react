interface Props {
	totalTodos?: number;
}

export function TodosCounter({ totalTodos }: Props) {
	return (
		<footer>
			<p>total de tareas:</p>
			<p>{totalTodos}</p>
		</footer>
	);
}
