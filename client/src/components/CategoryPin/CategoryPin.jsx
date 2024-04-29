import './CategoryPin.css'
import { useContext } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'

export const CategoryPin = ({ category }) => {
	const { categories } = useContext(CategoriesContext)
	const category_name = category.category_name || category.name
	const color = categories.find((cat) => cat.name == category_name)
	return (
		<div
			className="category-pin"
			style={{ backgroundColor: color ? color.color : '#ffae00' }}
		>
			{category_name[0]}
		</div>
	)
}
