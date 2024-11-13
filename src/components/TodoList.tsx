import { DialogToDeleteItem } from "@/components/DialogToDeleteItem";
import { UpdateItem } from "@/components/UpdateItem";
import { useAppContext } from "@/hooks/useAppContext";

function TodoList() {
	const { todos, isLoadingTodos } = useAppContext();

	return (
		<section>
			{isLoadingTodos ? (
				<p className="text-white text-center mb-10">Loading...</p>
			) : (
				todos.map((item) => (
					<div
						key={item.id}
						className="flex mb-5 hover:bg-slate-500 hover:rounded-md transition-all p-2"
					>
						<form className="flex items-center mr-5">
							<input type="checkbox" className="w-4 h-4" />
						</form>
						<div className="flex justify-between w-full">
							<p className="text-white">{item.message}</p>
							<div className="flex gap-5 items-center">
								<UpdateItem />
								<DialogToDeleteItem message={item.message} id={item.id} />
							</div>
						</div>
					</div>
				))
			)}
		</section>
	);
}

export { TodoList };
