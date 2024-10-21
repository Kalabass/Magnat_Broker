export const formatDateToISO = (date: Date | undefined) => {
	console.log(typeof date);
	console.log(date);
	if (!date) return undefined;
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
};
