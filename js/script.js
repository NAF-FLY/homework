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
