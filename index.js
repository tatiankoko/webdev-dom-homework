import { initSendForm } from "./modules/initSendForm.js"
import { getComments } from "./modules/requests.js"
import { updateComments } from "./modules/inputData.js";
import { render } from "./modules/render.js";

/* Получение списка всех комментариев */
getComments()
    .then(res => res.json())
    .then(comments => {
        updateComments(comments.comments)

        /* Инициализация разметки при загрузке страницы */
        render()
    })

/* Обработка формы отправки */
initSendForm()

