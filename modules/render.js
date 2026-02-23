import {comments, updateComments} from './inputData.js'
import {initLikeAction, initCommentAction} from './initListeners.js'
import {dateString} from "./currentDateString.js";
import {getUserName} from "./requests.js";
import {addLoadingHtml} from "./loadingHtml.js";

/**
 * Рендер-функция
 */
export const render = () => {
    const authorizationLinkEl = document.getElementById('authorization-link');

    if (getUserName() === '') {
        authorizationLinkEl.textContent = 'Чтобы добавить комментарий, авторизуйтесь'
        hideForm(true)
    } else {
        authorizationLinkEl.textContent = `Привет, ${getUserName()}`

        hideForm(false)
    }

    const listEl = document
        .getElementById('listComments')

    listEl.innerHTML = comments
        .map((comment, index) => {
            const likeClass = comment.isLiked ? '-active-like' : ''

            return `
          <li class="comment" data-index="${index}">
            <div class="comment-header">
              <div>${comment.author.name}</div>
              <div>${dateString(comment.date)}</div>
            </div>
            <div class="comment-body">
              <div class="comment-text">
                ${comment.text}
              </div>
            </div>
            <div class="comment-footer">
              <div class="likes">
                <span class="likes-counter">${comment.likes}</span>
                <button class="like-button ${likeClass}" data-index="${index}"></button>
              </div>
            </div>
          </li>`
        })
        .join('')

    /* Инициализация обработчиков */
    initLikeAction()
    initCommentAction()
}

/**
 * Обновление списка комментариев и вызов рендер-функции
 * @param comments новый список комментариев
 */
export const renderComments = (comments) => {
    updateComments(comments)

    /* Инициализация разметки при загрузке страницы */
    render()
}

/**
 * Скрыть / показать форму ввода нового комментария
 * @param hide если true, то скрывает форму и добавляет новый блок информации о процессе
 * добавления комментария; если false - возвращает отображение формы
 */
export const hideForm = (hide) => {
    const addFormEl = document.getElementById('add-form')

    if (hide) {
        addFormEl.hidden = true;
        addFormEl.style.display = 'none';

        addLoadingHtml('Комментарий добавляется...')
    } else {
        addFormEl.style.display = 'flex';
    }
}