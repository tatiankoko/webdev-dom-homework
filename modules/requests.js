const endpoint = 'https://wedev-api.sky.pro/api/v2/tatiankoko';
const authEndpoint = 'https://wedev-api.sky.pro/api/user';

export const errMessage500 = 'Сервер сломался, попробуй позже'
export const errMessageCommon = 'Что-то пошло не так'

const getToken = () => {
    const token = localStorage.getItem('commentsToken');
    return token !== null ? token : '';
}

export const updateToken = newToken => {
    localStorage.setItem('commentsToken', newToken)
}

export const getUserName = () => {
    const username = localStorage.getItem('commentsUsername');
    return username !== null ? username : ''
}

export const updateUserName = (newName) => {
    localStorage.setItem('commentsUsername', newName);
}

export const postComment = (comment)=> {
    return fetch(
        `${endpoint}/comments`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${getToken()}`
            },
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
    return fetch(
        `${endpoint}/comments`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
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

export const deleteComment = (id)=> {
    return fetch(
        `${endpoint}/comments/${id}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        .then(response => {
            if (response.status === 201) {
                return response.json()
            } else if (response.status === 500) {
                throw new Error(errMessage500)
            } else {
                throw new Error(errMessageCommon)
            }
        })
}

export const login = (login, password)=> {
    return fetch(
        `${authEndpoint}/login`,
        {
            method: "POST",
            body: JSON.stringify({
                login: login,
                password: password
            })
        })
        .then(response => {
            if (response.status === 201) {
                return response.json()
            } else if (response.status === 500) {
                throw new Error(errMessage500)
            } else if (response.status === 400) {
                throw new Error(
                    'Был передан неправильный логин или пароль')
            } else {
                throw new Error(errMessageCommon)
            }
        })
        .then(user => {
            updateToken(user.user.token)
            updateUserName(user.user.name)
        })
}

export const registration = (login, name, password)=> {
    return fetch(
        `${authEndpoint}/login`,
        {
            method: "POST",
            body: JSON.stringify({
                login: login,
                name: name,
                password: password
            })
        })
        .then(response => {
            if (response.status === 201) {
                return response.json()
            } else if (response.status === 500) {
                throw new Error(errMessage500)
            } else if (response.status === 400) {
                throw new Error(
                    'Пользователь с таким логином уже существует')
            } else {
                throw new Error(errMessageCommon)
            }
        })
        .then(user => {
            updateToken(user.user.token)
            updateUserName(user.user.name)
        })
}