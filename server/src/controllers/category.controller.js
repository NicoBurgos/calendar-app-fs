import { CategoryServices } from '../services/category.service.js'
import {
	handlerHttp,
	categoryAlreadyExists,
	categoryNotFound,
	missingData,
	badRequest,
} from '../utils/error.handler.js'

export const getAllCategories = async (req, res) => {
	try {
		const categories = await CategoryServices.getCategories()

		res.json(categories)
	} catch (error) {
		handlerHttp(res, error)
	}
}

export const getOneCategory = async (req, res) => {
	const { id } = req.params

	if (isNaN(id)) return badRequest(res)
	try {
		const category = await CategoryServices.getCategory(id)

		if (!category[0]) {
			categoryNotFound(res)
		} else {
			res.json(category)
		}
	} catch (error) {
		throw error
	}
}

export const addOneCategory = async (req, res) => {
	const { name, color } = req.body

	if (!name || !color) return missingData(res)
	try {
		if ((await CategoryServices.categoryExistsByName(name)) == false) {
			const categoryId = await CategoryServices.addCategory(name, color)
			res.json({
				message: `Category ${name} added successfully`,
				data: { id: categoryId, name, color },
			})
		} else {
			categoryAlreadyExists(res, name)
		}
	} catch (error) {
		handlerHttp(res, error)
	}
}

export const deleteOneCategory = async (req, res) => {
	const { id } = req.params

	if (isNaN(id)) return badRequest(res)
	try {
		if (await CategoryServices.categoryExistsById(id)) {
			const name = await CategoryServices.deleteCategory(id)
			res.json({
				message: `Category ${id} deleted successfully`,
				name: name.name,
			})
		} else {
			categoryNotFound(res)
		}
	} catch (error) {
		handlerHttp(res, error)
	}
}

export const updateOneCategory = async (req, res) => {
	const { id } = req.params
	const { name, color } = req.body

	if (isNaN(id)) return badRequest(res)
	if (!name && !color) return missingData(res)
	try {
		if (!name && !color) {
			return missingData(res)
		}

		if (await CategoryServices.categoryExistsById(id)) {
			if (
				name &&
				(await CategoryServices.categoryExistsByName(name)) == false
			) {
				await CategoryServices.updateCategoryName(id, name)
				res.json({ message: `Category ${id} updated successfully` })
			} else if (color) {
				await CategoryServices.updateCategoryColor(id, color)
				res.json({ message: `Category ${id} updated successfully` })
			} else {
				categoryAlreadyExists(res, name)
			}
		} else {
			categoryNotFound(res)
		}
	} catch (error) {
		console.log(error)
		handlerHttp(res, error)
	}
}
