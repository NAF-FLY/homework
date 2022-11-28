/* Accrordion */
const btnShowCart = document.querySelector('.list-items__checkbox-all'),
	btnShowMissing = document.querySelector('.list-items__checkbox-all-missing'),
	accordionCart = document.querySelector('.contentBx'),
	accordionMissing = document.querySelector('.contentBx-missing'),
	labelCheckboxAll = document.querySelector('.checkbox-label')

/* Checkbox */
const allCheckbox = document.getElementById('checkbox-id'),
	missingText = document.querySelector('.checkbox-all__missing-text'),
	checkbox1 = document.getElementById('item1'),
	checkbox2 = document.getElementById('item2'),
	checkbox3 = document.getElementById('item3'),
	confirmingCheckbox = document.getElementById('confirming'),
	checkboxes = document.querySelectorAll('.checkbox')

const orderBtn = document.querySelector('.order-btn'),
	deleteBtn = document.getElementsByClassName('icon-delete'),
	deleteAddressBtn = document.getElementsByClassName('icon-delete__address')

const deleteBtn1 = document.getElementsByClassName('icon-delete gray-icon')

/* Prices */
// watch to click events on cards of product
const listItems = document.querySelectorAll('.list-items__main'),
	childElementCount = document.getElementsByClassName('form__counter')

// array of prices
const priceItems = document.querySelectorAll('.price')
const priceItemsNoDiscount = document.querySelectorAll('.price__no-discount')

// price for a certain for a certain product
const price1 = document.querySelectorAll('.price.price1'),
	price2 = document.querySelectorAll('.price.price2'),
	price3 = document.querySelectorAll('.price.price3')

const priceNo1 = document.querySelectorAll('.price__no-discount.price1'),
	priceNo2 = document.querySelectorAll('.price__no-discount.price2'),
	priceNo3 = document.querySelectorAll('.price__no-discount.price3')

// all calculations for the order block
const totalSum = document.querySelector('.main-price'),
	totalSumNoDiscount = document.querySelectorAll('.detail-text.nodiscount'),
	totalDiscount = document.querySelectorAll('.detail-text.size-discount'),
	countProduct = document.querySelector('.detail-text__count')

// input value for product
const inputValue1 = document.querySelector('.input-quantity1'),
	inputValue2 = document.querySelector('.input-quantity2'),
	inputValue3 = document.querySelector('.input-quantity3')

// Cart
const labelCart = document.querySelectorAll('.label-counter')

// Close popup
const closeBtn = document.querySelectorAll('.close-btn'),
	popupWrapper = document.querySelector('.background-popup'),
	popupWrapperDeliver = document.querySelector('.background-popup__delivery'),
	selectCard = document.querySelectorAll('.select-card'),
	selectAddress = document.querySelectorAll('.select-address'),
	selectBtn = document.querySelectorAll('.popup__select-btn')

// Switch address
const addressText = document.querySelector('.second-text__address'),
	addressSubText = document.querySelector('.detail-info__subtext')

const cardImg = document.querySelectorAll('.card-select__img')
