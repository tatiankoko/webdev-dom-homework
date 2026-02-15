import {highlightError} from "./highlightError.js";
import {currentDateString} from "./currentDateString.js";
import {comments} from "./inputData.js";
import {processedInput} from "./inputProcessing.js";
import {render} from "./render.js";

const addNameEl = document.getElementById('add-name');
const addTextEl = document.getElementById('add-text');

/**
 * Обработка формы отправки
 */
export const initSendForm = () => {
    addNameEl.addEventListener('focus', () => {
        addNameEl.classList.remove('error');
    })

    addTextEl.addEventListener('focus', () => {
        addTextEl.classList.remove('error');
    })

    const addButtonEl = document.getElementById('add-button');

    addButtonEl.addEventListener('click', () => {
        if (addNameEl.value.trim() === "") {
            highlightError(addNameEl);
        } else if (addTextEl.value.trim() === "") {
            highlightError(addTextEl);
        } else {
            sendForm();
        }
    })
}

/**
 * Отправка заполненной формы
 */
const sendForm = () => {
    const comment = {
        name: processedInput(addNameEl.value),
        date: currentDateString(),
        comment: processedInput(addTextEl.value),
        likes: 0,
        active: false
    };

    comments.push(comment);

    render();

    addTextEl.value = "";
    addNameEl.value = "";
}