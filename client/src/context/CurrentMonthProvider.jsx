import { useState } from 'react'
import { data } from '../data/CalendarData'
import { CurrentMonthContext } from './CurrentMonthContext'

export const CurrentMonthProvider = ({ children }) => {
	const [currentMonth, setCurrentMonth] = useState(data[0]) //true=Show month, false=Show days
	const changeCurrentMonth = (newMonth) => {
		setCurrentMonth(newMonth)
	}
	return (
		<CurrentMonthContext.Provider value={{ currentMonth, changeCurrentMonth }}>
			{children}
		</CurrentMonthContext.Provider>
	)
}
