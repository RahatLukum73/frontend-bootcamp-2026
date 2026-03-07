import styled from "styled-components"
import type { Filter } from "../types"

interface FilterBlockProps {
	className?: string
	setFilter: (value: Filter) => void
	filter: Filter
}

const FilterBlockContainer = ({ className, setFilter, filter }: FilterBlockProps) => {
	return (
		<div className={className}>
			Filter :
			<button onClick={() => {setFilter('all')}} data-active={filter === 'all'}>all</button>
			<button onClick={() => {setFilter('active')}} data-active={filter === 'active'}>active</button>
			<button onClick={() => {setFilter('completed')}} data-active={filter === 'completed'}>completed</button>
		</div>
	)
}

export const FilterBlock = styled(FilterBlockContainer)`
display: flex;
gap: 8px;
border-bottom: 1px solid #333;
align-items: center;
font-weight: 600;
button {
	padding: 2px;
	border-radius: 2px;
}
	button[data-active="true"] {
		box-shadow: 0 0 5px 1px rgba(3,3,3,0.5);
	}
`