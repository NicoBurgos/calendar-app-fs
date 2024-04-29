import './App.css'
import { List } from './components/List/List'
import { CalendarDays } from './components/CalendarDays/CalendarDays'
import { CalendarTitle } from './components/CalendarTitle/CalendarTitle'
import { CalendarMonth } from './components/CalendarMonth/CalendarMonth'
import { CurrentModeProvider } from './context/CurrentModeProvider'
import { CurrentMonthProvider } from './context/CurrentMonthProvider'
import { CurrentCategoryProvider } from './context/CurrentCategoryProvider'
import { CategoriesProvider } from './context/CategoriesProvider'
import { CategoriesByDayProvider } from './context/CategoriesByDayProvider'
import { InputProvider } from './context/InputProvider'

function App() {
	return (
		<main>
			<CurrentModeProvider>
				<CurrentMonthProvider>
					<CurrentCategoryProvider>
						<CategoriesProvider>
							<CategoriesByDayProvider>
								<InputProvider>
									<div className="list"></div>
									<List></List>
									<div className="calendar">
										<div className="calendar-container">
											<CalendarTitle></CalendarTitle>
											<CalendarDays></CalendarDays>
											<CalendarMonth></CalendarMonth>
										</div>
									</div>
								</InputProvider>
							</CategoriesByDayProvider>
						</CategoriesProvider>
					</CurrentCategoryProvider>
				</CurrentMonthProvider>
			</CurrentModeProvider>
		</main>
	)
}

export default App
