import './CategoryPin.css'
import { useCategoriesStore } from '../../store/categoriesStore'

export const CategoryPin = ({ category }) => {
	const { categories } = useCategoriesStore()
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
