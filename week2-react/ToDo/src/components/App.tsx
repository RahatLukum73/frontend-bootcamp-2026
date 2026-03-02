import { useState } from "react"
import type { Task } from "../types"
import { TodoInput } from "./TodoInput"
import { TodoList } from "./TodoList"

function App() {

	const [tasks, setTasks] = useState<Task[]>([])

	const addTask = (title: string): void => {
			if (title.trim() === '') {
		return
	}
	const taskItem: Task = {
		id: Date.now(),
		title,
		completed: false,
		editing: false,
		createdAt: String(new Date()),
	}
	const newTasks = [taskItem, ...tasks]
	setTasks(newTasks)
}

const deleteTask = (id: number): void => {
	const newTasks = tasks.filter(e => e.id !== id)
	setTasks(newTasks)
}
	return (
		<>
			<TodoInput onAdd={addTask}/>
			<TodoList tasks={tasks} onDelete={deleteTask}/>
		</>
	)
}

export default App
