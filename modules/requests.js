import {updateComments} from "./inputData.js"
import {render} from "./render.js"

export const postComment = (comment)=> {
    fetch(
        "https://wedev-api.sky.pro/api/v1/tatiankoko/comments",
        {
            method: "POST",
            body: JSON.stringify(comment)
        })
        .then(r => r.json())
}

export const getComments = ()=> {
    fetch("https://wedev-api.sky.pro/api/v1/tatiankoko/comments")
        .then(res => res.json())
        .then(comments => {
            updateComments(comments.comments)

            /* Инициализация разметки при загрузке страницы */
            render()
        });
}