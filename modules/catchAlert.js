/**
 * Проверка на ошибку, связанную с сетью
 * @param error ошибка из catch промиса
 */
export const catchAlert = (error)=> {
    alert(
        error instanceof TypeError
        ? 'Кажется, у вас сломался интернет, попробуйте позже'
        : error.message)
}