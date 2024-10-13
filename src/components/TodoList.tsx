import { DialogToDeleteItem } from "@/components";

interface TodoItem {
	id: string | number;
	message: string;
	assing_to: string;
	created_at: string;
}

interface Props {
	todos: TodoItem[];
}

export function TodoList({ todos }: Props) {
	return (
		<section>
			{todos.map((item) => (
				<div
					key={item.id}
					className="flex justify-between mb-5 hover:bg-slate-500 hover:rounded-md transition-all p-2"
				>
					<p className="text-white">{item.message}</p>
					<DialogToDeleteItem message={item.message} id={item.id} />
				</div>
			))}
		</section>
	);
}
