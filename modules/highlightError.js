/**
 * Подсветка пустых форм ввода
 * @param element объект {@link HTMLElement}
 */
export const highlightError = (element) => {
    element.classList.add('error');
}