/**
 * @param interval количество миллисекунд
 * @returns {Promise<unknown>} возвращает промис, который выполнится через указанное количество миллисекунд
 */
export function delay(interval = 300) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, interval);
    });
}