/**
 * @returns {`${string} ${string}`} возвращает текущую дату и время в требуемом строковом формате
 */
export const dateString = (date) => {
    const dateString = new Date(date)
        .toLocaleDateString(
            'ru-RU',
            {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            })

    const timeString = new Date(date)
        .toLocaleTimeString(
            'ru-RU',
            {
                hour: '2-digit',
                minute: '2-digit'
            })

    return `${dateString} ${timeString}`
}