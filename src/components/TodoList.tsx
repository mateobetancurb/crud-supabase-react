interface Props {
	description: String;
}

export function TodoList({ description = "Pending to confirm" }: Props) {
	return (
		<section>
			<p>{description}</p>
		</section>
	);
}
