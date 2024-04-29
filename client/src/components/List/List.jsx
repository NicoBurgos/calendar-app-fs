import './List.css'
import { useContext } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'
import { CurrentCategoryContext } from '../../context/CurrentCategoryContext'
import { InputContext } from '../../context/InputContext'
import { CategoriesByDayContext } from '../../context/CategoriesByDayContext'
import { useCategoryList } from '../../hooks/useCategoryList'
import { CategoryListItem } from '../CategoryListItem/CategoryListItem'

export const List = () => {
	const { categories, changeCategories } = useContext(CategoriesContext)
	const { categoriesByDay, changeCategoriesByDay } = useContext(
		CategoriesByDayContext
	)
	const { currentCategory, changeCurrentCategory } = useContext(
		CurrentCategoryContext
	)
	const {
		inputCategory,
		selectedColor,
		onChangeInput,
		resetInput,
		handleColorChange,
	} = useContext(InputContext)
	const { handleSubmit, isEditing, changeEditing } = useCategoryList(
		inputCategory,
		selectedColor,
		categories,
		changeCategories,
		resetInput,
		currentCategory,
		changeCurrentCategory,
		categoriesByDay,
		changeCategoriesByDay
	)

	return (
		<div className="category-container">
			<div className="input-container">
				<form onSubmit={(e) => handleSubmit(e)}>
					<label htmlFor="category-name">
						{!isEditing ? 'Add a Category' : 'Edit Category'}
					</label>
					<div className="inputs">
						<input
							type="text"
							name="category-name"
							id="add-category"
							placeholder="Enter a category..."
							value={inputCategory}
							onChange={(e) => onChangeInput(e)}
						/>
						<input
							type="color"
							id="colorPicker"
							name="colorPicker"
							value={selectedColor}
							onChange={handleColorChange}
						></input>
					</div>

					<button className="button-category" type="submit">
						{isEditing ? 'Edit Category' : 'Add Category'}
					</button>
				</form>
			</div>
			<div className="list-container">
				{categories.length > 0
					? categories.map((category) => (
							<CategoryListItem
								key={category.name}
								category={category}
								isEditing={isEditing}
								changeEditing={changeEditing}
							></CategoryListItem>
					  ))
					: ''}
			</div>
		</div>
	)
}
