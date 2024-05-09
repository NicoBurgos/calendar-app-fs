import './CalendarTitle.css'
import { useHandleMonths } from '../../hooks/useHandleMonths'
import { useSettingsStore } from '../../store/settingsStore'

export const CalendarTitle = () => {
	const { currentMonth, currentMode } = useSettingsStore()
	const { handlePrevMonth, handleNextMonth, handleTitleClick } =
		useHandleMonths()
	if (currentMode === false) {
		return (
			<>
				<div className="title-container-days">
					<button onClick={handlePrevMonth}>
						<span className="material-icons">arrow_back</span>
					</button>
					<h2 onClick={handleTitleClick}>
						2024 {currentMonth ? '- ' + currentMonth.month : ''}
					</h2>
					<button onClick={handleNextMonth}>
						<span className="material-icons">arrow_forward</span>
					</button>
				</div>
				<div className="title-days">
					<h4>Sunday</h4>
					<h4>Monday</h4>
					<h4>Tuesday</h4>
					<h4>Wednesday</h4>
					<h4>Thursday</h4>
					<h4>Friday</h4>
					<h4>Saturday</h4>
				</div>
			</>
		)
	} else {
		return (
			<>
				<div className="title-container-month">
					<h2>2024 </h2>
				</div>
			</>
		)
	}
}
