import { useState } from 'react'
import { API } from '../api/categories.api'
import { useCategoriesStore } from '../store/categoriesStore'
import { useInputStore } from '../store/inputsStore'

export const useCategoryList = () => {
	const [isEditing, setIsEditing] = useState(false)
	const {
		addCategory,
		editCategory,
		editCategoriesByDay,
		updateCurrentCategory,
	} = useCategoriesStore()
	const { currentCategory } = useCategoriesStore()
	const { inputCategory, selectedColor } = useInputStore()
	const { resetInput } = useInputStore()

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
				addCategory(category.data.data)
			} catch (error) {
				error
			}
		} else {
			const id = currentCategory.id
			const prevName = currentCategory.name
			if (
				currentCategory.name != categoryInput ||
				currentCategory.color != selectedColor
			) {
				try {
					let data = {}
					if (currentCategory.name !== categoryInput) {
						data.name = categoryInput
					}

					if (currentCategory.color !== selectedColor) {
						data.color = selectedColor
					}

					await API.editCategory(id, data)
					changeEditing(false)

					editCategory(id, categoryInput, selectedColor)

					editCategoriesByDay(prevName, categoryInput)
				} catch (error) {
					error
				}
			}
		}

		resetInput()
		updateCurrentCategory(null)
	}

	return {
		handleSubmit,
		isEditing,
		changeEditing,
	}
}
