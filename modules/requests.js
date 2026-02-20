const endpoint = 'https://wedev-api.sky.pro/api/v2/tatiankoko/comments';

export const errMessage500 = 'Сервер сломался, попробуй позже'
export const errMessageCommon = 'Что-то пошло не так'

export const postComment = (comment)=> {
    return fetch(
        endpoint,
        {
            method: "POST",
            body: JSON.stringify(comment)
        })
        .then(response => {
            if (response.status === 201) {
                return response.json()
            } else if (response.status === 500) {
                throw new Error(errMessage500)
            } else if (response.status === 400) {
                throw new Error(
                    'Имя и комментарий должны быть не короче 3 символов')
            } else {
                throw new Error(errMessageCommon)
            }
        })
}

export const getComments = ()=> {
    return fetch(endpoint)
        .then(response => {
            if (response.status === 200) {
                return response.json()
            } else if (response.status === 500) {
                throw new Error(errMessage500)
            } else {
                throw new Error(errMessageCommon)
            }
        })
}