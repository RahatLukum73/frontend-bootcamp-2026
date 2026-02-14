import { tasks } from "./state.js"

export function createTask(title) {
	if (title.trim() === '') {
		return
	}
	const taskItem = {
		id: Date.now(),
		title,
		completed: false,
		createdAt: new Date(),
	}
	tasks.unshift(taskItem)
	return taskItem
}

export function deleteTask(id) {
	const index = tasks.findIndex(task => task.id === Number(id))
	if(index !== -1) {
		tasks.splice(index, 1)
	}
}



//toggleTask()
