import { DataBase } from '../database/category.js'

const getCategories = async () => {
	try {
		const allCategories = await DataBase.getCategories()

		return allCategories
	} catch (error) {
		throw error
	}
}

const getCategory = async (id) => {
	try {
		const category = await DataBase.getCategory(id)

		return category
	} catch (error) {
		throw error
	}
}

const addCategory = async (name, color) => {
	try {
		const category = await DataBase.addCategory(name, color)

		return category
	} catch (error) {
		throw error
	}
}

const deleteCategory = async (id) => {
	try {
		const category = await DataBase.deleteCategory(id)
		return category
	} catch (error) {
		throw error
	}
}

const updateCategoryName = async (id, name) => {
	try {
		const updatedCategory = await DataBase.updateCategoryName(id, name)

		return updatedCategory
	} catch (error) {
		throw error
	}
}

const updateCategoryColor = async (id, color) => {
	try {
		const updatedCategory = await DataBase.updateCategoryColor(id, color)

		return updatedCategory
	} catch (error) {
		throw error
	}
}

const categoryExistsById = async (id) => {
	try {
		const category = await DataBase.getCategory(id)

		if (category[0]) {
			return true
		} else {
			return false
		}
	} catch (error) {
		throw error
	}
}

const categoryExistsByName = async (name) => {
	try {
		const categories = await DataBase.getCategoryByName(name)

		if (categories.rowCount > 0) {
			return true
		} else {
			return false
		}
	} catch (error) {
		throw error
	}
}

export const CategoryServices = {
	getCategories,
	getCategory,
	addCategory,
	deleteCategory,
	updateCategoryName,
	updateCategoryColor,
	categoryExistsById,
	categoryExistsByName,
}
