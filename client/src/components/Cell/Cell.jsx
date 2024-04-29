import './Cell.css'
import { CategoryPin } from '../CategoryPin/CategoryPin'

export const Cell = ({
	day,
	handleCellClick,
	currentMonth,
	categoriesByDay,
	currentMode,
	month,
}) => {
	if (currentMode === false) {
		return (
			<div
				className="cell cell-day"
				style={day === 1 ? { gridColumnStart: currentMonth.gridStart } : null}
				onClick={() => handleCellClick(day, currentMonth.month)}
			>
				<div className="day">{day}</div>
				<div className="categories-container">
					{categoriesByDay.map((category) => {
						return category.day === day &&
							category.month == currentMonth.month ? (
							<CategoryPin key={category.id} category={category}></CategoryPin>
						) : null
					})}
				</div>
			</div>
		)
	} else {
		return (
			<div onClick={() => handleCellClick(month)} className="cell cell-month">
				<strong>{month.month}</strong>
			</div>
		)
	}
}
