import type { Task } from '../types'
import { TodoItem } from './TodoItem'
import styled from 'styled-components'

interface TodoListProps {
	className?: string
	tasks: Task[]
	onDelete: (id: number) => void
	onToggle: (id: number) => void
	onEditing: (id: number) => void
	onEdit: (id: number, newTitle: string) => void
}

const TodoListContainer = ({ className, tasks, onDelete, onToggle, onEditing, onEdit }: TodoListProps) => {
	return (
			<ul className={className}>
			{tasks.map((task) => (
				<TodoItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} onEditing={onEditing} onEdit={onEdit} />
			))}
		</ul>
		
	)
}

export const TodoList = styled(TodoListContainer)`
	padding: 16px;
	box-sizing: border-box;
	flex: 1;
	align-self: center;
`
