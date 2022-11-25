/* Accrordion */
const btnShowCart = document.querySelector('.list-items__checkbox-all'),
	btnShowMissing = document.querySelector('.list-items__checkbox-all-missing'),
	accordionCart = document.querySelector('.contentBx'),
	accordionMissing = document.querySelector('.contentBx-missing')

btnShowCart.addEventListener('click', () => {
	accordionCart.classList.toggle('active')
})

btnShowMissing.addEventListener('click', () => {
	accordionMissing.classList.toggle('active')
})

/* Input counter */
const priceItems = document.querySelectorAll('.price')

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

let arrayPrice = []

priceItems.forEach(el => arrayPrice.push(parseInt(el.innerHTML)))

console.log(arrayPrice)

const step1 = arrayPrice[0] / 2,
	step2 = Math.round(arrayPrice[2] / 200),
	step3 = arrayPrice[4] / 2

console.log(step1, step2, step3)

let listItems = document.querySelector('.list-items__main')

const price1 = document.querySelectorAll('.price.price1'),
	price2 = document.querySelectorAll('.price.price2'),
	price3 = document.querySelectorAll('.price.price3')

let priceChange1 = parseInt(price1[0].textContent),
	priceChange2 = parseInt(price2[0].textContent),
	priceChange3 = parseInt(price3[0].textContent)

listItems.addEventListener('click', amountOfMoney)

function amountOfMoney(e) {
	let target = e.target

	if (target.className == 'btn-plus') {
		switch (target.parentElement.id) {
			case 'item11': {
				if (document.querySelector('.input-quantity1').value < 2) {
					document.querySelector('.input-quantity1').value++
					priceChange1 += step1
					price1[0].innerText = priceChange1
					price1[1].innerText = priceChange1
				}
				break
			}
			case 'item12': {
				target.closest('.list-items__main').querySelector('.input-quantity2')
					.value++
				priceChange2 += step2
				price2[0].innerText = priceChange2
				price2[1].innerText = priceChange2
				break
			}
			case 'item13': {
				if (document.querySelector('.input-quantity3').value < 2) {
					document.querySelector('.input-quantity3').value++
					priceChange3 += step3
					price3[0].innerText = priceChange3
					price3[1].innerText = priceChange3
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
				if (document.querySelector('.input-quantity1').value > 1) {
					document.querySelector('.input-quantity1').value--
					priceChange1 -= step1
					price1[0].innerText = priceChange1
					price1[1].innerText = priceChange1
				}
				break
			}
			case 'item12': {
				if (document.querySelector('.input-quantity2').value > 1) {
					document.querySelector('.input-quantity2').value--
					priceChange2 -= step2
					price2[0].innerText = priceChange2
					price2[1].innerText = priceChange2
				}
				break
			}
			case 'item13': {
				if (document.querySelector('.input-quantity3').value > 1) {
					document.querySelector('.input-quantity3').value--
					priceChange3 -= step3
					price3[0].innerText = priceChange3
					price3[1].innerText = priceChange3
				}
				break
			}
			default: {
				return null
			}
		}
	}
}
