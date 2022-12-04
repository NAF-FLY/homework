import { Address, Card } from './popup.js'
import { Cart } from './cart.js'
import { prettify } from './utils.js'

export const renderCart = () => {
	const itemList = Cart.map(cardItem => {
		return `
		<div class="list-items__item">
			<div class="item-card">
				<div class="item-card__wrapper-photo">
				<input type="checkbox" class="checkbox" id="${cardItem.id}" ${
			cardItem.checked ? 'checked' : ''
		}/>
					<label for="${cardItem.id}" class="checkbox-label"></label>
					<div class="item-card__photo">
						<img src=${cardItem.img} alt="${cardItem.title}" class="item__img" />
						${
							cardItem.detail[0].size != undefined
								? `<div class="item-card__size">${
										cardItem.detail[0].size.split(' ')[1]
								  }</div>`
								: `<div class="item-card__size" style='display: none'></div>`
						}		
					</div>
				</div>
				<div class="item-card__info">
					<div class="info-detail__price-mobile">
						<p class="price__discount"><span class="price-mob">${prettify(
							cardItem.newPrice * cardItem.value
						)}</span> сом</p>
						<div class="price__no-discount-wrapper">
							<p class="price__no-discount-mob">${prettify(
								cardItem.oldPrice * cardItem.value
							)}</p>
							<span>сом</span>
						</div>
					</div>
					<h3 class="info__title">${cardItem.title}</h3>
					${
						cardItem.detail[0].color != undefined ||
						(cardItem.detail[0].size != undefined &&
							cardItem.detail[0].size != 'Размер: 56/54/52...')
							? `<div class="info__params">
						${
							cardItem.detail[0].color != undefined
								? `<p class="params-color">${cardItem.detail[0].color}</p>`
								: `<p class="params-color" style='display: none'></p>`
						}
						${
							cardItem.detail[0].size != undefined &&
							cardItem.detail[0].size != 'Размер: 56/54/52...'
								? `<p class="params-size">${cardItem.detail[0].size}</p>`
								: `<p class="params-size" style='display: none'></p>`
						}
					</div>`
							: `<div class="info__params" style='display: none'></div>`
					}			
					<span class="info__extra">${cardItem.seller}</span>
					<div class="extra__wrapper">
						<span class="info__extra company">${cardItem.company}</span>
						<div class="hint-wrapper">
							<img
								src="src/assets/images/icons/info.svg"
								alt="info"
								class="hint-img"
							/>
							<div class="extra__hint">
								<div class="hint-text__wrapper">
									<p>ООО «${cardItem.company.split(' ')[1].toUpperCase()}»</p>
									<span>ОГРН: 5167746237148</span>
									<span
										>129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1,
										помещение 2, офис 34</span
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="info-detail__count">
				<div class="count__form">
					<div class="form__counter" data-id=${cardItem.id}>
						<input type="button" value="-" class="btn-minus" ${
							cardItem.value == 1 ? 'disabled' : ''
						}>
						<input
							type="number"
							id="${cardItem.id}"
							value=${cardItem.value}
							name="count"
							class="input-quantity"
							readonly
						/>
						<input type="button" value="+" class="btn-plus" ${
							cardItem.value == cardItem.stock ? 'disabled' : ''
						}/>
					</div>
					${
						cardItem.stock != undefined
							? `<p class="form__warning">
						Осталось <span class="stock-item">${cardItem.stock}</span> шт.
					</p>`
							: `<class="form__warning" style='display:none'>`
					}		
				</div>
				<div class="count__buttons" data-id=${cardItem.id}>
					<div class="icon-like"></div>
					<div class="icon-delete"></div>
				</div>
			</div>
			<div class="info-detail__price">
				<p class="price__discount">
					<span class="price">${prettify(cardItem.newPrice * cardItem.value)}</span>
					<span class="symbol">сом</span>
				</p>
				<div class="price__no-discount-wrapper">
					<p class="price__no-discount">${prettify(
						cardItem.oldPrice * cardItem.value
					)}</p>
					<span>сом</span>
					<div class="no-discount__hint">
						<div class="hint__col">
							<span>Скидка ${Math.round(
								((cardItem.oldPrice - cardItem.newPrice) / cardItem.oldPrice) *
									100
							)}%</span><span>Скидка покупателя 10%</span>
						</div>
						<div class="hint__col">
							<span>${cardItem.newPrice - cardItem.oldPrice} сом</span><span>-${Math.round(
			cardItem.oldPrice / 10
		)} сом</span>
						</div>
					</div>
				</div>
			</div>
		</div>`
	})
	const itemsWrapper = document.querySelectorAll('.list-items__main')
	itemsWrapper[0].innerHTML = itemList.join('')

	const itemEmptyList = Cart.map(cardItem => {
		return `
		<div class="list-items__item">
			<div class="item-card">
				<div class="item-card__wrapper-photo">
					<div class="item-card__photo gray-photo">
						<img src="${cardItem.img}" alt="${cardItem.title}" />
						${
							cardItem.detail[0].size != undefined
								? `<div class="item-card__size">${
										cardItem.detail[0].size.split(' ')[1]
								  }</div>`
								: `<div class="item-card__size" style='display: none'></div>`
						}	
					</div>
				</div>
				<div class="item-card__info gray-info">
					<h3 class="info__title">${cardItem.title}</h3>
					${
						cardItem.detail[0].color != undefined ||
						cardItem.detail[0].size != undefined
							? `<div class="info__params">
						${
							cardItem.detail[0].color != undefined
								? `<p class="params-color">${cardItem.detail[0].color}</p>`
								: `<p class="params-color" style='display: none'></p>`
						}
						${
							cardItem.detail[0].size != undefined &&
							cardItem.detail[0].size != 'Размер: 56/54/52...'
								? `<p class="params-size">${cardItem.detail[0].size}</p>`
								: `<p class="params-size" style='display: none'></p>`
						}
					</div>`
							: `<div class="info__params" style='display: none'></div>`
					}	
				</div>
			</div>
			<div class="item-card__info-detail">
				<div class="count__buttons">
					<div class="icon-like gray-icon"></div>
					<div class="icon-delete gray-icon"></div>
				</div>
			</div>
			<span class="info-detail__price"></span>
		</div>`
	})
	itemsWrapper[1].innerHTML = itemEmptyList.join('')
}

