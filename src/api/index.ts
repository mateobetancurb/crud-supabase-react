export async function getAllTodos() {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/todos?select=*`,
			{
				headers: {
					apikey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
					Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
				},
			}
		);
		const data = await response.json();
		return { data };
	} catch (error) {
		console.log(error);
	}
}

export async function createTodo(message: string, assing_to: string) {
	try {
		await fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/todos`, {
			method: "POST",
			headers: {
				apikey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
				Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
				"Content-Type": "application/json",
				Prefer: "return=null",
			},
			body: JSON.stringify({
				message,
				assing_to,
			}),
		});
	} catch (error) {
		console.log(error);
	}
}

export async function deleteTodoById(id: string | number) {
	try {
		await fetch(
			`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/todos?id=eq.${id}`,
			{
				method: "DELETE",
				headers: {
					apikey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
					Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
				},
			}
		);
	} catch (error) {
		console.log(error);
	}
}

export async function deleteAll() {
	try {
		await fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/todos?id=gt.0`, {
			method: "DELETE",
			headers: {
				apikey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
				Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
			},
		});
	} catch (error) {
		console.log(error);
	}
}

export async function updateTodoById(id: string | number, message: string) {
	try {
		await fetch(
			`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/todos?id=eq.${id}`,
			{
				method: "PATCH",
				headers: {
					apikey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
					Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
					"Content-Type": "application/json",
					Prefer: "return=null",
				},
				body: JSON.stringify({
					message,
				}),
			}
		);
	} catch (error) {
		console.log(error);
	}
}

export async function updateTodoStatus(id: string | number, status: boolean) {
	try {
		await fetch(
			`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/todos?id=eq.${id}`,
			{
				method: "PATCH",
				headers: {
					apikey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
					Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
					"Content-Type": "application/json",
					Prefer: "return=null",
				},
				body: JSON.stringify({
					is_completed: !status,
				}),
			}
		);
	} catch (error) {
		console.log(error);
	}
}
