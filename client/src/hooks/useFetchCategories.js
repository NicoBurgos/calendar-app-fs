import { useEffect, useState } from 'react'
import { API } from '../api/categories.api'

export const useFetchCategories = () => {
	const [categories, setCategories] = useState([])
	const changeCategories = (newCategories) => {
		setCategories(newCategories)
	}
	const getCategories = async () => {
		try {
			const res = await API.getCategories()
			const data = res.data
			changeCategories(data)
		} catch (error) {
			error
		}
	}

	useEffect(() => {
		getCategories()
	}, [])

	return {
		categories,
		changeCategories,
	}
}
