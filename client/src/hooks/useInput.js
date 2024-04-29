export const useInput = (setInputCategory, setSelectedColor) => {
	const onChangeInput = (e) => {
		setInputCategory(e.target.value.toLowerCase())
	}

	const changeInputCategory = (newValue) => {
		setInputCategory(newValue)
	}

	const changeSelectedColor = (newValue) => {
		setSelectedColor(newValue)
	}

	const resetInput = () => {
		setInputCategory('')
		setSelectedColor('#ffae00')
	}

	const handleColorChange = (event) => {
		setSelectedColor(event.target.value)
	}

	return {
		onChangeInput,
		resetInput,
		handleColorChange,
		changeInputCategory,
		changeSelectedColor,
	}
}
