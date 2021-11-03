var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000, 2500, 1500, 4000, 2200, 1200, 4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers
    document.getElementById('update').onclick = updateCalorie;
    function updateCalorie() {
        var UserCalorie = document.getElementById('calorie').value;
        var Monday = document.getElementsById('M');
        var Tuesday = document.getElementById('T')
        var Wednesday = document.getElementById('W')
        var Thursday = document.getElementById('Th')
        var Friday = document.getElementById('F')
        var Saturday = document.getElementById('S')
        var Sunday = document.getElementById('Su')
        if (Monday.checked == true) {
            calories[0] = UserCalorie;
            alert("Your updated Calorie details are: " + calories);
        }
        if (Tuesday.checked == true) {
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
        }
       // alert("Your updated Calorie details are: " + calorie);
    }
    document.getElementsById('avg').onclick = showAverageCalories;
    function showAverageCalories() {
        var avg = 0;
        for (var i=0;i<calories.length;i++) {
            avg += calories[i];
        }
        avg = avg / calories.length;
        document.getElementsById('avg').css('background-color', 'transparent');
        document.getElementsById('avg').css('color', 'green');
        document.getElementsById('avg').innerHTML = avg;
    }
    document.getElementsById('show_max').mouseOver = showMax;
    function showMax() {
        var max = calories[0];
        for(var i=0;i<calories.length-1;i++) {
            if(max > calories[i])
                max =calories[i];
        }
        document.getElementsById('showMax').innerHTML = "Your maximum consumed calorie is" + calories[max] + " on" + days[max];
    }
};
