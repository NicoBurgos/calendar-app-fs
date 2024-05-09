import { create } from 'zustand'

export const useInputStore = create((set) => ({
	inputCategory: '',
	selectedColor: '#ffae00',

	updateInputCategory: (newInput) => {
		set({ inputCategory: newInput })
	},

	updateSelectedColor: (newColor) => {
		set({ selectedColor: newColor })
	},

	onChangeInput: (e) => {
		set({ inputCategory: e.target.value.toLowerCase() })
	},

	resetInput: () => {
		set({ inputCategory: '', selectedColor: '#ffae00' })
	},
}))
