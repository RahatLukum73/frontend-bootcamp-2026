import { tasks } from './state.js'
import { saveTasks } from './storage.js'

export function createTask(title) {
	if (title.trim() === '') {
		return
	}
	const taskItem = {
		id: Date.now(),
		title,
		completed: false,
		editing: false,
		createdAt: new Date(),
	}
	tasks.unshift(taskItem)
	saveTasks(tasks)

	return taskItem
}

export function deleteTask(id) {
	const index = tasks.findIndex((task) => task.id === Number(id))
	if (index !== -1) {
		tasks.splice(index, 1)
	}
	saveTasks(tasks)
}

export function toggleTask(id) {
	const task = tasks.find((t) => t.id === Number(id))
	if (task) {
		return (task.completed = !task.completed)
	}
	saveTasks(tasks)
}

export function clearTasks() {
	const newTasks = tasks.filter((task) => !task.completed)
	tasks.length = 0
	tasks.push(...newTasks)
	saveTasks(tasks)
}

export function editTask(id) {
	const task = tasks.find((t) => t.id === Number(id))
	if (task) {
		return (task.editing = !task.editing)
	}
	saveTasks(tasks)
}

export function saveEditTask(id, value) {
	const task = tasks.find((t) => t.id === Number(id))
	if (task) {
		task.title = value
		task.editing = false
	}
	saveTasks(tasks)
}

export function tasksFilter(tasks, currentFilter) {
	if (currentFilter === 'all') {
		return tasks
	} else if (currentFilter === 'active') {
		return tasks.filter((task) => !task.completed)
	} else if (currentFilter === 'completed') {
		return tasks.filter((task) => task.completed)
	}
	saveTasks(tasks)
}
