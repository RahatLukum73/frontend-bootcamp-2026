export function saveTasks(tasks) {
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

export function loadTasks() {
	const arrTasks = localStorage.getItem('tasks')
	if(arrTasks !== null){
		return JSON.parse(arrTasks)
	}else return []
}
