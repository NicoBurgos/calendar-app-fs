import './CalendarMonth.css'
import { Cell } from '../Cell/Cell'
import { data } from '../../data/CalendarData'
import { useSettingsStore } from '../../store/settingsStore'

export const CalendarMonth = () => {
	const { currentMode, updateCurrentMode } = useSettingsStore()
	const { updateCurrentMonth } = useSettingsStore()

	const handleMonthClick = (month) => {
		updateCurrentMonth(month)
		updateCurrentMode(false)
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
