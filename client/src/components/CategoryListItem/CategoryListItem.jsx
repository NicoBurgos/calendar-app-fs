import './CategoryListItem.css'
import { useContext } from 'react'
import { CurrentCategoryContext } from '../../context/CurrentCategoryContext'
import { CategoriesContext } from '../../context/CategoriesContext'
import { CategoriesByDayContext } from '../../context/CategoriesByDayContext'
import { useCategoryListItem } from '../../hooks/useCategoryListItem'
import { InputContext } from '../../context/InputContext'
import { CategoryPin } from '../CategoryPin/CategoryPin'

export const CategoryListItem = ({ category, changeEditing }) => {
	const { currentCategory, changeCurrentCategory } = useContext(
		CurrentCategoryContext
	)
	const { categoriesByDay, changeCategoriesByDay } = useContext(
		CategoriesByDayContext
	)
	const { resetInput } = useContext(InputContext)
	const { categories, changeCategories } = useContext(CategoriesContext)
	const { changeSelectedColor, changeInputCategory } = useContext(InputContext)
	const { handleClickCategory, handleDeleteCategory, handleEditCategory } =
		useCategoryListItem(
			currentCategory,
			changeCurrentCategory,
			categories,
			changeCategories,
			categoriesByDay,
			changeCategoriesByDay
		)

	return (
		<li>
			<div
				className="category-container"
				style={
					currentCategory != null && currentCategory.name == category.name
						? { backgroundColor: category.color }
						: {}
				}
			>
				<div
					className="category-item"
					onClick={() =>
						handleClickCategory(category, changeEditing, resetInput)
					}
				>
					<div className="category-pin-item">
						<CategoryPin category={category}></CategoryPin>
					</div>
					<div className="category-item-title">
						{category.name.slice(0, 15)}
					</div>
					<div
						className="edit-button"
						onClick={() =>
							handleEditCategory(
								category,
								changeEditing,
								changeSelectedColor,
								changeInputCategory
							)
						}
					>
						<span className="material-icons">edit</span>
					</div>
					<div
						className="delete-button"
						onClick={() => handleDeleteCategory(category.id)}
					>
						<span className="material-icons">delete</span>
					</div>
				</div>
			</div>
		</li>
	)
}
