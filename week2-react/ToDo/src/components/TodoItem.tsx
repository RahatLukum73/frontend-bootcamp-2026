import styled from 'styled-components'
import type { Task } from '../types'
import { useState } from 'react'

interface TodoItemProps {
	className?: string
	task: Task
	onDelete: (id: number) => void
	onToggle: (id: number) => void
	onEditing: (id: number) => void
	onEdit: (id: number, newTitle: string) => void
}

const TodoItemContainer = ({
	className,
	task,
	onDelete,
	onToggle,
	onEditing,
	onEdit,
}: TodoItemProps) => {
	const [localTitle, setLocalTitle] = useState(task.title)

	const handleDelete = () => onDelete(task.id)
	const handleToggle = () => onToggle(task.id)
	const handleEditing = () => onEditing(task.id)
	const handleEdit = () => onEdit(task.id, localTitle)
	return (
		<li className={className}>
			<input
				checked={task.completed}
				type="checkbox"
				onChange={handleToggle}
			/>
			{task.editing ? (
				<input
				value={localTitle}
				onChange={(e) => setLocalTitle(e.target.value)}
				//onBlur={handleEdit}
				onKeyDown={(e) => e.key === 'Enter' && onEdit(task.id, localTitle)}
				autoFocus
				/>
			) : (
				<p className="text">{task.title}</p>
			)}
			<div className="block-button">
				{task.editing ? (
					<button className="save" onClick={handleEdit}>Save</button>
				) : (
					<button className="edit" onClick={handleEditing}>Edit</button>
				)
				}
				<button className="delete" onClick={handleDelete}>Delete</button>
			</div>
		</li>
	)
}

export const TodoItem = styled(TodoItemContainer)`
	display: flex;
	justify-content: space-between;
	min-width: 400px;
	max-width: 100vh;
	padding: 4px;
	border-bottom: 1px solid #ccc;
	.text {
		align-self: center;
		text-decoration: ${({ task }) =>
			task.completed ? 'line-through' : 'none'};
		opacity: ${({ task }) => (task.completed ? 0.5 : 1)};
		padding: 0 8px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.block-button {
	display: flex;
	gap: 4px;
	.delete {
	color: rgb(219, 84, 84);
	}
	.edit {
	color: rgb(68, 68, 241);
	}
	.save {
	color: rgb(34, 197, 94)
	}
	}
	button {
		padding: 4px;
		border-radius: 2px;
		background: #ddd;
		transition:
			transform 0.1s ease,
			box-shadow 0.1s ease;
	}
	.edit:hover {
		box-shadow: 0 0 5px 1px rgba(68, 68, 241, 0.5);
		transform: translateY(0.5px);
	}
	.delete:hover {
		box-shadow: 0 0 5px 1px rgba(219, 84, 84, 0.5);
		transform: translateY(0.5px);
	}
	.save:hover {
	box-shadow: 0 0 5px 1px rgba(34, 197, 94, 0.5);
	transform: translateY(0.5px);
	}
`
