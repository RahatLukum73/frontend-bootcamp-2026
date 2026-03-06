import { useEffect, useState } from 'react'
import type { Task, Filter } from '../types'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import { Footer } from './Footer'
import styled from 'styled-components'
import { Header } from './Header'

interface AppContainerProps {
	className?: string
}

const AppContainer = ({ className }: AppContainerProps) => {
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
		if (filter === 'all') return task
		if (filter === 'active') return !task.completed
		if (filter === 'completed') return task.completed
	})

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	return (
		<div className={className}>
			<Header />
			<TodoInput onAdd={addTask} />
			<TodoList
				tasks={filteredTasks}
				onDelete={deleteTask}
				onToggle={toggleTask}
				onEditing={toggleEditing}
				onEdit={editTask}
			/>
			<Footer tasks={tasks} filter={filter} setFilter={setFilter} />
		</div>
	)
}

export const App = styled(AppContainer)`
	background: #eee;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	min-width: 700px;
`
