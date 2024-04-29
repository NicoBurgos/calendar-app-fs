import axios from 'axios'
import { DOMAIN, API_TASKS_ROUTE } from '../data/domain'

const getTasks = async () => {
	return await axios.get(DOMAIN + API_TASKS_ROUTE)
}

const addTask = async (data) => {
	return await axios.post(DOMAIN + API_TASKS_ROUTE, data)
}

const deleteTask = async (id) => {
	return await axios.delete(DOMAIN + API_TASKS_ROUTE + id)
}

export const API = {
	getTasks,
	addTask,
	deleteTask,
}
