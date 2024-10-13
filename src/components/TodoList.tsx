import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
					<AlertDialog>
						<AlertDialogTrigger>
							<svg
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6 cursor-pointer"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
								/>
							</svg>
						</AlertDialogTrigger>
						<AlertDialogContent className="bg-[#111726] border-none w-96 md:w-auto">
							<AlertDialogHeader>
								<AlertDialogTitle>
									Are you sure to delete {item.message}?
								</AlertDialogTitle>
								<AlertDialogDescription className="text-gray-300">
									This action cannot be undone. This will permanently delete
									your task from our database
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel className="bg-[#111726] hover:bg-slate-600 hover:text-white">
									Cancel
								</AlertDialogCancel>
								<AlertDialogAction className="bg-white text-black hover:bg-slate-300">
									Delete
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</div>
			))}
		</section>
	);
}
