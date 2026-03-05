export type Task = {
	id: number
	title: string
	completed: boolean
	editing: boolean
	createdAt: string
}

export type Filter = 'all' | 'active' | 'completed'