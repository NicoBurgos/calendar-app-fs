import { TaskServices } from '../services/task.service.js'
import { CategoryServices } from '../services/category.service.js'
import {
	handlerHttp,
	taskAlreadyExists,
	taskNotFound,
	categoryNotFound,
	badRequest,
	missingData,
} from '../utils/error.handler.js'

export const getAllTasks = async (req, res) => {
	try {
		const tasks = await TaskServices.getTasks()

		res.json(tasks)
	} catch (error) {
		handlerHttp(res, error)
	}
}

export const getOneTask = async (req, res) => {
	const { id } = req.params

	if (isNaN(id)) return badRequest(res)
	try {
		const task = await TaskServices.getTask(id)

		if (!task[0]) {
			taskNotFound(res)
		} else {
			res.json(task)
		}
	} catch (error) {
		throw error
	}
}

export const addOneTask = async (req, res) => {
	const { name, month, day } = req.body

	if (!name || !month || !day) return missingData(res)
	try {
		if (await CategoryServices.categoryExistsByName(name)) {
			if (
				(await TaskServices.taskExistsByNameAndDate(name, month, day)) == false
			) {
				const taskId = await TaskServices.addTask(name, month, day)

				res.json({
					message: `Task ${name} added successfully`,
					data: { id: taskId, category_name: name, month, day },
				})
			} else {
				taskAlreadyExists(res, name)
			}
		} else {
			categoryNotFound(res)
		}
	} catch (error) {
		handlerHttp(res, error)
	}
}

export const deleteOneTask = async (req, res) => {
	const { id } = req.params

	if (isNaN(id)) return badRequest(res)
	try {
		if (await TaskServices.taskExistsById(id)) {
			await TaskServices.deleteTask(id)
			res.json({ message: `Task ${id} deleted successfully` })
		} else {
			taskNotFound(res)
		}
	} catch (error) {
		handlerHttp(res, error)
	}
}
