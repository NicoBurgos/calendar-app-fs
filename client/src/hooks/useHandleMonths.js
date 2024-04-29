import { data } from '../data/CalendarData'
export const useHandleMonths = (
	currentMonth,
	setCurrentMonth,
	setCurrentMode
) => {
	const handlePrevMonth = () => {
		const month = currentMonth.month
		if (month === 'January') return
		const monthIndex = data.findIndex((monthData) => monthData.month === month)
		setCurrentMonth(data[monthIndex - 1])
	}

	const handleNextMonth = () => {
		const month = currentMonth.month
		if (month === 'December') return
		const monthIndex = data.findIndex((monthData) => monthData.month === month)
		setCurrentMonth(data[monthIndex + 1])
	}

	const handleTitleClick = () => {
		setCurrentMode(true)
	}

	return {
		handlePrevMonth,
		handleNextMonth,
		handleTitleClick,
	}
}
