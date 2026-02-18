import {initSendForm} from "./modules/initSendForm.js"
import {getComments} from "./modules/requests.js"
import {renderComments} from "./modules/render.js";

/* Получение списка всех комментариев */
getComments()
    .then(res => res.json())
    .then(comments => {
        renderComments(comments.comments)
    })

/* Обработка формы отправки */
initSendForm()
