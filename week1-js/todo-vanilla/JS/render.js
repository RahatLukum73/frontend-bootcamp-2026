import { tasks } from './state.js'

export function renderTasks() {
	const list = document.querySelector('.todo-list')
	list.innerHTML = ''
	tasks.forEach((task) => {
		const li = document.createElement('li')
		li.className = 'task-element'
		li.dataset.id = task.id
		li.textContent = task.title
		const button = document.createElement('button')
		button.className = 'delete-button'
		button.textContent = 'Удалить'
		li.append(button)
		list.append(li)
	})
	return list
}
