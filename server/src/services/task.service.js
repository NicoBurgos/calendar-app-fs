import { DataBase } from '../database/tasks.js'

const getTasks = async () => {
	try {
		const tasks = await DataBase.getTasks()

		return tasks
	} catch (error) {
		throw error
	}
}

const getTask = async (id) => {
	try {
		const task = await DataBase.getTask(id)

		return task
	} catch (error) {
		throw error
	}
}

const addTask = async (name, month, day) => {
	try {
		const task = await DataBase.addTask(name, month, day)

		return task
	} catch (error) {
		throw error
	}
}

const deleteTask = async (id) => {
	try {
		const task = await DataBase.deleteTask(id)
	} catch (error) {
		throw error
	}
}

const taskExistsById = async (id) => {
	try {
		const task = await DataBase.getTask(id)

		if (task[0]) {
			return true
		} else {
			return false
		}
	} catch (error) {
		throw error
	}
}

const taskExistsByNameAndDate = async (name, month, day) => {
	try {
		const tasks = await DataBase.getTaskByNameAndDate(name, month, day)

		if (tasks.rowCount > 0) {
			return true
		} else {
			return false
		}
	} catch (error) {
		throw error
	}
}

export const TaskServices = {
	getTasks,
	getTask,
	addTask,
	deleteTask,
	taskExistsById,
	taskExistsByNameAndDate,
}
