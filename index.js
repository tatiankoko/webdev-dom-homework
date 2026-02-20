import {initSendForm} from "./modules/initSendForm.js"
import {getComments} from "./modules/requests.js"
import {renderComments} from "./modules/render.js";
import {catchAlert} from "./modules/catchAlert.js";
import {throwError} from "./modules/throwError.js";

/* Получение списка всех комментариев */
getComments()
    .then(res => {
        if (res.status === 200) {
            return res.json()
        } else {
            throwError(res.status)
        }
    })
    .then(comments => {
        renderComments(comments.comments)
    })
    .catch(err => {
        catchAlert(err)
    })

/* Обработка формы отправки */
initSendForm()
