
let reg = /^(http:\/\/|https:\/\/|www.)(www.)?\w+\.\w{2,3}/g
let str = 'https://www.google.com'
console.log(reg.test(str));