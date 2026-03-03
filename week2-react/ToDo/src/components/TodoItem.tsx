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
	.text {
		text-decoration: ${({ task }) => (task.completed ? 'line-through' : 'none')};
		opacity: ${({ task }) => (task.completed ? 0.5 : 1)};
		padding: 0 8px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`
