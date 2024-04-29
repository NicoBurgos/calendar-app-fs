import express from 'express'
import cors from 'cors'
import categoriesRoutes from './v1/routes/categories.routes.js'
import tasksRoutes from './v1/routes/tasks.routes.js'
import swaggerUI from 'swagger-ui-express'
import { swaggerSpec } from './v1/swagger.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1', categoriesRoutes)
app.use('/api/v1', tasksRoutes)
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

export default app
