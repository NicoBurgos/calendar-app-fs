import { API } from '../api/tasks.api'
import { searchExistingCategoryByDay } from '../helpers/categoriesByDay'
import { useCategoriesStore } from '../store/categoriesStore'
export const useCalendarDays = () => {
	const { addCategoryByDay, deleteCategoriesByDayId } = useCategoriesStore()
	const { currentCategory, categoriesByDay } = useCategoriesStore()

	const handleDayClick = async (day, month) => {
		if (currentCategory === null) return
		const exists = searchExistingCategoryByDay(
			categoriesByDay,
			day,
			month,
			currentCategory.name
		)
		if (exists) {
			API.deleteTask(exists.id)
			deleteCategoriesByDayId(exists.id)
		} else {
			try {
				const task = await API.addTask({
					name: currentCategory.name,
					month,
					day,
				})
				addCategoryByDay(task.data.data)
			} catch (error) {
				error
			}
		}
	}

	return { handleDayClick }
}
