var person = ["Lebron James", "James Harden", "Steph Curry", "Chris Paul"];
var salaries = [130, 100, 100, 100];
window.onload = function() {
    document.getElementById('display-Salary').onclick = displaySalary;
    document.getElementById('display-Results').onclick = displayResults;
    document.getElementById('add-Salary').onclick = addSalary;
}
function displayResults() {
    let avr = .0;
    let max = .0;
    for (var i = 0; i < salaries.length; i++) {
        avr += salaries[i];
    }
    max = Math.max(salaries);
    avg = avg/salaries.length;
    document.getElementById('dResults').innerHTML =  "Highest Salary: $" + max + "Average: $" + avg;
}
function displaySalary() {
   /* for (var i = 0; i < salaries.length; i++) {
        document.getElementById('results_table_body_row' + i).innerHTML = "Name: " + person[i];
        document.getElementById('results_table_body_nrow' + i).innerHTML = "Salary: " + salaries[i];
    } */
    document.getElementById('results_table_body_row1').innerHTML = "Name: " + person[0];
    document.getElementById('results_table_body_nrow1').innerHTML = "Salary: " + salaries[0];
    document.getElementById('results_table_body_row2').innerHTML = "Name: " + person[1];
    document.getElementById('results_table_body_nrow2').innerHTML = "Salary: " + salaries[1];
    document.getElementById('results_table_body_row3').innerHTML = "Name: " + person[2];
    document.getElementById('results_table_body_nrow3').innerHTML = "Salary: " + salaries[2];
    document.getElementById('results_table_body_row4').innerHTML = "Name: " + person[3];
    document.getElementById('results_table_body_nrow4').innerHTML = "Salary: " + salaries[3];
    return true;
}
function addSalary() {
    var name = prompt('Give me a name to add to the table');
    var salary = prompt('What is their salary?');
    person.push(validateEntry_name(name));
    salary = validateEntry_salary(salary);
    if (typeof salary !== 'string' || typeof person !== 'number') {
        return alert('invalid input');
    }
    else {
        if (person.length === 5) {
            document.getElementById('results_table_body_row5').innerHTML = "Name: " + person[4];
            document.getElementById('results_table_body_nrow5').innerHTML = "Salary: " + salaries[4];
        }
        if (person.length === 6) {
            document.getElementById('results_table_body_row6').innerHTML = "Name: " + person[5];
            document.getElementById('results_table_body_nrow6').innerHTML = "Salary: " + salaries[5];
        }
        if (person.length === 7) {
            document.getElementById('results_table_body_row7').innerHTML = "Name: " + person[6];
            document.getElementById('results_table_body_nrow7').innerHTML = "Salary: " + salaries[6];
        }
        if (person.length === 8) {
            document.getElementById('results_table_body_row8').innerHTML = "Name: " + person[7];
            document.getElementById('results_table_body_nrow8').innerHTML = "Salary: " + salaries[7];
        }
        else {
            alert('list is full');
        }
    }

    return true;
}
function validateEntry_salary(a) {
    a = a.parseFloat;
    return a;
}
function validateEntry_name(a) {
    return a;
}
