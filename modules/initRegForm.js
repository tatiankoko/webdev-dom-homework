import {highlightError} from "./highlightError.js"
import {registration, updateToken, updateUserName} from "./requests.js"

const nameInputEl = document.getElementById('name-input')
const loginInputEl = document.getElementById('login-input')
const passwordInputEl = document.getElementById('password-input')
const errEL = document.getElementById('reg-error')

/**
 * Обработка формы авторизации
 */
export const initRegForm = () => {
    nameInputEl.value = ''
    loginInputEl.value = ''
    passwordInputEl.value = ''

    nameInputEl.addEventListener('focus', () => {
        nameInputEl.classList.remove('error')
        errEL.textContent = ''
    })

    loginInputEl.addEventListener('focus', () => {
        loginInputEl.classList.remove('error')
        errEL.textContent = ''
    })

    passwordInputEl.addEventListener('focus', () => {
        passwordInputEl.classList.remove('error')
        errEL.textContent = ''
    })

    const regButtonEl = document
        .getElementById('reg-button')

    regButtonEl.addEventListener('click', () => {
        if (nameInputEl.value.trim() === "") {
            highlightError(nameInputEl)
        } else if (loginInputEl.value.trim() === "") {
            highlightError(loginInputEl)
        } else if (passwordInputEl.value.trim() === "") {
            highlightError(passwordInputEl)
        } else {
            regButtonEl.disabled = true
            sendRegForm()
            regButtonEl.disabled = false
        }
    })

    const regToggleEl = document.getElementById('reg-toggle')

    regToggleEl.addEventListener('click', () => {
        window.location = './authorization.html'
    })
}

/**
 * Отправка заполненной формы авторизации
 */
const sendRegForm = () => {
    registration(loginInputEl.value, nameInputEl.value, passwordInputEl.value)
        .then(() => {
            window.location = './index.html'
        })
        .catch(err => {
            updateUserName('')
            updateToken('')

            errEL.textContent = err.message
        })
}