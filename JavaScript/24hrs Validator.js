function validateTime(time) {
    let regex = /^([0-1]?\d|2[0-3]):[0-5]\d$/
    let res = regex.test(time)
    return res
}