/* Массив комментариев */
export let comments = [
    {
        id: 1,
        date: "2023-03-10T10:11:23.237Z",
        likes: 0,
        isLiked: false,
        text: "Это мой первый лайк",
        author: { name: "Глеб Фокин" }
    }
];

export const updateComments = (newComments) => {
    comments = newComments;
}
