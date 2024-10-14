export interface TodoItem {
	id: string | number;
	message: string;
	assing_to: string;
	created_at: string;
}

export interface Todos {
	todos: TodoItem[];
}

export interface TotalTodos {
	totalTodos: number;
}

export interface TodoToDelete {
	id: number | string;
	message: string;
}