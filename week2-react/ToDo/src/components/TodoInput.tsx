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
			<button type='submit'>Добавить</button>
		</form>
	)
}

export const TodoInput = styled(TodoInputContainer)`
	display: flex;
	justify-content: center;
	padding: 12px;
`
