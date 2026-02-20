import {highlightError} from "./highlightError.js"
import {login, updateToken, updateUserName} from "./requests.js"
import {catchAlert} from "./catchAlert.js";

const loginInputEl = document.getElementById('login-input')
const passwordInputEl = document.getElementById('password-input')

/**
 * Обработка формы авторизации
 */
export const initAuthForm = () => {
    loginInputEl.value = ""
    passwordInputEl.value = ""

    loginInputEl.addEventListener('focus', () => {
        loginInputEl.classList.remove('error')
    })

    passwordInputEl.addEventListener('focus', () => {
        passwordInputEl.classList.remove('error')
    })

    const loginButtonEl = document
        .getElementById('login-button')

    loginButtonEl.addEventListener('click', () => {
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

            catchAlert(err)
        })
}