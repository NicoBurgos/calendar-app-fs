import { Router } from 'express'
import {
	addOneTask,
	deleteOneTask,
	getAllTasks,
	getOneTask,
} from '../../controllers/task.controller.js'

const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: The auto-generated id of the task
 *        category_name:
 *          type: string
 *          description: The name of the category
 *        month:
 *          type: string
 *          description: The month of the task
 *        day:
 *          type: integer
 *          description: The day of the task
 *      required:
 *        - category_name
 *        - month
 *        - day
 *      example:
 *        id: 8
 *        category_name: work
 *        month: 'June'
 *        day: 26
 *    BadRequest:
 *      type: object
 *      properties:
 *        error:
 *         type: integer
 *         description: The error code
 *        message:
 *          type: string
 *          description: A message for the bad request
 *      example:
 *        error: 400
 *        message: Bad request
 *    TaskNotFound:
 *      type: object
 *      properties:
 *        error:
 *         type: integer
 *         description: The error code
 *        message:
 *          type: string
 *          description: A message for the not found task
 *      example:
 *        error: 404
 *        message: Task was not found
 *    TaskAlreadyExists:
 *      type: object
 *      properties:
 *        error:
 *         type: integer
 *         description: The error code
 *        message:
 *          type: string
 *          description: A message for the existing task
 *      example:
 *        error: 409
 *        message: Task work already exists
 *    CategoryNotFound:
 *      type: object
 *      properties:
 *        error:
 *         type: integer
 *         description: The error code
 *        message:
 *          type: string
 *          description: A message for the not found category
 *      example:
 *        error: 404
 *        message: Category was not found
 *    MissingData:
 *      type: object
 *      properties:
 *        error:
 *         type: integer
 *         description: The error code
 *        message:
 *          type: string
 *          description: A message for the missing data
 *      example:
 *        error: 422
 *        message: Missing data
 *    DatabaseError:
 *      type: object
 *      properties:
 *        error:
 *         type: integer
 *         description: The error code
 *        message:
 *          type: string
 *          description: An error message
 *      example:
 *        error: 500
 *        message: Something goes wrong with the database
 *
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: integer
 *      description: The task id
 */

/**
 * @swagger
 * /api/v1/tasks:
 *  get:
 *   summary: Get all tasks
 *   tags:
 *    - Tasks
 *   responses:
 *    200:
 *     description: List of tasks
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/Task'
 *    500:
 *     description: Database error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/DatabaseError'
 */
router.get('/tasks', getAllTasks)

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *  get:
 *   summary: Get a task by id
 *   tags:
 *    - Tasks
 *   parameters:
 *    - $ref: '#/components/parameters/taskId'
 *   responses:
 *    200:
 *     description: A task by id
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Task'
 *    400:
 *     description: Bad request
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/BadRequest'
 *    404:
 *     description: Task Not Found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/TaskNotFound'
 *    500:
 *     description: Database error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/DatabaseError'
 */
router.get('/tasks/:id', getOneTask)

/**
 * @swagger
 * /api/v1/tasks:
 *  post:
 *   summary: Create a new task
 *   tags:
 *    - Tasks
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        category_name:
 *         type: string
 *         description: The name of the category
 *        month:
 *         type: string
 *         description: The month of the task
 *        day:
 *         type: integer
 *         description: The day of the task
 *      required:
 *       - category_name
 *       - month
 *       - day
 *      example:
 *       category_name: work
 *       month: 'July'
 *       day: 24
 *   responses:
 *    200:
 *     description: Task added successfully
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          description: A message for adding a task
 *         data:
 *          type: object
 *          description: An object with the task information
 *          properties:
 *          $ref: '#/components/schemas/Task'
 *        example:
 *         message: Task work added successfully
 *         data:
 *          id: 7
 *          category_name: work
 *          month: 'January'
 *          day: 1
 *    404:
 *     description: Category Not Found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/CategoryNotFound'
 *    409:
 *     description: Task Already Exists
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/TaskAlreadyExists'
 *    422:
 *     description: Missing Data
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/MissingData'
 *    500:
 *     description: Database error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/DatabaseError'
 */
router.post('/tasks', addOneTask)

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *  delete:
 *   summary: Delete a task by id
 *   tags:
 *    - Tasks
 *   parameters:
 *    - $ref: '#/components/parameters/taskId'
 *   responses:
 *    200:
 *     description: Task deleted successfully
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          description: A message of the task deleted
 *       example:
 *        message: Task 30 deleted successfully
 *    400:
 *     description: Bad request
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/BadRequest'
 *    404:
 *     description: Task Not Found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/TaskNotFound'
 *    500:
 *     description: Database error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/DatabaseError'
 */
router.delete('/tasks/:id', deleteOneTask)

export default router
