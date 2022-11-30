const prettify = number =>
	number.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ')

const unprettify = number => parseInt(number.replace(/\s/g, ''))

const nplural = (int, array) =>
	(array = array || ['товар', 'товара', 'товаров']) &&
	array[
		int % 100 > 4 && int % 100 < 20
			? 2
			: [2, 0, 1, 1, 1, 2][int % 10 < 5 ? int % 10 : 5]
	]
