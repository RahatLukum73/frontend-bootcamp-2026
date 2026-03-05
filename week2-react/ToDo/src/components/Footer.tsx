import type { Task, Filter } from '../types'
import styled from 'styled-components'
import { FilterBlock } from './FilterBlock'

interface FooterProps {
	tasks: readonly Task[]
	className?: string
	setFilter: (value: Filter) => void
	filter: Filter
}

const FooterContainer = ({className, tasks, setFilter, filter }: FooterProps) => {
	const activeTasks = tasks.filter(el => el.completed === false).length
	return (
		<div className={className}>
			<p className="counter">
				Tasks left : {activeTasks}
			</p>
			<FilterBlock setFilter={setFilter} filter={filter} />
		</div>
	)
}

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-around;
	padding: 12px;
	background: #ddd;
	p {
		align-self: center;
		font-weight: 600;
	}
`