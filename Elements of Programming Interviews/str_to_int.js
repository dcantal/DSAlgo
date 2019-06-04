function strToInt(str) {
    let result = (str[0] === "-" ? -1 : 1) *
        str.substring(str[0] === "-" ? 1 : 0).split("").reduce((sum, c) => sum * 10 + parseInt(c));
    return result;
}

// console.log(strToInt('-43314'));

function intToStr(num) {
    let str = "";
    let neg = false;
    if (num < 0) {
        neg = true;
        num *= -1;
    } 
    while (num !== 0) {
        str += num % 10;
        num = Math.trunc(num / 10);
    }
    if (neg) str += "-";
    return str.split("").reverse().join("");
}

console.log(intToStr(-312354));