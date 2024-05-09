import { create } from 'zustand'
import {
	fetchCategories,
	fetchCategoriesByDay,
} from '../helpers/fetchCategories'

export const useCategoriesStore = create((set) => ({
	categories: [],
	currentCategory: null,
	categoriesByDay: [],

	fetchCategories: async () => {
		const categories = await fetchCategories()
		set({ categories })
	},

	fetchCategoriesByDay: async () => {
		const categoriesByDay = await fetchCategoriesByDay()
		set({ categoriesByDay })
	},

	addCategory: (newCategory) => {
		set((state) => ({ categories: [...state.categories, newCategory] }))
	},

	editCategory: (categoryId, categoryInput, selectedColor) => {
		set((state) => ({
			categories: state.categories.map((cat) =>
				cat.id === categoryId
					? { ...cat, name: categoryInput, color: selectedColor }
					: cat
			),
		}))
	},

	deleteCategory: (id) => {
		set((state) => ({
			categories: state.categories.filter((task) => task.id !== id),
		}))
	},

	updateCurrentCategory: (newCategory) => {
		set({
			currentCategory: newCategory,
		})
	},

	addCategoryByDay: (newCategoryByDay) => {
		set((state) => ({
			categoriesByDay: [...state.categoriesByDay, newCategoryByDay],
		}))
	},

	editCategoriesByDay: (prevName, newName) => {
		set((state) => ({
			categoriesByDay: state.categoriesByDay.map((cat) =>
				cat.category_name === prevName
					? { ...cat, category_name: newName }
					: cat
			),
		}))
	},

	deleteCategoriesByDayName: (name) => {
		set((state) => ({
			categoriesByDay: state.categoriesByDay.filter(
				(task) => task.category_name !== name
			),
		}))
	},

	deleteCategoriesByDayId: (id) => {
		set((state) => ({
			categoriesByDay: state.categoriesByDay.filter((task) => task.id !== id),
		}))
	},
}))
