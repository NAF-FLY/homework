const form = document.getElementsByTagName('form')[0]
const orderBtn = document.querySelector('.order-btn')

const _email = document.getElementById('email'),
	emailError = document.querySelector('#email + span.form-filled__error'),
	_name = document.getElementById('name'),
	nameError = document.querySelector('#name + span.form-filled__error'),
	_surname = document.getElementById('surname'),
	surnameError = document.querySelector('#surname + span.form-filled__error'),
	_tel = document.querySelector('#tel'),
	telError = document.querySelector('#tel + span.form-filled__error'),
	_postCode = document.querySelector('#zip'),
	postCodeError = document.querySelector('#zip + span.form-filled__hint')

const regExp = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/)

orderBtn.addEventListener('click', validateForm)

function validateForm() {
	// /****  EMAIL VALIDATION ****/
	if (!_email.validity.valid) {
		// If the field is not valid, we display the corresponding error message
		showError()
	}
	/****  NAME VALIDATION ****/
	if (!_name.validity.valid) {
		showError()
	}
	/****  SURNAME VALIDATION ****/
	if (!_surname.validity.valid) {
		showError()
	}
	/****  PHONE NUMBER VALIDATION ****/
	if (!_tel.validity.valid) {
		showError()
	}
	/****  VALIDATION TARGET INPUT  ****/
	form.addEventListener('input', e => {
		let target = e.target
		if (target.validity.valid) {
			switch (target.id) {
				case 'name': {
					nameError.textContent = ''
					break
				}
				case 'surname': {
					surnameError.textContent = ''
					break
				}
				case 'email': {
					emailError.textContent = ''
					break
				}
				case 'tel': {
					if (regExp.test(target.value)) {
						telError.textContent = ''
					} else {
						showError()
					}
					break
				}
				case 'zip': {
					postCodeError.style.color = '#000'
					postCodeError.textContent = 'Для таможенного оформления'
					break
				}
			}
		} else {
			showError()
		}
	})
}

function showError() {
	/****  EMAIL VALIDATION ****/
	if (_email.validity.valueMissing) {
		// if input is empty
		emailError.textContent = 'Укажите электронную почту'
	} else if (_email.validity.typeMismatch) {
		// If the field contains an invalid format
		emailError.textContent = 'Проверьте адрес электронной почты'
	}
	// Setting the appropriate styling
	emailError.className = 'form-filled__error active'

	/****  NAME VALIDATION ****/
	if (_name.validity.valueMissing) {
		nameError.textContent = 'Укажите имя'
	} else if (!_name.validity.valid) {
		nameError.textContent = 'Некорректное имя'
	}
	nameError.className = 'form-filled__error active'

	/****  SURNAME VALIDATION ****/
	if (_surname.validity.valueMissing) {
		surnameError.textContent = 'Укажите фамилию'
	} else if (!_surname.validity.valid) {
		surnameError.textContent = 'Некорректная фамилия'
	}
	surnameError.className = 'form-filled__error active'

	/****  PHONE NUMBER VALIDATION ****/
	if (_tel.validity.valueMissing) {
		telError.textContent = 'Укажите номер телефона'
	} else if (!regExp.test(_tel.value)) {
		telError.textContent = 'Формат: +9 999 999 99 99'
	}
	telError.className = 'form-filled__error active'

	/****  POST CODE VALIDATION ****/
	if (!_postCode.validity.valid) {
		postCodeError.style.color = '#f55123'
		postCodeError.textContent = 'Формат: 1234567'
		postCodeError.className = 'form-filled__hint active'
	}
}

// Mask for phone number
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
			.substring(0, this.value.length)
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
