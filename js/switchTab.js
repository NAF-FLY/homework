const tabContent1 = document.getElementById('points'),
	tabContent2 = document.getElementById('delivery-couriers')

const tabPoints = document.getElementById('choose-points-tab'),
	tabCourier = document.getElementById('choose-couriers-tab')

function clearTabs() {
	tabPoints.classList.remove('active')
	tabCourier.classList.remove('active')

	tabContent1.style.display = 'none'
	tabContent2.style.display = 'none'
}

function switchTab(tab) {
	clearTabs()
	tab.classList.add('active')
	const tabContentId = tab.getAttribute('for')
	const tabContent = document.getElementById(tabContentId)
	tabContent.style.display = 'flex'
}

for (let i = 0; i < deleteAddressBtn.length; i++) {
	deleteAddressBtn[i].addEventListener('click', e => {
		e.target.parentNode.parentElement.remove(e.target.parentNode)
	})
}
