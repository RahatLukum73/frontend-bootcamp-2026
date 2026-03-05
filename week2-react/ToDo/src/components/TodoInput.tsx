import { useState } from 'react'
import styled from 'styled-components'

interface TodoInputProps {
	className?: string
	onAdd: (title: string) => void
}

const TodoInputContainer = ({className, onAdd}: TodoInputProps) => {
	const [title, setTitle] = useState<string>('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		onAdd(title)
		setTitle('')
	}
	return (
		<form onSubmit={handleSubmit} className={className}>
			<input
			type="text"
			value={title}
			onChange={(e) => setTitle(e.target.value)}
			/>
			<button type='submit'>Add</button>
		</form>
	)
}

export const TodoInput = styled(TodoInputContainer)`
	display: flex;
	justify-content: center;
	padding: 12px;
	gap: 4px;
	input{
	padding: 4px;
	border-radius: 2px
	}
	input:focus {
	box-shadow: inset 0 0 5px 0px rgba(3,3,3,0.5);
	}
	button {
	transition: transform 0.1s ease, box-shadow 0.1s ease;
	padding: 4px;
	border-radius: 2px;
	background: #ddd;
}
	button:hover {
	transform: translateY(0.5px);
	box-shadow: 0 0 5px 1px rgba(3,3,3,0.2);
	}
`
