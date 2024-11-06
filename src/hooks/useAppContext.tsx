import { useContext } from "react";
import { TodoContext } from "@/context/todoProvider";

export function useAppContext() {
	const context = useContext(TodoContext);
	if (!context) {
		throw new Error("useTodos must be used within a TodoProvider");
	}
	return context;
}
