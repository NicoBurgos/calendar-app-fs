import { API } from '../api/tasks.api'
export const useCalendarDays = (
	categoriesByDay,
	changeCategoriesByDay,
	currentCategory
) => {
	const handleDayClick = async (day, month) => {
		if (currentCategory === null) return
		//if task exists delete it
		const exists = categoriesByDay.find(
			(el) =>
				el.day === day &&
				el.month === month &&
				el.category_name == currentCategory.name
		)
		if (exists) {
			API.deleteTask(exists.id)
			const newCategoriesByDay = categoriesByDay.filter(
				(task) => task.id !== exists.id
			)
			changeCategoriesByDay(newCategoriesByDay)
		} else {
			try {
				const task = await API.addTask({
					name: currentCategory.name,
					month,
					day,
				})
				const newCategoriesByDay = [...categoriesByDay, task.data.data]
				changeCategoriesByDay(newCategoriesByDay)
			} catch (error) {
				error
			}
		}
	}

	return { handleDayClick }
}
