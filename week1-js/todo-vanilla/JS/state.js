import { loadTasks } from './storage.js'

export let tasks = loadTasks()

export let currentFilter = 'all'

export function setFilter(val) {
	currentFilter = val
}
