import { tasks, currentFilter } from './state.js'
import { tasksFilter } from './tasks.js'

export function renderTasks() {
	const list = document.querySelector('.todo-list')
	list.innerHTML = ''
	const filterTasks = tasksFilter(tasks, currentFilter)
	filterTasks.forEach((task) => {
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
		deleteButton.classList.add('button')
		deleteButton.textContent = 'Удалить'
		const editButton = document.createElement('button')
		editButton.className = 'edit-button'
		editButton.classList.add('button')
		editButton.textContent = 'Редактировать'
		const blockButton = document.createElement('div')
		blockButton.className = 'block-button'
		blockButton.append(editButton, deleteButton)
		li.append(checkBox, blockButton)
		if (task.editing) {
			checkBox.after(input)
		} else {
			checkBox.after(p)
		}
		list.append(li)
		if (task.editing) {
			input.focus()
		}
	})

	return list
}

export function renderFilter() {
	const main = document.querySelector('.main')
	const filter = document.createElement('div')
	filter.className = 'filter'
	filter.textContent = 'Фильтры: '
	const filterBlockButton = document.createElement('div')
	filterBlockButton.className = 'filter-block-button'
	const filterButtonAll = document.createElement('button')
	filterButtonAll.className = 'button-all'
	filterButtonAll.textContent = 'Все'
	filterButtonAll.classList.add('button')
	filterButtonAll.dataset.filter = 'all'
	const filterButtonActive = document.createElement('button')
	filterButtonActive.className = 'button-active'
	filterButtonActive.textContent = 'Не выполнены'
	filterButtonActive.classList.add('button')
	filterButtonActive.dataset.filter = 'active'
	const filterButtonCompleted = document.createElement('button')
	filterButtonCompleted.className = 'button-completed'
	filterButtonCompleted.classList.add('button')
	filterButtonCompleted.textContent = 'Выполнены'
	filterButtonCompleted.dataset.filter = 'completed'
	filterBlockButton.append(
		filterButtonAll,
		filterButtonActive,
		filterButtonCompleted
	)
	filter.append(filterBlockButton)
	main.append(filter)
	return filter
}

export function renderFooter() {
	const footer = document.querySelector('footer')
	footer.innerHTML = ''
	const activeCount = tasks.filter((t) => !t.completed).length
	const counter = document.createElement('div')
	counter.className = 'footer-content'
	const p = document.createElement('p')
	p.textContent = `Осталось : ${activeCount}`
	counter.append(p)
	const clearCompletedButton = document.createElement('button')
	clearCompletedButton.className = 'clear-button'
	clearCompletedButton.classList.add('button')
	clearCompletedButton.textContent = 'Очистить✓'
	footer.append(counter, clearCompletedButton)

	return footer
}