export const renderAddress = () => {
	const addressDeliveryList = Address.delivery
		.map(item => {
			return `
		<div class="address-wrapper__item">
			<div class="checkbox-wrapper">
			<input type="radio" id="address${item.id}" name="address" value="${item.address}">
			<label for="address${item.id}">
				${item.address}
			</label>
			</div>
			<button class="delete-button__img">
			<div class="icon-delete__address"></div>
			</button>
        </div>`
		})
		.join('')

	const addressDeliveryWrapper = document.querySelector('#delivery-couriers')
	addressDeliveryWrapper.insertAdjacentHTML('beforeend', addressDeliveryList)

	const addressPointList = Address.points
		.map(item => {
			return `
		<div class="address-wrapper__item">
			<div class="checkbox-wrapper">
				<input type="radio" id="address-point${item.id}" name="address-point" value="${item.address}">
				<label for="address-point${item.id}">
				${item.address}
				<div>
					<img src="src/assets/images/icons/star.svg" alt="rating">
					${item.rating}
					<span>Пункт выдачи</span>
				</div>
				</label>
			</div>
			<button class="delete-button__img">
				<div class="icon-delete__address"></div>
			</button>
		</div>`
		})
		.join('')

	const addressPointWrapper = document.querySelector('#points')
	addressPointWrapper.insertAdjacentHTML('beforeend', addressPointList)
}

export const renderCard = () => {
	const cardList = Card.map(card => {
		return `
		<div class="card-wrapper__item">
			<input type="radio" id="${card.id}" name="card" value="${card.cardNumber}  ${card.date}"/>
			<label for="${card.id}">
				<img src="${card.imgCard}" alt="${card.id}" />
				<p>${card.cardNumber} ${card.date}</p>
			</label>
		</div>`
	})

	const cardsWrapper = document.querySelector('.popup-select__card-wrapper')
	cardsWrapper.innerHTML = cardList.join('')
}
