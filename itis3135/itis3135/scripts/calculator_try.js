function showNum(a) {
    return a;
}
function add(a, b) {
    a = validateEntry(a);
    b = validateEntry(b);
    return a + b;
}
function multiply(a, b) {
    a = validateEntry(a);
    b = validateEntry(b);
    return a * b;
}
function subtract(a, b) {
    a = validateEntry(a);
    b = validateEntry(b);
    return a - b;
}
function divide(a, b) {
    a = validateEntry(a);
    b = validateEntry(b);
    return a / b;
}
function validateEntry(a) {
    a = a.parseFloat;
}
