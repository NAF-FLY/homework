/* Input counter */
let valueAllProduct, sumAllProduct

document.addEventListener('click', handler, true)

function handler(e) {
	target = e.target

	if (
		target.className == 'input-quantity1' ||
		target.className == 'input-quantity2' ||
		target.className == 'input-quantity3'
	) {
		e.stopPropagation()
		e.preventDefault()
	}
}

let arrayPrice = [],
	arrayPriceNoDiscount = []

/**** price_discount per piece ****/
priceItems.forEach(el =>
	arrayPrice.push(parseInt(el.innerHTML.replace(/\s/g, '')))
)

const step1 = arrayPrice[0],
	step2 = Math.round(arrayPrice[2] / 200),
	step3 = arrayPrice[4] / 2

let priceChange1 = parseInt(price1[0].textContent),
	priceChange2 = parseInt(price2[0].textContent.replace(/\s/g, '')),
	priceChange3 = parseInt(price3[0].textContent)
/**********************************/

/**** price_nodiscount per piece ****/
priceItemsNoDiscount.forEach(el =>
	arrayPriceNoDiscount.push(parseInt(el.innerHTML.replace(/\s/g, '')))
)

const stepPrice1 = arrayPriceNoDiscount[0],
	stepPrice2 = Math.round(arrayPriceNoDiscount[2] / 200),
	stepPrice3 = arrayPriceNoDiscount[4] / 2

let priceChangeNo1 = parseInt(priceNo1[0].textContent),
	priceChangeNo2 = parseInt(priceNo2[0].textContent.replace(/\s/g, '')),
	priceChangeNo3 = parseInt(priceNo3[0].textContent)
/**********************************/

function nplural(int, array) {
	return (
		(array = array || ['товар', 'товара', 'товаров']) &&
		array[
			int % 100 > 4 && int % 100 < 20
				? 2
				: [2, 0, 1, 1, 1, 2][int % 10 < 5 ? int % 10 : 5]
		]
	)
}

popupWrapperDeliver.addEventListener('input', checkAddress)

function checkAddress(e) {
	let address = e.target.value

	selectBtn.forEach(el => {
		el.addEventListener('click', () => {
			popupWrapper.classList.remove('show')
			popupWrapperDeliver.classList.remove('show')
			addressText.innerText = address
			addressSubText.innerText = address
		})
	})
}

popupWrapper.addEventListener('input', checkCard)

function checkCard(e) {
	let target = e.target
	let isClicked = e.currentTarget
	cardText = ''
	const typeCard = target.id

	isClicked.getElementsByTagName('button')[0].onclick = function () {
		cardImg[0].src = `assets/images/icons/${typeCard}.svg`
		cardImg[1].src = `assets/images/icons/${typeCard}.svg`
	}
}

confirmingCheckbox.addEventListener('click', checkedConfirm)

function checkedConfirm() {
	if (confirmingCheckbox.checked) {
		orderBtn.innerText = 'Оплатить ' + totalSum.textContent + ' сом'
	}

	if (!confirmingCheckbox.checked) {
		orderBtn.innerText = 'Заказать'
	}
}

document
	.getElementsByClassName('form__counter')[0]
	.querySelector('.btn-minus').style.opacity = 0.2
document
	.getElementsByClassName('form__counter')[2]
	.querySelector('.btn-plus').style.opacity = 0.2

const hideBtns = [closeBtn, selectBtn]

for (let i = 0; i < hideBtns.length; i++) {
	hideBtns[i].forEach(btn =>
		btn.addEventListener('click', () => {
			popupWrapper.classList.remove('show')
			popupWrapperDeliver.classList.remove('show')
		})
	)
}

selectCard.forEach(el => {
	el.addEventListener('click', () => {
		popupWrapper.classList.add('show')
	})
})

selectAddress.forEach(el => {
	el.addEventListener('click', () => {
		popupWrapperDeliver.classList.add('show')
	})
})

function checkedCart() {
	let counterCheckbox = 0

	for (let i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked == true) {
			counterCheckbox++
		}
	}

	counterCheckbox > 0
		? labelCart.forEach(el => (el.style.display = 'grid'))
		: labelCart.forEach(el => (el.style.display = 'none'))

	labelCart.forEach(el => (el.innerText = counterCheckbox))
	countProduct.innerText = counterCheckbox + ' ' + nplural(counterCheckbox)
	valueAllProduct =
		parseInt(inputValue1.value) +
		parseInt(inputValue2.value) +
		parseInt(inputValue3.value)
}

checkedCart()

function deleteItem() {
	let value = deleteBtn1.length

	for (let i = 0; i < deleteBtn.length; i++) {
		deleteBtn[i].addEventListener('click', e => {
			e.target.parentNode.parentNode.parentElement.remove(e.target.parentNode)
		})
	}

	if (!document.getElementById('item11')) {
		priceChange1 = 0
		inputValue1.value = 0
		priceChangeNo1 -= priceChangeNo1
		checkbox1.checked = false
	}
	if (!document.getElementById('item12')) {
		priceChange2 = 0
		inputValue2.value = 0
		priceChangeNo2 -= priceChangeNo2
		checkbox2.checked = false
	}
	if (!document.getElementById('item13')) {
		priceChange3 = 0
		inputValue3.value = 0
		priceChangeNo3 -= priceChangeNo3
		checkbox3.checked = false
	}

	missingText.innerText = `Отсутствуют · ${value} ${nplural(value)}`
	checkedItems()
}

deleteItem()

listItems.forEach(list => {
	list.addEventListener('click', amountOfMoney)
})

