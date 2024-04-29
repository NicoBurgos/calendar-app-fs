import { CategoriesByDayContext } from './CategoriesByDayContext'
import { useFetchTasks } from '../hooks/useFetchTasks'

export const CategoriesByDayProvider = ({ children }) => {
	const { categoriesByDay, changeCategoriesByDay } = useFetchTasks()
	return (
		<CategoriesByDayContext.Provider
			value={{ categoriesByDay, changeCategoriesByDay }}
		>
			{children}
		</CategoriesByDayContext.Provider>
	)
}
