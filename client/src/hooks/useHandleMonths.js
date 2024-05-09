import { data } from '../data/CalendarData'
import { useSettingsStore } from '../store/settingsStore'
export const useHandleMonths = () => {
	const { updateCurrentMonth, updateCurrentMode } = useSettingsStore()
	const { currentMonth } = useSettingsStore()

	const handlePrevMonth = () => {
		const month = currentMonth.month
		if (month === 'January') return
		const monthIndex = data.findIndex((monthData) => monthData.month === month)
		updateCurrentMonth(data[monthIndex - 1])
	}

	const handleNextMonth = () => {
		const month = currentMonth.month
		if (month === 'December') return
		const monthIndex = data.findIndex((monthData) => monthData.month === month)
		updateCurrentMonth(data[monthIndex + 1])
	}

	const handleTitleClick = () => {
		updateCurrentMode(true)
	}

	return {
		handlePrevMonth,
		handleNextMonth,
		handleTitleClick,
	}
}
