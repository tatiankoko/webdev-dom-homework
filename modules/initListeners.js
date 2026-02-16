import {render} from "./render.js";
import {comments} from "./inputData.js";

/**
 * Обработчик клика на лайк
 */
export const initLikeAction = () => {
    const likesEl = document.querySelectorAll('.like-button');

    likesEl.forEach(like => {
        like.addEventListener('click', (event) => {
            event.stopPropagation();

            const comment = comments[like.dataset.index];

            comment.active ? comment.likes-- : comment.likes++;
            comment.active = !comment.active;

            comments[like.dataset.index] = comment;

            render();
        })
    })
}

/**
 * Обработчик клика на комментарий
 */
export const initCommentAction = () => {
    const liEl = document.querySelectorAll('.comment');
    const addTextEl = document.getElementById('add-text');

    liEl.forEach(li => {
        li.addEventListener('click', () => {
            const comment = comments[li.dataset.index];

            addTextEl.value = `> В ответ ${comment.name}
          '${comment.comment
                .replaceAll("&lt;", "<")
                .replaceAll("&gt;", ">")}'
          `;

            addTextEl.scrollIntoView();
            addTextEl.focus();
        })
    })
}