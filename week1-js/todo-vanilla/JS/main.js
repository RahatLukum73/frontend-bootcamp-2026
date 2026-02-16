import { tasks } from './state.js'
import { clearTasks, createTask, deleteTask, toggleTask } from './tasks.js'
import { renderFooter, renderTasks } from './render.js'

const form = document.querySelector('.form')
const input = document.querySelector('.input')
const todoList = document.querySelector('.todo-list')
const footer = document.querySelector('footer')

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


