import { API } from '../api/categories.api'

export const useCategoryListItem = (
	currentCategory,
	changeCurrentCategory,
	categories,
	changeCategories,
	categoriesByDay,
	changeCategoriesByDay
) => {
	const handleClickCategory = (category, changeEditing, resetInput) => {
		currentCategory == null
			? changeCurrentCategory(category)
			: changeCurrentCategory(null) & changeEditing(false) & resetInput()
	}

	const handleDeleteCategory = async (id) => {
		try {
			const res = await API.deleteCategory(id)
			const newCategories = categories.filter((task) => task.id !== id)
			changeCategories(newCategories)
			const newCategoriesByDay = categoriesByDay.filter(
				(task) => task.category_name !== res.data.name
			)
			changeCategoriesByDay(newCategoriesByDay)
		} catch (error) {
			error
		}
		changeCurrentCategory(null)
	}

	const handleEditCategory = async (
		category,
		changeEditing,
		changeSelectedColor,
		changeInputCategory
	) => {
		changeEditing(true)
		const { name, color } = category
		changeInputCategory(name)
		changeSelectedColor(color)
	}

	return {
		handleClickCategory,
		handleDeleteCategory,
		handleEditCategory,
	}
}
