import {render} from "./render.js"
import {comments} from "./inputData.js"
import {processedInput} from "./inputProcessing.js";
import {delay} from "./delay.js"
import {toggleLike} from "./requests.js";
import {catchAlert} from "./catchAlert.js";

/**
 * Обработчик клика на лайк
 */
export const initLikeAction = () => {
    const likesEl = document
        .querySelectorAll('.like-button')

    likesEl.forEach(like => {
        like.addEventListener('click', (event) => {
            event.stopPropagation()

            const comment = comments[like.dataset.index]

            if (comment.isLikeLoading) {
                return;
            }

            comment.isLikeLoading = true
            like.classList.add('-loading-like')

            toggleLike(comment.id)
                .then(result => {
                    comment.likes = result.result.likes
                    comment.isLiked = result.result.isLiked
                    //comments[like.dataset.index] = comment
                })
                .then(()=> delay(1000))
                .catch(err => {
                   catchAlert(err)
                })
                .finally(() => {
                    render()
                    comment.isLikeLoading = false;
                })
        })
    })
}

/**
 * Обработчик клика на комментарий
 */
export const initCommentAction = () => {
    const liEl = document.querySelectorAll('.comment')
    const addTextEl = document.getElementById('add-text')

    liEl.forEach(li => {
        li.addEventListener('click', () => {
            const comment = comments[li.dataset.index]

            addTextEl.value = `> В ответ ${comment.author.name}
          '${processedInput(comment.text)}'
          `

            addTextEl.scrollIntoView()
            addTextEl.focus()
        })
    })
}