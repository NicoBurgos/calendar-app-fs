import connection from '../database/db.js'

const getCategories = async () => {
	try {
		const query = await connection.query('select * from categories')
		const categories = query.rows

		return categories
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

const getCategory = async (id) => {
	try {
		const query = await connection.query(
			'select * from categories where id = $1',
			[id]
		)
		const category = query.rows

		return category
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

const addCategory = async (name, color) => {
	try {
		const category = await connection.query(
			'INSERT INTO categories (name, color) VALUES ($1, $2) RETURNING id',
			[name, color]
		)
		return category.rows[0].id
	} catch (error) {
		throw error
	}
}

const deleteCategory = async (id) => {
	try {
		const name = await connection.query(
			'SELECT name FROM categories WHERE id = $1',
			[id]
		)
		const categories = await connection.query(
			'DELETE FROM categories WHERE id = $1',
			[id]
		)
		return name.rows[0]
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

const updateCategoryName = async (id, name) => {
	try {
		const category = await connection.query(
			'UPDATE categories SET name = $2 WHERE id = $1',
			[id, name]
		)

		return category
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

const updateCategoryColor = async (id, color) => {
	try {
		const category = await connection.query(
			'UPDATE categories SET color = $2 WHERE id = $1',
			[id, color]
		)

		return category
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

const getCategoryByName = (name) => {
	try {
		const categories = connection.query(
			'SELECT * FROM categories WHERE name = $1',
			[name]
		)

		return categories
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

export const DataBase = {
	getCategories,
	getCategory,
	addCategory,
	deleteCategory,
	updateCategoryName,
	updateCategoryColor,
	getCategoryByName,
}
