import pg from 'pg'
import {
	DB_HOST,
	DB_USER,
	DB_PASSWORD,
	DB_DATABASE,
	DB_PORT,
	DB_STRING,
} from '../config.js'

export const pool = new pg.Pool({
	/*host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	database: DB_DATABASE,
	port: DB_PORT,*/
	connectionString: DB_STRING,
	//ssl: true,
})

pool.connect((err, client, release) => {
	if (err) {
		return console.error('Error acquiring client', err.stack)
	} else {
		console.log('DB Connected')
	}
})

export default pool
