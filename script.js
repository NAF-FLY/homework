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
	if (e.target.className == 'input-quantity') {
		e.stopPropagation()
		e.preventDefault()
	}
}

let arrayPrice = []

priceItems.forEach(el => arrayPrice.push(parseInt(el.innerHTML)))

console.log(arrayPrice)

const step1 = arrayPrice[0] / 2,
	step2 = Math.round(arrayPrice[2] / 200),
	step3 = arrayPrice[3] / 2

console.log(step1, step2, step3)

let listItems = document.querySelector('.list-items__main')

const price1 = document.querySelectorAll('.price, .price1'),
	price2 = document.getElementById('price2'),
	price3 = document.getElementById('price3')

(price1[0].innerHTML = 500)

console.log((price1[0].innerHTML = 500))
console.log(price2)

let priceChange1 = parseInt(price1.textContent),
	priceChange2 = parseInt(price2.textContent),
	priceChange3 = parseInt(price3.textContent)

listItems.addEventListener('click', amountOfMoney)

function amountOfMoney(e) {
	if (e.target.className == 'btn-plus') {
		switch (e.target.parentElement.id) {
			case 'item11': {
				priceChange1 += step1
				price1.innerText = priceChange1
				break
			}
			case 'item12': {
				priceChange2 += step2
				price2.innerText = priceChange2
				break
			}
			case 'item13': {
				priceChange3 += step3
				price3.innerText = priceChange3
				break
			}
			default: {
				return null
			}
		}
	} else {
		switch (e.target.parentElement.id) {
			case 'item11': {
				priceChange1 -= step1
				price1.innerText = priceChange1
				break
			}
			case 'item12': {
				priceChange2 -= step2
				price2.innerText = priceChange2
				break
			}
			case 'item13': {
				priceChange3 -= step3
				price3.innerText = priceChange3
				break
			}
			default: {
				return null
			}
		}
	}
}
