import axios from 'axios'
import { DOMAIN, API_CATEGORIES_ROUTE } from '../data/domain'

const getCategories = async () => {
	return await axios.get(DOMAIN + API_CATEGORIES_ROUTE)
}

const addCategory = async (data) => {
	return await axios.post(DOMAIN + API_CATEGORIES_ROUTE, data)
}

const deleteCategory = async (id) => {
	return await axios.delete(DOMAIN + API_CATEGORIES_ROUTE + id)
}

const editCategory = async (id, data) => {
	return await axios.patch(DOMAIN + API_CATEGORIES_ROUTE + id, data)
}

export const API = {
	getCategories,
	addCategory,
	deleteCategory,
	editCategory,
}
