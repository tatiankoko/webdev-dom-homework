import {render} from "./render.js"
import {comments} from "./inputData.js"
import {processedInput} from "./inputProcessing.js";

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

            comment.isLiked ? comment.likes-- : comment.likes++
            comment.isLiked = !comment.isLiked

            comments[like.dataset.index] = comment

            render()
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