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
		const button = document.createElement('button')
		button.className = 'delete-button'
		button.textContent = 'Удалить'
		const checkBox = document.createElement('input')
		checkBox.type = "checkbox"
		checkBox.name = "isCompleted"
		checkBox.checked = task.completed
		li.append(checkBox, p, button)
		list.append(li)

	})
	return list
}

export function renderFooter() {
	const footer = document.querySelector('footer')
	footer.innerHTML = ''
	const activeCount = tasks.filter(t => !t.completed).length
		const couter = document.createElement('div')
		couter.className = "footer-content"
		const p = document.createElement('p')
		p.textContent = `Осталось выполнить ${activeCount} задач`
		couter.append(p)
		const clearCompletedButton = document.createElement('button')
		clearCompletedButton.className = 'clear-button'
		clearCompletedButton.textContent = 'Очистить'
		footer.append(couter, clearCompletedButton)

		return footer
}
