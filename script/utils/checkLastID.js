export const checkLastID = (data) => data.reduce((acc, el) => {
    if ((1*el.id) >= acc) return acc = (1*el.id) + 1
}, 0);
