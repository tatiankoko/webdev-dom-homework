export const processedInput = (inputString) => {
    return inputString.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}
