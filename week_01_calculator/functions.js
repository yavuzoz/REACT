// bu kisimda istedigimiz fonk yaziyoruz
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function divd(a, b) {
    return a / b;
}
module.exports = {
    add: add,
    sub: subtract,
    mul: mult,
    div: divd
};