import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import { Footer } from './Footer'
import { Header } from './Header'
import { useTasks } from '../hooks/useTask'
import styled from 'styled-components'

interface AppContainerProps {
	className?: string
}

const AppContainer = ({ className }: AppContainerProps) => {
	const {
		tasks,
		filter,
		filteredTasks,
		addTask,
		deleteTask,
		toggleTask,
		toggleEditing,
		editTask,
		clearCompleted,
		setFilter,
	} = useTasks()

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
			<Footer
				tasks={tasks}
				filter={filter}
				setFilter={setFilter}
				clearCompleted={clearCompleted}
			/>
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
