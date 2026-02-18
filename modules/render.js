import { comments } from './inputData.js'
import { initLikeAction, initCommentAction } from './initListeners.js'
import { dateString } from "./currentDateString.js";

/**
 * Рендер-функция
 */
export const render = () => {
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
