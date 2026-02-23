/**
 * Подсветка пустых форм ввода
 * @param element объект {@link HTMLElement}
 */
export const highlightError = (element) => {
    element.classList.add('error');
}

/**
 * Убирает подсветку пустых форм ввода
 * @param element объект {@link HTMLElement}
 */
export const removeHighlightError = (element) => {
    element.classList.remove('error');
}