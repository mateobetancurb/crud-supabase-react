"use server";

export async function getAllTodos() {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/todos?select=*`,
			{
				headers: {
					apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
				},
				cache: "no-cache",
			}
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}
