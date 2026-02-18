import {highlightError} from "./highlightError.js"
import {processedInput} from "./inputProcessing.js"
import {postComment, getComments} from "./requests.js"
import {updateComments} from "./inputData.js"
import {render} from "./render.js"

const addNameEl = document.getElementById('add-name')
const addTextEl = document.getElementById('add-text')

/**
 * Обработка формы отправки
 */
export const initSendForm = () => {
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
        name: processedInput(addNameEl.value)
    }

    postComment(comment)
        .then(() => getComments())
        .then(r => r.json())
        .then(comments => {
            updateComments(comments.comments)

            /* Инициализация разметки при загрузке страницы */
            render()

            addTextEl.value = ""
            addNameEl.value = ""
        })
}