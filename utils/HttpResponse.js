module.exports = (isError, code, text, data, ...more) => {
    return {
        isError,
        code,
        text,
        data,
        ...more
    }
}