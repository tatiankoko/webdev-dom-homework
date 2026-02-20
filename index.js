import {initSendForm} from "./modules/initSendForm.js"
import {getComments} from "./modules/requests.js"
import {renderComments} from "./modules/render.js";
import {catchAlert} from "./modules/catchAlert.js";

/* Получение списка всех комментариев */
getComments()
    .then(comments => {
        renderComments(comments.comments)
    })
    .catch(err => {
        catchAlert(err)
    })

/* Обработка формы отправки */
initSendForm()
