const endpoint = "https://wedev-api.sky.pro/api/v1/tatiankoko/comments";

export const postComment = (comment)=> {
    return fetch(
        endpoint,
        {
            method: "POST",
            body: JSON.stringify(comment)
        })
}

export const getComments = ()=> {
    return fetch(endpoint)
}