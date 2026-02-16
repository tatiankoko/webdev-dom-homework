/**
 * Замена критичных символов
 * @param inputString текст ввода
 * @returns {string} текст ввода с измененными символами
 */
export const processedInput = (inputString) => {
    return inputString
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
}
