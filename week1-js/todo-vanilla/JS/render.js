import { tasks } from './state.js'

export function renderTasks() {
	const list = document.querySelector('.todo-list')
	list.innerHTML = ''
	tasks.forEach((task) => {
		const li = document.createElement('li')
		li.className = 'task-element'
		li.dataset.id = task.id
		
			const p = document.createElement('p')
			p.className = 'text'
			p.textContent = task.title
		
			const input = document.createElement('input')
			input.className = 'edit-input'
			input.name = 'edit'
			input.value = task.title
			input.type = 'text'
			
		

		const checkBox = document.createElement('input')
		checkBox.type = 'checkbox'
		checkBox.name = 'isCompleted'
		checkBox.checked = task.completed
		const deleteButton = document.createElement('button')
		deleteButton.className = 'delete-button'
		deleteButton.textContent = 'Удалить'
		const editButton = document.createElement('button')
		editButton.className = 'edit-button'
		editButton.textContent = 'Редактировать'
		const blockButton = document.createElement('div')
		blockButton.className = 'block-button'
		blockButton.append(editButton, deleteButton)
		li.append(checkBox, blockButton)
		if(task.editing) {
			checkBox.after(input)
		}else {
			checkBox.after(p)
		}
		list.append(li)
		input.focus()
	})
	return list
}

export function renderFooter() {
	const footer = document.querySelector('footer')
	footer.innerHTML = ''
	const activeCount = tasks.filter((t) => !t.completed).length
	const couter = document.createElement('div')
	couter.className = 'footer-content'
	const p = document.createElement('p')
	p.textContent = `Осталось выполнить ${activeCount} задач`
	couter.append(p)
	const clearCompletedButton = document.createElement('button')
	clearCompletedButton.className = 'clear-button'
	clearCompletedButton.textContent = 'Очистить'
	footer.append(couter, clearCompletedButton)

	return footer
}
