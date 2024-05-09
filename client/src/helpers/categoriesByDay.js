export const searchExistingCategoryByDay = (
	categoriesByDay,
	day,
	month,
	categoryName
) => {
	const res = categoriesByDay.find(
		(el) =>
			el.day === day && el.month === month && el.category_name == categoryName
	)
	return res
}