function amountOfMoney(e) {
	deleteItem()

	let target = e.target
	if (target.className == 'btn-plus') {
		switch (target.parentElement.id) {
			case 'item11': {
				if (inputValue1.value < 2) {
					inputValue1.value++
					priceChange1 += step1
					price1[0].innerText = prettify(priceChange1)
					price1[1].innerText = prettify(priceChange1)
					priceChangeNo1 += stepPrice1
					priceNo1[0].innerText = prettify(priceChangeNo1)
					priceNo1[1].innerText = prettify(priceChangeNo1)
					document
						.getElementsByClassName('form__counter')[0]
						.querySelector('.btn-minus').style.opacity = 1
					document
						.getElementsByClassName('form__counter')[0]
						.querySelector('.btn-plus').style.opacity = 0.2
				}
				break
			}
			case 'item12': {
				inputValue2.value++
				priceChange2 += step2
				price2[0].innerText = prettify(priceChange2)
				price2[1].innerText = prettify(priceChange2)
				priceChangeNo2 += stepPrice2
				priceNo2[0].innerText = prettify(priceChangeNo2)
				priceNo2[1].innerText = prettify(priceChangeNo2)
				break
			}
			case 'item13': {
				if (inputValue3.value < 2) {
					inputValue3.value++
					priceChange3 += step3
					price3[0].innerText = prettify(priceChange3)
					price3[1].innerText = prettify(priceChange3)
					priceChangeNo3 += stepPrice3
					priceNo3[0].innerText = prettify(priceChangeNo3)
					priceNo3[1].innerText = prettify(priceChangeNo3)
					document
						.getElementsByClassName('form__counter')[2]
						.querySelector('.btn-minus').style.opacity = 1
					document
						.getElementsByClassName('form__counter')[2]
						.querySelector('.btn-plus').style.opacity = 0.2
				}
				break
			}
			default: {
				return null
			}
		}
	} else {
		switch (target.parentElement.id) {
			case 'item11': {
				if (inputValue1.value > 1) {
					inputValue1.value--
					priceChange1 -= step1
					price1[0].innerText = prettify(priceChange1)
					price1[1].innerText = prettify(priceChange1)
					priceChangeNo1 -= stepPrice1
					priceNo1[0].innerText = prettify(priceChangeNo1)
					priceNo1[1].innerText = prettify(priceChangeNo1)
					document
						.getElementsByClassName('form__counter')[0]
						.querySelector('.btn-minus').style.opacity = 0.2
					document
						.getElementsByClassName('form__counter')[0]
						.querySelector('.btn-plus').style.opacity = 1
				}
				break
			}
			case 'item12': {
				if (inputValue2.value > 1) {
					inputValue2.value--
					priceChange2 -= step2
					price2[0].innerText = prettify(priceChange2)
					price2[1].innerText = prettify(priceChange2)
					priceChangeNo2 -= stepPrice2
					priceNo2[0].innerText = prettify(priceChangeNo2)
					priceNo2[1].innerText = prettify(priceChangeNo2)
				}
				break
			}
			case 'item13': {
				if (inputValue3.value > 1) {
					inputValue3.value--
					priceChange3 -= step3
					price3[0].innerText = prettify(priceChange3)
					price3[1].innerText = prettify(priceChange3)
					priceChangeNo3 -= stepPrice3
					priceNo3[0].innerText = prettify(priceChangeNo3)
					priceNo3[1].innerText = prettify(priceChangeNo3)
					document
						.getElementsByClassName('form__counter')[2]
						.querySelector('.btn-minus').style.opacity = 0.2
					document
						.getElementsByClassName('form__counter')[2]
						.querySelector('.btn-plus').style.opacity = 1
				}
				break
			}
			default: {
				return null
			}
		}
	}

	checkedItems()
	checkedConfirm()
}

listItems.forEach(list => {
	list.addEventListener('input', checkedItems)
})

function checkedItems() {
	let countPrice1 = checkbox1.checked ? priceChange1 : 0,
		countPrice2 = checkbox2.checked ? priceChange2 : 0,
		countPrice3 = checkbox3.checked ? priceChange3 : 0

	let countPriceNo1 = checkbox1.checked ? priceChangeNo1 : 0,
		countPriceNo2 = checkbox2.checked ? priceChangeNo2 : 0,
		countPriceNo3 = checkbox3.checked ? priceChangeNo3 : 0

	for (let i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			allCheckbox.checked = true
		}
	}

	for (let i = 0; i < checkboxes.length; i++) {
		if (!checkboxes[i].checked) {
			allCheckbox.checked = false
		}
	}

	totalSum.innerText = prettify(countPrice1 + countPrice2 + countPrice3)
	totalSumNoDiscount[0].innerText =
		prettify(countPriceNo1 + countPriceNo2 + countPriceNo3) + ' сом'
	totalDiscount[0].innerText =
		prettify(
			parseInt(totalSum.textContent.replace(/\s/g, '')) -
				parseInt(totalSumNoDiscount[0].textContent.replace(/\s/g, ''))
		) + ' cом'

	sumAllProduct = prettify(priceChange1 + priceChange2 + priceChange3)

	checkedConfirm()
	checkedCart()
}

allCheckbox.addEventListener('click', function () {
	if (this.checked) {
		for (let i = 0; i < checkboxes.length; i++) {
			checkboxes[i].checked = true
		}
	} else {
		for (let i = 0; i < checkboxes.length; i++) {
			checkboxes[i].checked = false
		}
	}

	checkedItems()
})
