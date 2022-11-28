// Существуют разные способы получить DOM-узел; здесь мы определяем саму форму и
// поле ввода email и элемент span, в который поместим сообщение об ошибке
const form = document.getElementsByTagName('form')[0]

const _email = document.getElementById('email'),
	emailError = document.querySelector('#email + span.form-filled__error'),
	_name = document.getElementById('name'),
	nameError = document.querySelector('#name + span.form-filled__error'),
	_surname = document.getElementById('surname'),
	surnameError = document.querySelector('#surname + span.form-filled__error'),
	_tel = (document = document.querySelector('#tel')),
	telError = document.querySelector('#tel + span.form-filled__error')

orderBtn.addEventListener('click', () => {
	// Если поле email валидно, позволяем форме отправляться

	if (!_email.validity.valid) {
		// Если поле email не валидно, отображаем соответствующее сообщение об ошибке
		showError()
		// Затем предотвращаем стандартное событие отправки формы
	}

	if (!_name.validity.valid) {
		// Если поле email не валидно, отображаем соответствующее сообщение об ошибке
		showError()
		// Затем предотвращаем стандартное событие отправки формы
	}

	if (!_surname.validity.valid) {
		// Если поле email не валидно, отображаем соответствующее сообщение об ошибке
		showError()
		// Затем предотвращаем стандартное событие отправки формы
	}

	if (!_tel.validity.valid) {
		// Если поле email не валидно, отображаем соответствующее сообщение об ошибке
		showError()
		// Затем предотвращаем стандартное событие отправки формы
	}

	_email.addEventListener('input', () => {
		// Каждый раз, когда пользователь что-то вводит,
		// мы проверяем, являются ли поля формы валидными

		if (_email.validity.valid) {
			// Если на момент валидации какое-то сообщение об ошибке уже отображается,
			// если поле валидно, удаляем сообщение
			emailError.textContent = '' // Сбросить содержимое сообщения
			emailError.className = 'error' // Сбросить визуальное состояние сообщения
		} else {
			// Если поле не валидно, показываем правильную ошибку
			showError()
		}
	})

	_name.addEventListener('input', () => {
		// Каждый раз, когда пользователь что-то вводит,
		// мы проверяем, являются ли поля формы валидными

		if (_name.validity.valid) {
			// Если на момент валидации какое-то сообщение об ошибке уже отображается,
			// если поле валидно, удаляем сообщение
			nameError.textContent = '' // Сбросить содержимое сообщения
			nameError.className = 'error' // Сбросить визуальное состояние сообщения
		} else {
			// Если поле не валидно, показываем правильную ошибку
			showError()
		}
	})

	_surname.addEventListener('input', () => {
		// Каждый раз, когда пользователь что-то вводит,
		// мы проверяем, являются ли поля формы валидными

		if (_surname.validity.valid) {
			// Если на момент валидации какое-то сообщение об ошибке уже отображается,
			// если поле валидно, удаляем сообщение
			surnameError.textContent = '' // Сбросить содержимое сообщения
			surnameError.className = 'error' // Сбросить визуальное состояние сообщения
		} else {
			// Если поле не валидно, показываем правильную ошибку
			showError()
		}
	})

	_tel.addEventListener('input', () => {
		// Каждый раз, когда пользователь что-то вводит,
		// мы проверяем, являются ли поля формы валидными

		if (_tel.validity.typeMismatch) {
			// Если на момент валидации какое-то сообщение об ошибке уже отображается,
			// если поле валидно, удаляем сообщение
			telError.textContent = '' // Сбросить содержимое сообщения
			telError.className = 'error' // Сбросить визуальное состояние сообщения
		} else {
			// Если поле не валидно, показываем правильную ошибку
			showError()
		}
	})
})

function showError() {
	if (_email.validity.valueMissing) {
		// if input is empty
		emailError.textContent = 'Укажите электронную почту'
	} else if (_email.validity.typeMismatch) {
		// Если поле содержит не email-адрес,
		// отображаем следующее сообщение об ошибке
		emailError.textContent = 'Проверьте адрес электронной почты'
	}
	// Задаём соответствующую стилизацию
	emailError.className = 'form-filled__error active'

	if (_name.validity.valueMissing) {
		// if input is empty
		nameError.textContent = 'Укажите имя'
	} else if (!_name.validity.valid) {
		// Если поле содержит не email-адрес,
		// отображаем следующее сообщение об ошибке
		nameError.textContent = 'Некорректное имя'
	}
	// Задаём соответствующую стилизацию
	nameError.className = 'form-filled__error active'

	if (_surname.validity.valueMissing) {
		// if input is empty
		surnameError.textContent = 'Укажите фамилию'
	} else if (!_surname.validity.valid) {
		// Если поле содержит не email-адрес,
		// отображаем следующее сообщение об ошибке
		surnameError.textContent = 'Некорректная фамилия'
	}
	// Задаём соответствующую стилизацию
	surnameError.className = 'form-filled__error active'

	if (_tel.validity.valueMissing) {
		// if input is empty
		telError.textContent = 'Укажите номер телефона'
	} else if (!_tel.validity.valid) {
		// Если поле содержит не email-адрес,
		// отображаем следующее сообщение об ошибке
		telError.textContent = 'Формат: +9 999 999 99 99'
	}
	// Задаём соответствующую стилизацию
	telError.className = 'form-filled__error active'
}

// mask for phone number
;[].forEach.call(document.querySelectorAll('#tel'), function (input) {
	let keyCode
	function mask(event) {
		event.keyCode && (keyCode = event.keyCode)
		let pos = this.selectionStart
		if (pos < 3) event.preventDefault()
		let matrix = '+7 (___) ___ __ __',
			i = 0,
			def = matrix.replace(/\D/g, ''),
			val = this.value.replace(/\D/g, ''),
			new_value = matrix.replace(/[_\d]/g, function (a) {
				return i < val.length ? val.charAt(i++) || def.charAt(i) : a
			})
		i = new_value.indexOf('_')
		if (i != -1) {
			i < 5 && (i = 3)
			new_value = new_value.slice(0, i)
		}
		var reg = matrix
			.substr(0, this.value.length)
			.replace(/_+/g, function (a) {
				return '\\d{1,' + a.length + '}'
			})
			.replace(/[+()]/g, '\\$&')
		reg = new RegExp('^' + reg + '$')
		if (
			!reg.test(this.value) ||
			this.value.length < 5 ||
			(keyCode > 47 && keyCode < 58)
		)
			this.value = new_value
		if (event.type == 'blur' && this.value.length < 5) this.value = ''
	}
	input.addEventListener('input', mask, false)
	input.addEventListener('focus', mask, false)
	input.addEventListener('blur', mask, false)
	input.addEventListener('keydown', mask, false)
})
