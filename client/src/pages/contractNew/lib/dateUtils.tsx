export const getDefaultDates = () => {
	const today = new Date()
	const nextYear = new Date(today)
	nextYear.setFullYear(today.getFullYear() + 1)
	nextYear.setDate(nextYear.getDate() - 1)

	return {
		defaultStartDate: today,
		defaultEndDate: nextYear,
	}
}
