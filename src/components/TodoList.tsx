import { DialogToDeleteItem } from "@/components/DialogToDeleteItem";
import { UpdateItem } from "@/components/UpdateItem";
import { useAppContext } from "@/hooks/useAppContext";

function TodoList() {
	const { todos, isLoadingTodos, updateTodoByStatus, updateTodo } =
		useAppContext();

	const completedTodos = todos.filter((todo) => todo.is_completed === true);
	const pendingTodos = todos.filter((todo) => todo.is_completed !== true);

	return (
		<section>
			<h2 className="text-lg text-white font-bold">Pending</h2>
			<div className="mb-10">
				{isLoadingTodos ? (
					<p className="text-white text-center mb-10">Loading...</p>
				) : (
					pendingTodos.map((item) => (
						<div
							key={item.id}
							className="flex mb-5 hover:bg-slate-500 hover:rounded-md transition-all p-2"
						>
							<form className="flex items-center mr-5">
								<input
									onChange={() =>
										updateTodoByStatus(item.id, item.is_completed)
									}
									type="checkbox"
									className="w-4 h-4"
									checked={item.is_completed}
								/>
							</form>
							<div className="flex justify-between w-full">
								<p
									className={`${
										item.is_completed === true
											? "line-through text-gray-400"
											: "text-white"
									}`}
								>
									{item.message}
								</p>
								<div className="flex gap-5 items-center">
									{item.is_completed ? null : (
										<UpdateItem
											initialMessage={item.message}
											onUpdate={(newMessage) => updateTodo(item.id, newMessage)}
										/>
									)}
									<DialogToDeleteItem message={item.message} id={item.id} />
								</div>
							</div>
						</div>
					))
				)}
			</div>
			<div className="mb-10">
				<h2 className="text-lg text-white font-bold">Completed</h2>
				{completedTodos.map((item) => (
					<li key={item.id} className="text-white">
						{item.message}
					</li>
				))}
			</div>
		</section>
	);
}

export { TodoList };
