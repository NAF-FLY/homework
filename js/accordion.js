/* Accrordion */
btnShowCart.addEventListener('click', () => {
	accordionCart.classList.toggle('active')
	if (!accordionCart.classList.contains('active')) {
		labelCheckboxAll.textContent = `${valueAllProduct} ${nplural(
			valueAllProduct
		)} · ${sumAllProduct} сом`
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
