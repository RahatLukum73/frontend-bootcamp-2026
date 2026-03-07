import { useEffect, useState } from "react"
import type { Task, Filter } from "../types"

export const useTasks = () => {

const [tasks, setTasks] = useState<Task[]>(() => {
		const arrTasks = localStorage.getItem('tasks')
		if (!arrTasks) return []
		return JSON.parse(arrTasks) as Task[]
	})
	const [filter, setFilter] = useState<Filter>('all')

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
		setTasks((prev) => [taskItem, ...prev])
	}

	const deleteTask = (id: number): void => {
		setTasks((prev) => prev.filter((e) => e.id !== id))
	}

	const clearCompleted = (): void => {
		setTasks((prev) => prev.filter((task) => !task.completed))
	}

	const toggleTask = (id: number): void => {
		setTasks((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		)
	}

	const toggleEditing = (id: number): void => {
		setTasks((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, editing: !task.editing } : task
			)
		)
	}

	const editTask = (id: number, newTitle: string): void => {
		setTasks((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, title: newTitle, editing: false } : task
			)
		)
	}

	const filteredTasks = tasks.filter((task) => {
		if (filter === 'all') return true
		if (filter === 'active') return !task.completed
		if (filter === 'completed') return task.completed
	})

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	return {
	tasks,
	filter,
	filteredTasks,
	setFilter,
	addTask,
	deleteTask,
	clearCompleted,
	toggleTask,
	toggleEditing,
	editTask,
}
	}