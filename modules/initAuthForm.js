import {highlightError} from "./highlightError.js"
import {login, updateToken, updateUserName} from "./requests.js"

const loginInputEl = document.getElementById('login-input')
const passwordInputEl = document.getElementById('password-input')
const errEL = document.getElementById('login-error')

/**
 * Обработка формы авторизации
 */
export const initAuthForm = () => {
    loginInputEl.value = ""
    passwordInputEl.value = ""

    loginInputEl.addEventListener('focus', () => {
        loginInputEl.classList.remove('error')
        errEL.textContent = ''
    })

    passwordInputEl.addEventListener('focus', () => {
        passwordInputEl.classList.remove('error')
        errEL.textContent = ''
    })

    const loginButtonEl = document
        .getElementById('login-button')

    loginButtonEl.addEventListener('click', () => {
        errEL.textContent = ''

        if (loginInputEl.value.trim() === "") {
            highlightError(loginInputEl)
        } else if (passwordInputEl.value.trim() === "") {
            highlightError(passwordInputEl)
        } else {
            loginButtonEl.disabled = true
            sendLoginForm()
            loginButtonEl.disabled = false
        }
    })

    const authToggleEl = document.getElementById('auth-toggle')

    authToggleEl.addEventListener('click', () => {
        window.location = './registration.html'
    })
}

/**
 * Отправка заполненной формы авторизации
 */
const sendLoginForm = () => {
    login(loginInputEl.value, passwordInputEl.value)
        .then(() => {
            window.location = './index.html'
        })
        .catch(err => {
            updateUserName('')
            updateToken('')

            errEL.textContent = err.message
        })
}