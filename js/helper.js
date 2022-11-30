export const prettify = number => {
	return number
		.toString()
		.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ')
}
