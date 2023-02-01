import { renderCart } from './render.js'
import {
	changeInputQuantity,
	changeTotalPrice,
	changeTotalSum,
	confirmOrder,
	getCountCheckbox,
	nplural,
	totalItemCount,
} from './utils.js'

export let Cart = [
	{
		id: 1,
		title: 'Футболка UZcotton мужская',
		img: 'src/assets/images/t-shirt.jpg',
		detail: [{ color: 'Цвет: белый', size: 'Размер: 56' }],
		seller: 'Коледино WB',
		company: 'ООО Вайлдберриз',
		value: 1,
		stock: 3,
		newPrice: 522,
		oldPrice: 1051,
		newTotalPrice: 0,
		oldTotalPrice: 0,
		checked: true,
	},
	{
		id: 2,
		title:
			'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
		img: 'src/assets/images/smartphone.jpg',
		detail: [{ color: 'Цвет: прозрачный' }],
		seller: 'Коледино WB',
		company: 'OOO Мегапрофстиль',
		value: 200,
		newPrice: 10500.235,
		oldPrice: 11500.235,
		newTotalPrice: 0,
		oldTotalPrice: 0,
		checked: true,
	},
	{
		id: 3,
		title:
			'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
		img: 'src/assets/images/book.jpg',
		seller: 'Коледино WB',
		company: 'ООО Вайлдберриз',
		detail: [{ size: 'Размер: 56/54/52...' }],
		value: 2,
		stock: 2,
		newPrice: 247,
		oldPrice: 475,
		newTotalPrice: 0,
		oldTotalPrice: 0,
		checked: true,
	},
]

window.addEventListener('load', () => {
	renderCart()

	changeValue()
	deleteItem()
	checkedItem()
})

const changeValue = () => {
	const increaseBtn = document.querySelectorAll('.btn-plus'),
		decreaseBtn = document.querySelectorAll('.btn-minus'),
		counterLabel = document.querySelectorAll('.label-counter__item-delivery')
	console.log(counterLabel[0])

	increaseBtn.forEach(btn =>
		btn.addEventListener('click', e => {
			let target = e.target.previousElementSibling

			changeInputQuantity('increase', target)
			changeTotalPrice(target)
			counterLabel[0].textContent = Cart[1].value - 16
			counterLabel[1].textContent = Cart[2].value
			counterLabel[2].textContent = 16
		})
	)

	decreaseBtn.forEach(btn =>
		btn.addEventListener('click', e => {
			let target = e.target.nextElementSibling

			changeInputQuantity('decrease', target)
			changeTotalPrice(target)
			counterLabel[0].textContent = Cart[1].value - 16
			counterLabel[1].textContent = Cart[2].value
			counterLabel[2].textContent = 16
		})
	)

	confirmOrder()
}

const deleteItem = () => {
	const deleteBtn = document.querySelectorAll('.icon-delete')

	deleteBtn.forEach(btn =>
		btn.addEventListener('click', e => {
			const countEmpltyItem = document.querySelectorAll(
					'.icon-delete.gray-icon'
				),
				missingText = document.querySelector('.checkbox-all__missing-text')
			let itemId = e.target.parentNode.getAttribute('data-id')

			e.target.closest('.list-items__item').remove()
			Cart = Cart.filter(item => item.id !== +itemId)

			missingText.innerText = `Отсутствуют · ${
				countEmpltyItem.length - 1
			} ${nplural(countEmpltyItem.length)}`

			checkedItem()
			changeTotalSum()
			totalItemCount()
		})
	)
}

const checkedItem = () => {
	let counter = 0
	const checkbox = document.querySelectorAll('.checkbox'),
		checkedAllCheckboxes = document.querySelector('#checkbox-id'),
		checkedConfirm = document.querySelector('#confirming')

	checkedAllCheckboxes.addEventListener('click', e => {
		if (e.target.checked) {
			Cart.map(cx => {
				cx.checked = true
				cx.checked == true ? counter++ : counter--
			})
			checkbox.forEach(cx => (cx.checked = true))
		} else {
			Cart.map(cx => {
				cx.checked = false
				cx.checked == true ? counter++ : counter--
			})
			checkbox.forEach(cx => (cx.checked = false))
		}

		totalItemCount()
	})

	checkbox.forEach(cx => {
		cx.checked == true ? counter++ : counter--

		cx.addEventListener('click', e => {
			const target = e.target

			cx.checked == true ? counter++ : counter--
			Cart.map(cx => {
				cx.id == target.id ? (cx.checked = target.checked) : cx.checked
			})

			counter >= getCountCheckbox()
				? (checkedAllCheckboxes.checked = true)
				: (checkedAllCheckboxes.checked = false)

			totalItemCount()
		})
	})

	counter >= getCountCheckbox()
		? (checkedAllCheckboxes.checked = true)
		: (checkedAllCheckboxes.checked = false)

	checkedConfirm.addEventListener('click', () => {
		confirmOrder()
	})
}
