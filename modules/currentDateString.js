/**
 * @returns {`${string} ${string}`} возвращает текущую дату и время в требуемом строковом формате
 */
export const currentDateString = () => {
    const date = new Date().toLocaleDateString(
        'ru-RU',
        {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        });

    const time = new Date().toLocaleTimeString(
        'ru-RU',
        {
            hour: '2-digit',
            minute: '2-digit'
        });

    return `${date} ${time}`;
}