import type { Task } from '../types'
import { TodoItem } from './TodoItem'
import styled from 'styled-components'

interface TodoListProps {
	className?: string
	tasks: Task[]
	onDelete: (id: number) => void
	onToggle: (id: number) => void
}

const TodoListContainer = ({ className, tasks, onDelete, onToggle }: TodoListProps) => {
	return (
			<ul className={className}>
			{tasks.map((task) => (
				<TodoItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
			))}
		</ul>
		
	)
}

export const TodoList = styled(TodoListContainer)`
	flex: 1;
	align-self: center;
`
