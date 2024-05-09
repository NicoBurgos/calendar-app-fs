import './List.css'
import { CategoryListItem } from '../CategoryListItem/CategoryListItem'
import { useCategoryList } from '../../hooks/useCategoryList'
import { useCategoriesStore } from '../../store/categoriesStore'
import { useInputStore } from '../../store/inputsStore'

export const List = () => {
	const { categories } = useCategoriesStore()
	const { inputCategory, selectedColor } = useInputStore()
	const { onChangeInput, updateSelectedColor } = useInputStore()

	const { handleSubmit, isEditing, changeEditing } = useCategoryList()
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
							onChange={(e) => updateSelectedColor(e.target.value)}
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
