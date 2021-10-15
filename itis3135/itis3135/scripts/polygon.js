var userNum;
//the initial display on the page
userNum = prompt("The Limber Chameleon can help you, to determine the type of polygon pick a number between 1 and 11");
userNum = parseInt(userNum);
userNum = Math.round(userNum);
userNum = Math.abs(userNum);
//The loop to make sure you inputed a proper number
while (userNum < 1 || userNum > 11) {
    userNum = prompt("The Limber Chameleon can help you, to determine the type of polygon pick a number between 1 and 11");
    userNum = parseInt(userNum);
    Math.round(userNum);
    Math.abs(userNum);
    break;
}
//The if else statements that do not use a function and display your shape
if (userNum === 1) {
    alert("You have a henagon!");
}
else if (userNum === 2) {
    alert("You have a digon!");
}
else if (userNum === 3) {
    alert("You have a trigon!");
}
else if (userNum === 4) {
    alert("You have a tetragon!");
}
else if (userNum === 5) {
    alert("You have a pentagon!");
}
else if (userNum === 6) {
    alert("You have a hexagon!");
}
else if (userNum === 7) {
    alert("You have a hentagon!");
}
else if (userNum === 8) {
    alert("You have a octagon!");
}
else if (userNum === 9) {
    alert("You have a enneagon!");
}
else if (userNum === 10) {
    alert("You have a decagon!");
}
else if (userNum === 11) {
    alert("You have a hendecagon!");
}
//The function to return the proper shape
function getShape(a) {
    //Uses the validate function to make sure an int is the input
    a = validateEntry(a);
    if (a === 1) {
        alert("You have a henagon!");
    }
    else if (a === 2) {
        alert("You have a digon!");
    }
    else if (a === 3) {
        alert("You have a trigon!");
    }
    else if (a === 4) {
        alert("You have a tetragon!");
    }
    else if (a === 5) {
        alert("You have a pentagon!");
    }
    else if (a === 6) {
        alert("You have a hexagon!");
    }
    else if (a === 7) {
        alert("You have a hentagon!");
    }
    else if (a === 8) {
        alert("You have a octagon!");
    }
    else if (a === 9) {
        alert("You have a enneagon!");
    }
    else if (a === 10) {
        alert("You have a decagon!");
    }
    else if (a === 11) {
        alert("You have a hendecagon!");
    }
    //The code above is to execute the code in part 1 with out a function
}
//The validate function that makes sure you gave an int value
function validateEntry(a) {
    a = parseInt(a);
    userNum = Math.round(userNum);
    userNum = Math.abs(userNum);
}