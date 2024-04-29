import './CalendarMonth.css'
import { useContext } from 'react'
import { CurrentModeContext } from '../../context/CurrentModeContext'
import { CurrentMonthContext } from '../../context/CurrentMonthContext'
import { Cell } from '../Cell/Cell'
import { data } from '../../data/CalendarData'

export const CalendarMonth = () => {
	const { currentMode, changeCurrentMode } = useContext(CurrentModeContext)
	const { changeCurrentMonth } = useContext(CurrentMonthContext)
	const handleMonthClick = (month) => {
		changeCurrentMonth(month)
		changeCurrentMode(false)
	}

	if (currentMode === true) {
		return (
			<div className="grid-container-month">
				{data.map((month) => {
					return (
						<Cell
							key={month.month}
							handleCellClick={handleMonthClick}
							month={month}
						></Cell>
					)
				})}
			</div>
		)
	}
}
