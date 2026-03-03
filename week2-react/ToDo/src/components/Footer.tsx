import type { Task } from '../types'
import styled from 'styled-components'

interface FooterProps {
	tasks: readonly Task[]
	className?: string
}

const FooterContainer = ({className, tasks }: FooterProps) => {
	const activeTasks = tasks.filter(el => el.completed === false).length
	return (
		<div className={className}>
			<p className="counter">
				Осталось выполнить {activeTasks}
			</p>
		</div>
	)
}

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: center;
	padding: 12px;
	background: #ddd;
`