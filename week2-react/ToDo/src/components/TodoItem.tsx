import styled from 'styled-components'
import type { Task } from '../types'

interface TodoItemProps {
	className?: string
	task: Task
	onDelete: (id: number) => void
	onToggle: (id: number) => void
}

const TodoItemContainer = ({
	className,
	task,
	onDelete,
	onToggle,
}: TodoItemProps) => {
	const handleDlete = () => onDelete(task.id)
	const handleToggle = () => onToggle(task.id)
	return (
		<li className={className}>
			<input
				checked={task.completed}
				type="checkbox"
				onChange={handleToggle}
			/>
			<p className="text">{task.title}</p>
			<button onClick={handleDlete}>Delete</button>
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
		text-decoration: ${({ task }) => (task.completed ? 'line-through' : 'none')};
		opacity: ${({ task }) => (task.completed ? 0.5 : 1)};
		padding: 0 8px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	button {
	padding: 4px;
	border-radius: 2px;
	background: #ddd;
	transition: transform 0.1s ease, box-shadow 0.1s ease;
}
	button:hover {
		box-shadow: 0 0 5px 1px rgba(3,3,3,0.2);
		transform: translateY(0.5px);
	}
`
