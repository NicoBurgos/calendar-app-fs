import swaggerJSDOC from 'swagger-jsdoc'

const options = {
	definition: {
		openapi: '3.0.0',
		info: { title: 'Calendar App API', version: '1.0.0' },
	},
	apis: [
		'src/v1/routes/categories.routes.js',
		'src/v1/routes/tasks.routes.js',
		'src/database/category.js',
		'src/database/tasks.js',
	],
}

export const swaggerSpec = swaggerJSDOC(options)
