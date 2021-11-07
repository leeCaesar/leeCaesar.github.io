var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000, 2500, 1500, 4000, 2200, 1200, 4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers
    document.getElementById('Submit').onsubmit = displayUser;
    function displayUser() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        document.getElementById('user-cal').innerHTML = name + ', your email:' + email + ' has been registered!';
    }
    document.getElementById('update').onclick = updateCalorie;
    function updateCalorie() {
        var UserCalorie = document.getElementById('calorie').value;
        var day = [document.getElementByName('M'), document.getElementByName('T'), document.getElementByName('W'), document.getElementByName('Th'), document.getElementByName('F'), document.getElementByName('S'), document.getElementByName('Su')];
       /* var Tuesday = document.getElementById('T').checked
        var Wednesday = document.getElementById('W').checked
        var Thursday = document.getElementById('Th').checked
        var Friday = document.getElementById('F').checked
        var Saturday = document.getElementById('S').checked
        var Sunday = document.getElementById('Su').checked  */
        if (UserCalorie == 0) {
            alert('Enter a valid number');
        }
        if (day[0] == true) {
            calories[0] = UserCalorie;
            alert("Your updated Calorie details are: " + calories);
        }
        
        calories[1] = UserCalorie;
        calories[2] = UserCalorie;
        calories[3] = UserCalorie;
        calories[4] = UserCalorie;
        calories[5] = UserCalorie;
        calories[6] = UserCalorie;

      /*  if (Tuesday.checked == true) {
            calories[1] = UserCalorie;
            alert("Your updated Calorie details are: " + calories);
        }
        if (Wednesday.checked == true) {
            calories[2] = UserCalorie;
            alert("Your updated Calorie details are: " + calories);
        }
        if (Thursday.checked == true) {
            calories[3] = UserCalorie;
            alert("Your updated Calorie details are: " + calories);
        }
        if (Friday.checked == true) {
            calories[4] = UserCalorie;
            alert("Your updated Calorie details are: " + calories);
        }
        if (Saturday.checked == true) {
            calories[5] = UserCalorie;
            alert("Your updated Calorie details are: " + calories);
        }if (Sunday.checked == true) {
            calories[6] = UserCalorie;
            alert("Your updated Calorie details are: " + calories);
        }
        else {
            alert("Enter a valid Number");
            document.getElementById('M').checked = false;
            document.getElementById('T').checked = false;
            document.getElementById('W').checked = false;
            document.getElementById('Th').checked = false;
            document.getElementById('F').checked = false;
            document.getElementById('S').checked = false;
            document.getElementById('Su').checked = false;
        } */
       // alert("Your updated Calorie details are: " + calorie);
    }
    document.getElementsById('avg').onmouseover = showAverageCalories;
    function showAverageCalories() {
        var avg = 0;
        for (var i=0;i<calories.length;i++) {
            avg += calories[i];
        }
        avg = avg / calories.length;
        document.getElementsById('avg').addClass('#new-class');
        document.getElementsById('avg').value = avg;
    }
    document.getElementsById('show_max').onmouseover = showMax;
    function showMax() {
        var max = calories[0];
        for(var i=0;i<calories.length-1;i++) {
            if(max > calories[i])
                max =calories[i];
        }
        document.getElementsById('showMax').innerHTML = "Your maximum consumed calorie is" + calories[max] + " on" + days[max];
    }
};
