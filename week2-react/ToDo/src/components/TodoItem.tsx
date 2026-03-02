import type { Task } from "../types"

type TodoItemProps = {
	task: Task
	onDelete: (id: number) => void
}



export const TodoItem = ({task, onDelete}: TodoItemProps) => {
	const handleDlete = () => onDelete(task.id)
	return (
		<li>
			<p>{task.title}</p>
			<button onClick={handleDlete}>Delete</button>
		</li>
	)
}