import './App.css'
import { useEffect } from 'react'
import { List } from './components/List/List'
import { CalendarDays } from './components/CalendarDays/CalendarDays'
import { CalendarTitle } from './components/CalendarTitle/CalendarTitle'
import { CalendarMonth } from './components/CalendarMonth/CalendarMonth'
import { useCategoriesStore } from './store/categoriesStore'

function App() {
	const { fetchCategories, fetchCategoriesByDay } = useCategoriesStore()

	useEffect(() => {
		fetchCategories()
		fetchCategoriesByDay()
	}, [])

	return (
		<main>
			<div className="list"></div>
			<List></List>
			<div className="calendar">
				<div className="calendar-container">
					<CalendarTitle></CalendarTitle>
					<CalendarDays></CalendarDays>
					<CalendarMonth></CalendarMonth>
				</div>
			</div>
		</main>
	)
}

export default App
