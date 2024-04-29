import { Router } from 'express'
import {
	deleteOneCategory,
	updateOneCategory,
	getAllCategories,
	getOneCategory,
	addOneCategory,
} from '../../controllers/category.controller.js'

const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Category:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: The auto-generated id of the category
 *        name:
 *          type: string
 *          description: The name of the category
 *        color:
 *          type: string
 *          description: The hex color of the category
 *      required:
 *        - name
 *        - color
 *      example:
 *        id: 7
 *        name: work
 *        color: '#fff'
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
 *    CategoryAlreadyExists:
 *      type: object
 *      properties:
 *        error:
 *         type: integer
 *         description: The error code
 *        message:
 *          type: string
 *          description: A message for the existing category
 *      example:
 *        error: 409
 *        message: Category 5 already exists
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
 *    categoryId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: integer
 *      description: The category id
 */

/**
 * @swagger
 * /api/v1/categories:
 *  get:
 *   summary: Get all categories
 *   tags:
 *    - Categories
 *   responses:
 *    200:
 *     description: List of categories
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/Category'
 *    500:
 *     description: Database error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/DatabaseError'
 */
router.get('/categories', getAllCategories)

/**
 * @swagger
 * /api/v1/categories/{id}:
 *  get:
 *   summary: Get a category by id
 *   tags:
 *    - Categories
 *   parameters:
 *    - $ref: '#/components/parameters/categoryId'
 *   responses:
 *    200:
 *     description: A category by id
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Category'
 *    400:
 *     description: Bad request
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/BadRequest'
 *    404:
 *     description: Category Not Found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/CategoryNotFound'
 *    500:
 *     description: Database error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/DatabaseError'
 */
router.get('/categories/:id', getOneCategory)

/**
 * @swagger
 * /api/v1/categories:
 *  post:
 *   summary: Create a new category
 *   tags:
 *    - Categories
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        name:
 *         type: string
 *         description: The name of the category
 *        color:
 *         type: string
 *         description: The hex color of the category
 *      required:
 *       - name
 *       - color
 *      example:
 *       name: work
 *       color: '#fff'
 *   responses:
 *    200:
 *     description: Category added successfully
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          description: A message for adding a category
 *         data:
 *          type: object
 *          description: An object with the category information
 *          properties:
 *          $ref: '#/components/schemas/Category'
 *        example:
 *         message: Category work added successfully
 *         data:
 *          id: 7
 *          name: work
 *          color: '#fff'
 *    409:
 *     description: Category Already Exists
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/CategoryAlreadyExists'
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
router.post('/categories', addOneCategory)

/**
 * @swagger
 * /api/v1/categories/{id}:
 *  delete:
 *   summary: Delete a category by id
 *   tags:
 *    - Categories
 *   parameters:
 *    - $ref: '#/components/parameters/categoryId'
 *   responses:
 *    200:
 *     description: Category deleted successfully
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          description: A message of the category deleted
 *         name:
 *          type: string
 *          description: The name of the category deleted
 *       example:
 *        message: Category 30 deleted successfully
 *        name: works
 *    400:
 *     description: Bad request
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/BadRequest'
 *    404:
 *     description: Category Not Found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/CategoryNotFound'
 *    500:
 *     description: Database error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/DatabaseError'
 */
router.delete('/categories/:id', deleteOneCategory)

/**
 * @swagger
 * /api/v1/categories/{id}:
 *  patch:
 *   summary: Edit one category
 *   tags:
 *    - Categories
 *   parameters:
 *    - $ref: '#/components/parameters/categoryId'
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        name:
 *         type: string
 *         description: The name of the category
 *        color:
 *         type: string
 *         description: The hex color of the category
 *       anyOf:
 *        - required:
 *          - name
 *        - required:
 *          - color
 *       example:
 *        case1:
 *         name: work
 *        case2:
 *         color: '#fff'
 *        case3:
 *         name: holidays
 *         color: '#f00'
 *   responses:
 *    200:
 *     description: Category updated successfully
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          description: A message for updating a category
 *        example:
 *         message: Category 10 updated successfully
 *    400:
 *     description: Bad request
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/BadRequest'
 *    404:
 *     description: Category Not Found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/CategoryNotFound'
 *    409:
 *     description: Category Already Exists
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/CategoryAlreadyExists'
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
router.patch('/categories/:id', updateOneCategory)

export default router
