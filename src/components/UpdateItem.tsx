import { useState } from "react";

interface Props {
	initialMessage: string;
	onUpdate: (newMessage: string) => void;
}

export function UpdateItem({ initialMessage, onUpdate }: Props) {
	const [isEditing, setIsEditing] = useState(false);
	const [editedMessage, setEditedMessage] = useState(initialMessage);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSave = () => {
		if (editedMessage.trim()) {
			onUpdate(editedMessage);
			setIsEditing(false);
		}
	};

	const handleCancel = () => {
		setEditedMessage(initialMessage);
		setIsEditing(false);
	};

	if (isEditing) {
		return (
			<div className="flex items-center space-x-2">
				<input
					type="text"
					value={editedMessage}
					onChange={(e) => setEditedMessage(e.target.value)}
					className="bg-slate-700 text-white px-2 py-1 rounded w-full"
					autoFocus
				/>
				<button
					onClick={handleSave}
					className="bg-green-500 text-white px-2 py-1 rounded"
				>
					Guardar
				</button>
				<button
					onClick={handleCancel}
					className="bg-red-500 text-white px-2 py-1 rounded"
				>
					Cancelar
				</button>
			</div>
		);
	}

	return (
		<button onClick={handleEditClick}>
			<svg
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="white"
				className="size-6 cursor-pointer hover:bg-blue-400 hover:p-1 rounded-full transition-all"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
				/>
			</svg>
		</button>
	);
}
