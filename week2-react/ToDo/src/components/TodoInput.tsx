import { useState } from 'react'

export const TodoInput = ({onAdd}: {onAdd: (title: string) => void}) => {
	const [title, setTitle] = useState<string>('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		onAdd(title)
		setTitle('')
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
			type="text"
			value={title}
			onChange={(e) => setTitle(e.target.value)}
			/>
			<button type='submit'>Добавить</button>
		</form>
	)
}
