import { renderAddress, renderCard } from './render.js'
import { clearTabs } from './utils.js'

export const Address = {
	delivery: [
		{ id: 1, address: 'г. Бишкек, улица Ахматбека Суюмбаева, 12/1' },
		{ id: 2, address: 'г. Бишкек, улица Жукеева-Пудовкина, 77/1' },
		{
			id: 3,
			address: 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
		},
	],
	points: [
		{
			id: 1,
			address: 'г. Бишкек, улица Жукеева-Пудовкина, 75/3',
			rating: 4.99,
		},
		{
			id: 2,
			address: 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
			rating: 4.92,
		},
		{ id: 3, address: 'г. Бишкек, улица Табышалиева, д. 57', rating: 4.95 },
	],
}

export const Card = [
	{
		id: 'mir',
		imgCard: 'src/assets/images/icons/mir.svg',
		cardNumber: '1234 12•• •••• 1234',
		date: '01/30',
	},
	{
		id: 'visa',
		imgCard: 'src/assets/images/icons/visa.svg',
		cardNumber: '4960 14•• •••• 5769',
		date: '02/29',
	},
	{
		id: 'mastercard',
		imgCard: 'src/assets/images/icons/mastercard.svg',
		cardNumber: '5488 42•• •••• 2650',
		date: '05/29',
	},
	{
		id: 'maestro',
		imgCard: 'src/assets/images/icons/maestro.svg',
		cardNumber: '6711 22•• •••• 1805',
		date: '01/29',
	},
]

window.addEventListener('load', () => {
	renderAddress()
	renderCard()

	switchTab()
	deleteAddress()
	openPopup()
	closePopup()
	selectedAddressOrCard()
})

const switchTab = () => {
	const tabs = document.querySelectorAll('.choose-btn')

	tabs.forEach(tab =>
		tab.addEventListener('click', e => {
			clearTabs()
			e.target.classList.add('active')
			const tabContentId = e.target.getAttribute('for'),
				tabContent = document.getElementById(tabContentId)
			tabContent.style.display = 'flex'
		})
	)
}

const deleteAddress = () => {
	const deleteAddressBtn = document.querySelectorAll('.icon-delete__address')

	deleteAddressBtn.forEach(btn =>
		btn.addEventListener('click', e => {
			e.target.parentNode.parentElement.remove(e.target.parentNode)
		})
	)
}

const openPopup = () => {
	const openPopupBtn = document.querySelectorAll('.open-popup'),
		popupWrapper = document.querySelectorAll('.background-popup')

	for (let i = 0; i < openPopupBtn.length; i++) {
		if (i % 2 == 0) {
			openPopupBtn[i].addEventListener('click', () => {
				popupWrapper[0].classList.add('show')
			})
		} else {
			openPopupBtn[i].addEventListener('click', () => {
				popupWrapper[1].classList.add('show')
			})
		}
	}
}

const closePopup = () => {
	const closeBtn = document.querySelectorAll('.close-btn'),
		popupWrapper = document.querySelectorAll('.background-popup')
	const selectBtn = document.querySelectorAll('.popup__select-btn')

	for (let i = 0; i < closeBtn.length; i++) {
		closeBtn[i].addEventListener('click', () => {
			popupWrapper[i].classList.remove('show')
		})
	}

	for (let i = 0; i < selectBtn.length; i++) {
		selectBtn[i].addEventListener('click', () => {
			popupWrapper[i].classList.remove('show')
		})
	}
}

const selectedAddressOrCard = () => {
	const popupWrapper = document.querySelectorAll('.background-popup'),
		textAddress = document.querySelector('.second-text__address'),
		cartTextAddress = document.querySelector('.detail-info__subtext'),
		imgCard = document.querySelectorAll('.card-select__img'),
		cardNumber = document.querySelector('.choose-card'),
		dateCard = document.querySelectorAll('.choose-card.date'),
		cardNumber1 = document.querySelector('.card-number')

	popupWrapper.forEach(popup =>
		popup.addEventListener(
			'click',
			addEventListener('input', e => {
				if (e.target.name == 'card') {
					imgCard.forEach(
						card =>
							(card.src =
								e.target.nextElementSibling.getElementsByTagName('img')[0].src)
					)
					cardNumber.textContent = e.target.value.split('  ')[0]
					dateCard[0].textContent = e.target.value.split('  ')[1]
					cardNumber1.textContent = e.target.value
				} else if (
					e.target.name == 'address-point' ||
					e.target.name == 'address'
				) {
					textAddress.textContent = e.target.value
					cartTextAddress.textContent = e.target.value
				}
			})
		)
	)
}
