import { useState } from 'react'
import { InputContext } from './InputContext'
import { useInput } from '../hooks/useInput'

export const InputProvider = ({ children }) => {
	const [inputCategory, setInputCategory] = useState('')
	const [selectedColor, setSelectedColor] = useState('#ffae00')
	const {
		onChangeInput,
		resetInput,
		handleColorChange,
		changeInputCategory,
		changeSelectedColor,
	} = useInput(setInputCategory, setSelectedColor)

	return (
		<InputContext.Provider
			value={{
				inputCategory,
				selectedColor,
				onChangeInput,
				resetInput,
				handleColorChange,
				changeInputCategory,
				changeSelectedColor,
			}}
		>
			{children}
		</InputContext.Provider>
	)
}
