export const range = (start, end) => {
    if (!end) {
        end = start
        start = 0
    }
    return [...new Array(end - start).fill(0).keys()]
}