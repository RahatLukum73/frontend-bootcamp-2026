import { tasks } from "./state.js";
import { createTask, deleteTask } from "./tasks.js";
import { renderTasks } from "./render.js";

const form = document.querySelector('.form')
const input = document.querySelector('.input')
const todoList = document.querySelector('.todo-list')

form.addEventListener("submit", (event) => {
	event.preventDefault()
	const title = event.target.elements.task.value
	createTask(title)
	tasks
	renderTasks()
	input.value = ''
})

todoList.addEventListener("click", (event) => {
	if(event.target.classList.contains('delete-button')) {
		const li = event.target.closest('.task-element')
		const id = li.dataset.id
		deleteTask(id)
		renderTasks()
	}
})

