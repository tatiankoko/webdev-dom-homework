/**
 * Выбрасывает исключение в зависимости от кода ошибки
 * @param status код ответа от сервера
 */
export const throwError = (status) => {
    if (status === 500) {
        throw new Error('Сервер сломался, попробуй позже')
    } else if (status === 400) {
        throw new Error(
            'Имя и комментарий должны быть не короче 3 символов')
    }

    throw new Error('На сервере что-то пошло не так')
}