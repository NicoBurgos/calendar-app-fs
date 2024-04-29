export const badRequest = (res) => {
	return res.status(400).json({
		error: 400,
		message: 'Bad request',
	})
}

export const handlerHttp = (res, error) => {
	return res.status(500).json({
		error: 500,
		message: 'Something goes wrong with the database',
	})
}

export const categoryNotFound = (res) => {
	return res.status(404).json({
		error: 404,
		message: 'Category not found',
	})
}

export const categoryAlreadyExists = (res, name) => {
	return res.status(409).json({
		error: 409,
		message: `Category ${name} already exists`,
	})
}

export const taskNotFound = (res) => {
	return res.status(404).json({
		error: 404,
		message: 'Task not found',
	})
}

export const taskAlreadyExists = (res, name) => {
	return res.status(409).json({
		error: 409,
		message: `Task ${name} already exists`,
	})
}

export const missingData = (res) => {
	return res.status(422).json({
		error: 422,
		message: `Missing data`,
	})
}
