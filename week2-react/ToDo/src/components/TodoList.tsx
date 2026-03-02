import type { Task } from '../types'
import { TodoItem } from './TodoItem'

type TodoListProps = {
	tasks: Task[]
	onDelete: (id: number) => void
}

export const TodoList = ({ tasks, onDelete }: TodoListProps) => {
	return (
		<ul>
			{tasks.map((task) => (
				<TodoItem key={task.id} task={task} onDelete={onDelete} />
			))}
		</ul>
	)
}
