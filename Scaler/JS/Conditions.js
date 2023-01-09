var myScore = 91

/* if else practice
if(myScore > 90) {
    console.log("Congratulations !")
}

else {
    console.log("We're Sorry !")
} */

// else if practice

// 90 - 100 - A
// 70 - 89 - B
// 50 - 69 - C
// lower than 50 - F

var studentScore = 49

if(studentScore > 90) {
    console.log("You have scored an \'A\' grade")
}

else if(studentScore >= 70 && studentScore <= 89) {
    console.log("You have scored a \'B\' grade")
}

else if(studentScore >= 50 && studentScore <= 69) {
    console.log("You have scored a \'C\' grade")
}

else {
    console.log("Sorry! You have failed the Exam.")
}