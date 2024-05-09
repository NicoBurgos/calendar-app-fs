import { create } from 'zustand'

export const useSettingsStore = create((set) => ({
	currentMode: true,
	currentMonth: {},

	updateCurrentMode: (newMode) => {
		set({ currentMode: newMode })
	},

	updateCurrentMonth: (newMonth) => {
		set({ currentMonth: newMonth })
	},
}))
