import './CalendarDays.css'
import { useContext } from 'react'
import { CurrentModeContext } from '../../context/CurrentModeContext'
import { CurrentMonthContext } from '../../context/CurrentMonthContext'
import { CurrentCategoryContext } from '../../context/CurrentCategoryContext'
import { CategoriesByDayContext } from '../../context/CategoriesByDayContext'
import { Cell } from '../Cell/Cell'
import { useCalendarDays } from '../../hooks/useCalendarDays'

export const CalendarDays = () => {
	const { currentMonth } = useContext(CurrentMonthContext)
	const { currentMode } = useContext(CurrentModeContext)
	const { currentCategory } = useContext(CurrentCategoryContext)
	const { categoriesByDay, changeCategoriesByDay } = useContext(
		CategoriesByDayContext
	)
	const { handleDayClick } = useCalendarDays(
		categoriesByDay,
		changeCategoriesByDay,
		currentCategory
	)

	if (currentMode === false) {
		return (
			<div className="grid-container-days">
				{Array.from({ length: currentMonth.days }, (_, i) => i + 1).map(
					(day) => (
						<Cell
							key={day}
							day={day}
							handleCellClick={handleDayClick}
							currentMonth={currentMonth}
							categoriesByDay={categoriesByDay}
							currentMode={currentMode}
						></Cell>
					)
				)}
			</div>
		)
	}
}
