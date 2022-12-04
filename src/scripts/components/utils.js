import { Cart } from './cart.js'

export const prettify = number =>
	Math.round(number)
		.toString()
		.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ')

export const nplural = (int, array) =>
	(array = array || ['товар', 'товара', 'товаров']) &&
	array[
		int % 100 > 4 && int % 100 < 20
			? 2
			: [2, 0, 1, 1, 1, 2][int % 10 < 5 ? int % 10 : 5]
	]

export const changeInputQuantity = (operation, target) => {
	const index = Cart.findIndex(elem => elem.id === +target.id)

	if (operation === 'increase') {
		Cart[index].value++
		if (target.value >= Cart[index].stock - 1) {
			target.nextElementSibling.disabled = true
			target.previousElementSibling.disabled = false
		} else {
			target.previousElementSibling.disabled = false
		}
	} else {
		Cart[index].value--
		if (target.value <= 2) {
			target.nextElementSibling.disabled = false
			target.previousElementSibling.disabled = true
		} else {
			target.nextElementSibling.disabled = false
		}
	}

	target.value = Cart[index].value

	changeTotalSum()
}

export const changeTotalPrice = target => {
	const totalPrice = document.querySelectorAll('.price')
	const totalPriceMob = document.querySelectorAll('.price-mob')
	const oldTotalPrice = document.querySelectorAll('.price__no-discount')
	const oldTotalPriceMob = document.querySelectorAll('.price__no-discount-mob')
	const index = Cart.findIndex(elem => elem.id === +target.id)

	for (let i = 0; i < totalPrice.length; i++) {
		if (i == index) {
			totalPrice[index].textContent = prettify(
				Cart[index].newPrice * Cart[index].value
			)
			totalPriceMob[index].textContent = prettify(
				Cart[index].newPrice * Cart[index].value
			)
			oldTotalPrice[index].textContent = prettify(
				Cart[index].oldPrice * Cart[index].value
			)
			oldTotalPriceMob[index].textContent = prettify(
				Cart[index].oldPrice * Cart[index].value
			)
		}
	}
}

export const changeTotalSum = () => {
	const totalSum = document.querySelector('.main-price'),
		oldTotalSum = document.querySelectorAll('.detail-text.nodiscount'),
		sizeDiscount = document.querySelectorAll('.detail-text.size-discount'),
		totalItem = document.querySelector('.detail-text__count')

	let totalSumNumber = 0,
		oldTotalSumNumber = 0,
		sumAllProduct = 0

	for (let i = 0; i < Cart.length; i++) {
		if (Cart[i].checked) {
			totalSumNumber += Cart[i].newPrice * Cart[i].value
			oldTotalSumNumber += Cart[i].oldPrice * Cart[i].value
			sumAllProduct += Cart[i].value
		}
	}

	totalSum.textContent = prettify(totalSumNumber)
	oldTotalSum[0].textContent = prettify(oldTotalSumNumber) + ' сом'
	sizeDiscount[0].textContent =
		prettify(totalSumNumber - oldTotalSumNumber) + ' сом'

	totalItem.textContent = `${sumAllProduct} ${nplural(sumAllProduct)}`

	confirmOrder()
}

export const totalItemCount = () => {
	const labelCart = document.querySelectorAll('.label-counter')
	let counter = 0

	Cart.map(el => (el.checked ? counter++ : counter))
	labelCart.forEach(label => {
		label.textContent = counter
		label.textContent > 0
			? (label.style.display = 'flex')
			: (label.style.display = 'none')
	})

	changeTotalSum()
}

export const confirmOrder = () => {
	const checkedConfirm = document.querySelector('#confirming'),
		confirmText = document.querySelector('.confirmation-text'),
		totalSum = document.querySelector('.main-price'),
		orderBtn = document.querySelector('.order-btn')

	if (checkedConfirm.checked) {
		orderBtn.textContent = `Оплатить ${totalSum.textContent} сом`
		confirmText.style.display = 'none'
	} else {
		orderBtn.textContent = 'Заказать'
		confirmText.style.display = 'block'
	}
}

export const getCountCheckbox = () => {
	const checkbox = document.querySelectorAll('.checkbox')

	return checkbox.length
}

export const clearTabs = () => {
	const tabContent1 = document.getElementById('points'),
		tabContent2 = document.getElementById('delivery-couriers'),
		tabPoints = document.getElementById('choose-points-tab'),
		tabCourier = document.getElementById('choose-couriers-tab')

	tabPoints.classList.remove('active')
	tabCourier.classList.remove('active')
	tabContent1.style.display = 'none'
	tabContent2.style.display = 'none'
}

export const checkedCart = () => {
	const checkboxes = document.querySelectorAll('.checkbox'),
		countProduct = document.querySelector('.detail-text__count'),
		totalPrice = document.querySelector('.main-price')

	let counterCheckbox = 0

	for (let i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked == true) {
			counterCheckbox++
		}
	}

	return [countProduct.textContent, totalPrice.textContent]
}
