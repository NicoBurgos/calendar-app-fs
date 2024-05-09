import { API } from '../api/categories.api'
import { useCategoriesStore } from '../store/categoriesStore'

export const useCategoryListItem = () => {
	const { deleteCategory, deleteCategoriesByDayName, updateCurrentCategory } =
		useCategoriesStore()
	const { currentCategory } = useCategoriesStore()

	const handleClickCategory = (category, changeEditing, resetInput) => {
		currentCategory == null
			? updateCurrentCategory(category)
			: updateCurrentCategory(null) & changeEditing(false) & resetInput()
	}

	const handleDeleteCategory = async (id) => {
		try {
			const res = await API.deleteCategory(id)
			const name = res.data.name
			//delete Category
			deleteCategory(id)
			deleteCategoriesByDayName(name)
		} catch (error) {
			error
		}
		updateCurrentCategory(null)
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
