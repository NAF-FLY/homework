const btnShow = document.querySelector('.list-items__checkbox-all'),
	accordion = document.querySelector('.contentBx')

btnShow.addEventListener('click', () => {
	accordion.classList.toggle('active')
})
