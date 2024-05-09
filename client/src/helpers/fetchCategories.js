import { API as API_CATEGORIES } from '../api/categories.api'
import { API as API_TASKS } from '../api/tasks.api'

export const fetchCategories = async () => {
	try {
		const res = await API_CATEGORIES.getCategories()
		const data = res.data
		return data
	} catch (error) {
		error
	}
}

export const fetchCategoriesByDay = async () => {
	try {
		const res = await API_TASKS.getTasks()
		const data = res.data
		return data
	} catch (error) {
		error
	}
}
