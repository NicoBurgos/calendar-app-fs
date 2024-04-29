import { useState } from 'react'
import { CurrentCategoryContext } from './CurrentCategoryContext'

export const CurrentCategoryProvider = ({ children }) => {
	const [currentCategory, setCurrentCategory] = useState(null)
	const changeCurrentCategory = (newCategory) => {
		setCurrentCategory(newCategory)
	}
	return (
		<CurrentCategoryContext.Provider
			value={{ currentCategory, changeCurrentCategory }}
		>
			{children}
		</CurrentCategoryContext.Provider>
	)
}
