import {highlightError} from "./highlightError.js"
import {processedInput} from "./inputProcessing.js"
import {postComment, getComments, errMessage500, getUserName} from "./requests.js"
import {hideForm, render} from "./render.js"
import {updateComments} from "./inputData.js";
import {catchAlert} from "./catchAlert.js";

const addNameEl = document.getElementById('add-name')
const addTextEl = document.getElementById('add-text')

/**
 * Обработка формы отправки
 */
export const initSendForm = () => {
    addNameEl.value = getUserName()

    addNameEl.addEventListener('focus', () => {
        addNameEl.classList.remove('error')
    })

    addTextEl.addEventListener('focus', () => {
        addTextEl.classList.remove('error')
    })

    const addButtonEl = document
        .getElementById('add-button')

    addButtonEl.addEventListener('click', () => {
        if (addNameEl.value.trim() === "") {
            highlightError(addNameEl)
        } else if (addTextEl.value.trim() === "") {
            highlightError(addTextEl)
        } else {
            hideForm(true)

            sendForm()
        }
    })
}

/**
 * Отправка заполненной формы
 */
const sendForm = () => {
    const comment = {
        text: processedInput(addTextEl.value),
        name: processedInput(addNameEl.value),
        forceError: false //сервер через раз будет падать с 500 ошибкой
    }

    postComment(comment)
        .then(() => getComments())
        .then(comments => {
            updateComments(comments.comments)

            addTextEl.value = ""
            //addNameEl.value = ""
        })
        .catch(err => {
            /* повтор запроса к API, если придет ответ с кодом ошибки 500 */
            if (err.message === errMessage500) {
                sendForm()
            } else {
                catchAlert(err)
            }
        })
        .finally(() => {
            render()

            hideForm(false)
        })
}