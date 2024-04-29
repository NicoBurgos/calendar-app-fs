import { CategoriesContext } from './CategoriesContext'
import { useFetchCategories } from '../hooks/useFetchCategories'

export const CategoriesProvider = ({ children }) => {
	const { categories, changeCategories } = useFetchCategories()

	return (
		<CategoriesContext.Provider value={{ categories, changeCategories }}>
			{children}
		</CategoriesContext.Provider>
	)
}
