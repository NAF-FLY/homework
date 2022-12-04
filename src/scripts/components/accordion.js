import { checkedCart, nplural } from './utils.js'

const btnShowCart = document.querySelector('.list-items__checkbox-all'),
	btnShowMissing = document.querySelector('.list-items__checkbox-all-missing'),
	accordionCart = document.querySelector('.contentBx'),
	accordionMissing = document.querySelector('.contentBx-missing'),
	labelCheckboxAll = document.querySelector('.checkbox-label')

btnShowCart.addEventListener('click', () => {
	accordionCart.classList.toggle('active')
	if (!accordionCart.classList.contains('active')) {
		labelCheckboxAll.textContent = `${checkedCart()[0]} ${nplural(
			checkedCart()[0]
		)} · ${checkedCart()[1]} сом`
		labelCheckboxAll.style.fontWeight = '600'
		labelCheckboxAll.classList.add('hide')
	} else {
		labelCheckboxAll.textContent = 'Выбрать все'
		labelCheckboxAll.style.fontWeight = '400'
		labelCheckboxAll.classList.remove('hide')
	}
})

btnShowMissing.addEventListener('click', () => {
	accordionMissing.classList.toggle('active')
})
