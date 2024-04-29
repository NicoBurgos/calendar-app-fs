import { useEffect, useState } from 'react'
import { API } from '../api/tasks.api'

export const useFetchTasks = () => {
	const [categoriesByDay, setCategoriesByDay] = useState([])
	const changeCategoriesByDay = (newCategories) => {
		setCategoriesByDay(newCategories)
	}
	const getTasks = async () => {
		try {
			const res = await API.getTasks()
			const data = res.data
			changeCategoriesByDay(data)
		} catch (error) {
			error
		}
	}

	useEffect(() => {
		getTasks()
	}, [])

	return {
		categoriesByDay,
		changeCategoriesByDay,
	}
}
