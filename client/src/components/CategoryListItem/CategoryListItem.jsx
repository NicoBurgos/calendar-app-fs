import './CategoryListItem.css'
import { CategoryPin } from '../CategoryPin/CategoryPin'
import { useCategoryListItem } from '../../hooks/useCategoryListItem'
import { useCategoriesStore } from '../../store/categoriesStore'
import { useInputStore } from '../../store/inputsStore'

export const CategoryListItem = ({ category, changeEditing }) => {
	const { resetInput, updateSelectedColor, updateInputCategory } =
		useInputStore()
	const { currentCategory } = useCategoriesStore()
	const { handleClickCategory, handleDeleteCategory, handleEditCategory } =
		useCategoryListItem()

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
								updateSelectedColor,
								updateInputCategory
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
