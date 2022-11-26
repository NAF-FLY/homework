/* Accrordion */
const btnShowCart = document.querySelector('.list-items__checkbox-all'),
	btnShowMissing = document.querySelector('.list-items__checkbox-all-missing'),
	accordionCart = document.querySelector('.contentBx'),
	accordionMissing = document.querySelector('.contentBx-missing')

/* Checkbox */
const allCheckbox = document.getElementById('checkbox-id'),
	checkbox1 = document.getElementById('item1'),
	checkbox2 = document.getElementById('item2'),
	checkbox3 = document.getElementById('item3')

/* Prices */
// watch to click events on cards of product
let listItems = document.querySelector('.list-items__main')

// array of prices
const priceItems = document.querySelectorAll('.price')

// price for a certain for a certain product
const price1 = document.querySelectorAll('.price.price1'),
	price2 = document.querySelectorAll('.price.price2'),
	price3 = document.querySelectorAll('.price.price3')

const totalSum = document.querySelector('.main-price')

// input value for product
const inputValue1 = document.querySelector('.input-quantity1'),
	inputValue2 = document.querySelector('.input-quantity2'),
	inputValue3 = document.querySelector('.input-quantity3')
