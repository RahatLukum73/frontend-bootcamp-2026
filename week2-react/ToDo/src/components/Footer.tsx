import type { Task, Filter } from '../types'
import styled from 'styled-components'
import { FilterBlock } from './FilterBlock'

interface FooterProps {
	tasks: readonly Task[]
	className?: string
	setFilter: (value: Filter) => void
	clearCompleted: () => void
	filter: Filter
}

const FooterContainer = ({
	className,
	tasks,
	filter,
	setFilter,
	clearCompleted,
}: FooterProps) => {
	const activeTasks = tasks.filter((task) => !task.completed).length
	return (
		<div className={className}>
			<div className="footer-block">
				<p className="counter">Tasks left : {activeTasks}</p>
				<button className='clear-tasks' onClick={clearCompleted}>Clear</button>
			</div>
			<FilterBlock setFilter={setFilter} filter={filter} />
		</div>
	)
}

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	padding: 12px;
	background: #ddd;
	.footer-block {
	display: flex;
	gap: 8px;
	padding: 4px;
	border-bottom: 1px solid #333;
	}
	p {
		align-self: center;
		font-weight: 600;
	}
			button {
		padding: 4px;
		border-radius: 2px;
		background: #eee;
		color: #000;
		transition:
			transform 0.1s ease,
			box-shadow 0.1s ease;
	}
		.clear-tasks {
		
		}
		.clear-tasks:hover {
		color: rgb(219, 84, 84);
		box-shadow: 0 0 5px 1px rgba(219, 84, 84, 0.5);
		transform: translateY(0.5px);
	}
`
