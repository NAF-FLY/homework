const initialCards = [
	{
		id: 1,
		title: 'Футболка UZcotton мужская',
		img: '../assets/images/t-shirt.jpg',
		color: 'Цвет: белый',
		size: 'Размер: 56',
		storage: 'Коледино WB',
		company: 'ООО Вайлдберриз',
		value: 1,
		stock: 3,
		price: 522,
		priceNoDiscount: 1051,
		isChecked: true,
	},
	{
		id: 2,
		title:
			'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
		img: '../assets/images/smartphone.jpg',
		color: 'Цвет: прозрачный',
		storage: 'Коледино WB',
		company: 'OOO Мегапрофстиль',
		value: 200,
		price: 10500,
		priceNoDiscount: 11500,
		isChecked: false,
	},
	{
		id: 3,
		title:
			'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
		img: '../assets/images/book.jpg',
		storage: 'Коледино WB',
		company: 'ООО Вайлдберриз',
		value: 2,
		stock: 2,
		price: 247,
		priceNoDiscount: 475,
		isChecked: true,
	},
]

const totalSum = (cardPrice, cardPriceNoDiscount, item) => {
	let b = 0
	// cardPrice.forEach(el => arrayPriceNoDiscoun.push(el.textContent))
	// cardPrice.forEach(el => console.log(el.textContent))

	// console.log(arrayPriceNoDiscoun)
	// for (let i = 0; i < cardPrice.length / 2; i++) {
	// 	cardPrice[i].textContent.replace(/\s/g, '')
	// 	b += a
	// 	console.log(b)
	// 	// totalSum1.textContent += parseInt(
	// 	// 	cardPrice[i].textContent.r + item.priceeplace(/\s/g, ''))
	// 	// )
	// }
	// for (let i = 0; i < )
	// initialCards.map(el => console.log(el.price))
	// cardPrice.forEach(el =>
	// 	console.log((a += parseInt(el.textContent.replace(/\s/g, ''))))
	// )
	// console.log(a)
}

const amountOfPrice = (...props) => {
	const [cardValue, cardPrice, cardPriceNoDiscount, item] = props
	cardPrice.forEach(
		price => (price.textContent = prettify(item.price * cardValue.value))
	)
}

const manageBtnValue = (...props) => {
	const [
		cardBtnMinus,
		cardBtnPlus,
		cardValue,
		cardStock,
		cardPrice,
		cardPriceNoDiscount,
		item,
	] = props

	if (cardValue.value <= 1) {
		cardBtnMinus.style.opacity = 0.2
	} else if (
		cardValue.value == cardStock.textContent &&
		cardStock.textContent
	) {
		cardBtnPlus.style.opacity = 0.2
		cardBtnMinus.style.opacity = 1
	}

	cardBtnMinus.addEventListener('click', () => {
		cardValue.value--
		if (cardValue.value <= 1) {
			cardValue.value = 1
			cardBtnMinus.style.opacity = 0.2
			cardBtnPlus.style.opacity = 1
		} else {
			cardBtnPlus.style.opacity = 1
			cardBtnMinus.style.opacity = 1
		}
		amountOfPrice(cardValue, cardPrice, cardPriceNoDiscount, item)
	})

	cardBtnPlus.addEventListener('click', () => {
		cardValue.value++
		if (cardValue.value > cardStock.textContent && cardStock.textContent) {
			cardValue.value = parseInt(cardStock.textContent)
		}
		if (cardValue.value == cardStock.textContent && cardStock.textContent) {
			cardBtnMinus.style.opacity = 1
			cardBtnPlus.style.opacity = 0.2
		} else {
			cardBtnPlus.style.opacity = 1
			cardBtnMinus.style.opacity = 1
		}
		amountOfPrice(cardValue, cardPrice, cardPriceNoDiscount, item)
	})
}

// Создаем переменную и находим шаблон карточки и получаем контент
const cardTemplate = document.querySelector('.card-template').content

// Место куда мы будем засовывать наши карточки
const cardsList = document.querySelectorAll('.list-items__main.content')

// Функция добавления карточки
const createCards = item => {
	let arrayPriceNoDiscoun = []
	const cloneCards = cardTemplate.cloneNode(true)
	const cardTitle = cloneCards.querySelector('.info__title'),
		cardImage = cloneCards.querySelector('.item__img'),
		cardPrice = cloneCards.querySelectorAll('.price'),
		cardPriceNoDiscount = cloneCards.querySelectorAll('.price__no-discount'),
		cardColor = cloneCards.querySelector('.params-color'),
		cardSize = cloneCards.querySelector('.params-size'),
		cardCompany = cloneCards.querySelectorAll('.info__extra.company'),
		cardValue = cloneCards.querySelector('.input-quantity'),
		cardCheckbox = cloneCards.querySelector('.checkbox'),
		cardLabelCheckbox = cloneCards.querySelector('.checkbox-label'),
		cardBtnMinus = cloneCards.querySelector('.btn-minus'),
		cardBtnPlus = cloneCards.querySelector('.btn-plus'),
		cardStock = cloneCards.querySelector('.stock-item'),
		cardStockWarning = cloneCards.querySelector('.form__warning')

	cardTitle.textContent = item.title
	cardImage.src = item.img
	// cardPrice.forEach(price => console.log((price.textContent = item.price)))
	cardPriceNoDiscount.forEach(
		price => (price.textContent = item.priceNoDiscount)
	)
	cardColor.textContent = item.color
	cardSize.textContent = item.size
	cardCompany[0].textContent = item.company
	cardValue.value = item.value
	cardValue.id = item.id
	cardCheckbox.id = item.id
	cardCheckbox.checked = item.isChecked
	cardLabelCheckbox.htmlFor = item.id
	cardStock.textContent = item.stock

	cardPrice.forEach(el => arrayPriceNoDiscoun.push(el.textContent))
	cardPrice.forEach(el => console.log(el.textContent))

	console.log(arrayPriceNoDiscoun)

	if (!item.stock) {
		cardStockWarning.style.display = 'none'
	}

	manageBtnValue(
		cardBtnMinus,
		cardBtnPlus,
		cardValue,
		cardStock,
		cardPrice,
		cardPriceNoDiscount,
		item
	)

	amountOfPrice(cardValue, cardPrice, cardPriceNoDiscount, item)
	totalSum(cardPrice, cardPriceNoDiscount, item)

	return cloneCards
}

// Добавление массива и новых карточек на страницу
const addCadrs = item => {
	cardsList[0].append(createCards(item))
}
initialCards.forEach(item => {
	addCadrs(item)
})
