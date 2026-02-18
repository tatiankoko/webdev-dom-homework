/**
 * Добавление в разметку сообщения о загрузке
 * @param message текст сообщения
 */
export const addLoadingHtml = (message)=> {
    const liEl = document.createElement('li')
    liEl.innerHTML = `
        <div class="comment-header">
           <div>${message}</div>
         </div>
    `

    const listEl = document
        .getElementById('listComments')

    listEl.appendChild(liEl);
}