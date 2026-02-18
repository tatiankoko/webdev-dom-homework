import {highlightError} from "./highlightError.js"
import {processedInput} from "./inputProcessing.js"
import {postComment, getComments} from "./requests.js"
import {renderComments} from "./render.js"
import {addLoadingHtml} from "./loadingHtml.js";

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
        name: processedInput(addNameEl.value)
    }

    postComment(comment)
        .then(() => getComments())
        .then(r => r.json())
        .then(comments => {
            renderComments(comments.comments)

            addTextEl.value = ""
            addNameEl.value = ""

            hideForm(false)
        })
}

const hideForm = (hide) => {
    const addFormEl = document.getElementById('addForm')

    if (hide) {
        addFormEl.hidden = true;
        addFormEl.style.display = 'none';

        addLoadingHtml('Комментарий добавляется...')
    } else {
        addFormEl.style.display = 'flex';
    }
}