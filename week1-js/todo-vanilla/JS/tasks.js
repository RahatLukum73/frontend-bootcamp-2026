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

export function toggleTask(id) {
	const task = tasks.find(t => t.id === Number(id));
	if(task) {
		return task.completed = !task.completed
	}
}

export function clearTasks() {
	const newTasks = tasks.filter(task => !task.completed)
	tasks.length = 0
	tasks.push(...newTasks)
}

export function saveTasks() {}
export function loadTasks() {}
