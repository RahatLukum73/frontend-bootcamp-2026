import { useState } from 'react'
import type { Task } from '../types'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import { Footer } from './Footer'
import styled from 'styled-components'
import { Header } from './Header'

interface AppContainerProps {
	className?: string
}
const AppContainer = ({ className }: AppContainerProps) => {


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

	return (
		<div className={className}>
			<Header/>
			<TodoInput onAdd={addTask} />
			<TodoList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
			<Footer tasks={tasks} />
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
