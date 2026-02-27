import { setFilter, tasks } from './state.js'
import {
	clearTasks,
	createTask,
	deleteTask,
	editTask,
	saveEditTask,
	tasksFilter,
	toggleTask,
} from './tasks.js'
import { renderFilter, renderFooter, renderTasks } from './render.js'

renderTasks()
renderFilter()
renderFooter()

const form = document.querySelector('.form')
const input = document.querySelector('.input')
const todoList = document.querySelector('.todo-list')
const footer = document.querySelector('footer')
const filter = document.querySelector('.filter-block-button')

form.addEventListener('submit', (event) => {
	event.preventDefault()
	const title = event.target.elements.task.value
	createTask(title)
	tasks
	renderTasks()
	renderFooter()
	input.value = ''
})

todoList.addEventListener('click', (event) => {
	if (event.target.classList.contains('delete-button')) {
		const li = event.target.closest('.task-element')
		const id = li.dataset.id
		deleteTask(id)
		renderTasks()
		renderFooter()
	}
})

todoList.addEventListener('click', (event) => {
	if (event.target.classList.contains('edit-button')) {
		const li = event.target.closest('.task-element')
		const id = li.dataset.id
		editTask(id)
		renderTasks()
		renderFooter()
	}
})

todoList.addEventListener('keydown', (event) => {
	if (event.target.name === 'edit' && event.key === 'Enter') {
		const li = event.target.closest('.task-element')
		const id = li.dataset.id
		const value = event.target.value
		saveEditTask(id, value)
		renderTasks()
	}
})

todoList.addEventListener('focusout', (event) => {
	if (event.target.name === 'edit') {
		const li = event.target.closest('.task-element')
		const id = li.dataset.id
		const value = event.target.value
		saveEditTask(id, value)
		renderTasks()
	}
})

todoList.addEventListener('click', (event) => {
	if (event.target.name === 'isCompleted') {
		const li = event.target.closest('.task-element')
		const id = li.dataset.id
		toggleTask(id)
		renderTasks()
		renderFooter()
	}
})
footer.addEventListener('click', (event) => {
	if (event.target.classList.contains('clear-button')) {
		clearTasks()
		renderTasks()
		renderFooter()
	}
})

filter.addEventListener('click', ({ target }) => {
	if (target.dataset.filter) {
		const currentFilter = target.dataset.filter
		tasksFilter(tasks, setFilter(currentFilter))
		renderTasks()
	}
})
