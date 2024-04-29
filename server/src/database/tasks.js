import connection from '../database/db.js'

const getTasks = async () => {
	try {
		const query = await connection.query('select * from tasks')
		const tasks = query.rows

		return tasks
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

const getTask = async (id) => {
	try {
		const query = await connection.query('select * from tasks where id = $1', [
			id,
		])
		const task = query.rows

		return task
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

const addTask = async (name, month, day) => {
	try {
		const task = await connection.query(
			'INSERT INTO tasks (category_name, month, day) VALUES ($1, $2, $3) RETURNING id',
			[name, month, day]
		)

		return task.rows[0].id
	} catch (error) {
		throw error
	}
}

const deleteTask = async (id) => {
	try {
		const tasks = await connection.query('DELETE FROM tasks WHERE id = $1', [
			id,
		])
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

const getTaskByNameAndDate = (name, month, day) => {
	try {
		const tasks = connection.query(
			'SELECT * FROM tasks WHERE category_name = $1 AND month = $2 AND day = $3',
			[name, month, day]
		)

		return tasks
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

export const DataBase = {
	getTasks,
	getTask,
	addTask,
	deleteTask,
	getTaskByNameAndDate,
}
