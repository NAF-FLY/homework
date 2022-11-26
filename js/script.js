/* Accrordion */
btnShowCart.addEventListener('click', () => {
	accordionCart.classList.toggle('active')
})

btnShowMissing.addEventListener('click', () => {
	accordionMissing.classList.toggle('active')
})

/* Input counter */
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

confirmingCheckbox.addEventListener('click', checkedConfirm)

function checkedConfirm() {
	if (confirmingCheckbox.checked) {
		orderBtn.innerText = 'Оплатить ' + totalSum.textContent + ' сом'
	}

	if (!confirmingCheckbox.checked) {
		orderBtn.innerText = 'Заказать'
	}
}

function prettify(number) {
	return number
		.toString()
		.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ')
}

listItems.addEventListener('click', amountOfMoney)

function amountOfMoney(e) {
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

listItems.addEventListener('input', checkedItems)

function checkedItems() {
	// let countItem1 = checkbox1.checked
	// 		? document.querySelector('.input-quantity1').value
	// 		: 0,
	// 	countItem2 = checkbox2.checked
	// 		? document.querySelector('.input-quantity2').value
	// 		: 0,
	// 	countItem3 = checkbox3.checked
	// 		? document.querySelector('.input-quantity3').value
	// 		: 0

	let countPrice1 = checkbox1.checked ? priceChange1 : 0,
		countPrice2 = checkbox2.checked ? priceChange2 : 0,
		countPrice3 = checkbox3.checked ? priceChange3 : 0

	let countPriceNo1 = checkbox1.checked ? priceChangeNo1 : 0,
		countPriceNo2 = checkbox2.checked ? priceChangeNo2 : 0,
		countPriceNo3 = checkbox3.checked ? priceChangeNo3 : 0

	if (
		checkbox1.checked == false &&
		checkbox2.checked == false &&
		checkbox3.checked == false
	) {
		allCheckbox.checked = false
	} else if (
		checkbox1.checked == true &&
		checkbox2.checked == true &&
		checkbox3.checked == true
	) {
		allCheckbox.checked = true
	}

	totalSum.innerText = prettify(countPrice1 + countPrice2 + countPrice3)
	totalSumNoDiscount[0].innerText =
		prettify(countPriceNo1 + countPriceNo2 + countPriceNo3) + ' сом'
	totalDiscount[0].innerText =
		prettify(
			parseInt(totalSum.textContent.replace(/\s/g, '')) -
				parseInt(totalSumNoDiscount[0].textContent.replace(/\s/g, ''))
		) + ' cом'
	checkedConfirm()
}

allCheckbox.addEventListener('click', function () {
	if (this.checked) {
		checkbox1.checked = true
		checkbox2.checked = true
		checkbox3.checked = true
	} else {
		checkbox1.checked = false
		checkbox2.checked = false
		checkbox3.checked = false
	}
	checkedItems()
})
