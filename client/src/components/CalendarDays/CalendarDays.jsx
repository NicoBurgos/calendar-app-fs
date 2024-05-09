import './CalendarDays.css'
import { Cell } from '../Cell/Cell'
import { useCalendarDays } from '../../hooks/useCalendarDays'
import { useSettingsStore } from '../../store/settingsStore'

export const CalendarDays = () => {
	const { currentMonth, currentMode } = useSettingsStore()
	const { handleDayClick } = useCalendarDays()

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
							currentMode={currentMode}
						></Cell>
					)
				)}
			</div>
		)
	}
}
