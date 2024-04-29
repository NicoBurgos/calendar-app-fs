import { useState } from 'react'
import { CurrentModeContext } from './CurrentModeContext'

export const CurrentModeProvider = ({ children }) => {
	const [currentMode, setCurrentMode] = useState(true) //true=Show month, false=Show days
	const changeCurrentMode = (newMode) => {
		setCurrentMode(newMode)
	}
	return (
		<CurrentModeContext.Provider value={{ currentMode, changeCurrentMode }}>
			{children}
		</CurrentModeContext.Provider>
	)
}
