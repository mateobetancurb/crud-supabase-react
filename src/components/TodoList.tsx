import { DialogToDeleteItem, UpdateItem } from "@/components";
import { Todos } from "@/interfaces";

export function TodoList({ todos }: Todos) {
	return (
		<section>
			{todos.map((item) => (
				<div
					key={item.id}
					className="flex justify-between mb-5 hover:bg-slate-500 hover:rounded-md transition-all p-2"
				>
					<p className="text-white">{item.message}</p>
					<div className="flex gap-5 items-center">
						<UpdateItem />
						<DialogToDeleteItem message={item.message} id={item.id} />
					</div>
				</div>
			))}
		</section>
	);
}
