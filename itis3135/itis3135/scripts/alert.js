var myName, status;
myName = prompt("What is your name?");
status = prompt("How are you doing");
const d  = new Date();
alert("Todays date, and time is: " + d + "\nThe Limber Remote Chameleon Inc. Welcomes you, " + myName + "! \nWe're glad you are doing " + status);
function salestax(a) {
    var tax = .05;
    var totaltax = a * tax;
    alert(a + totaltax);
}
function sum(a) {
    var tax = .05;
    var totaltax = a * tax;
    alert(a + totaltax);
}
function RNG() {
    alert(Math.random());
}
function lowerSalesTax(a) {
    var tax = Math.random();
    var totaltax = a * tax;
    alert(a * totaltax);
}
function s(a) {
    alert(a);
}