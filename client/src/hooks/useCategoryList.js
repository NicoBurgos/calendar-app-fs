import { useState } from 'react'
import { API } from '../api/categories.api'

export const useCategoryList = (
	inputCategory,
	selectedColor,
	categories,
	changeCategories,
	resetInput,
	currentCategory,
	changeCurrentCategory,
	categoriesByDay,
	changeCategoriesByDay
) => {
	const [isEditing, setIsEditing] = useState(false)
	const changeEditing = (value) => {
		setIsEditing(value)
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		const categoryInput = inputCategory
			.replace(/^\s+|\s+$/g, '')
			.replace(/[^\w\s]/g, '')

		if (categoryInput == '') {
			return
		}

		if (!isEditing) {
			try {
				const category = await API.addCategory({
					name: categoryInput,
					color: selectedColor,
				})

				const newCategories = [...categories, category.data.data]
				changeCategories(newCategories)
			} catch (error) {
				error
			}
		} else {
			//editing

			const id = currentCategory.id
			const prevName = currentCategory.name
			if (
				currentCategory.name != categoryInput ||
				currentCategory.color != selectedColor
			) {
				try {
					let data
					if (
						currentCategory.name != categoryInput &&
						currentCategory.color == selectedColor
					) {
						data = {
							name: categoryInput,
						}
					} else if (
						currentCategory.name == categoryInput &&
						currentCategory.color != selectedColor
					) {
						data = { color: selectedColor }
					} else {
						data = {
							name: categoryInput,
							color: selectedColor,
						}
					}

					await API.editCategory(id, data)
					changeEditing(false)

					const newCategories = categories.map((cat) => {
						if (cat.id == id) {
							cat.name = categoryInput
							cat.color = selectedColor
							return cat
						} else {
							return cat
						}
					})

					changeCategories(newCategories)

					const newCategoriesByDay = categoriesByDay.map((cat) => {
						if (cat.category_name == prevName) {
							cat.category_name = categoryInput
							return cat
						} else {
							return cat
						}
					})
					changeCategoriesByDay(newCategoriesByDay)
				} catch (error) {
					error
				}
			}
		}

		resetInput()
		changeCurrentCategory(null)
	}

	return {
		handleSubmit,
		isEditing,
		changeEditing,
	}
}
