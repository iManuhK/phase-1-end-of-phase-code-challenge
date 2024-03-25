//function declaration for print grades function
function printGrades(marks) {
//introduce conditional statement to check for marks between 0 and 100
    if (marks >=0 && marks < 40)  {
        console.log ("E")
        return "E"
        }
    if (marks >=40 && marks <49)  {
        console.log ("D")
        return "D"
        }
    if (marks >=50 && marks <=59) {
        console.log ("C")
        return "C"
        }
    if (marks >=60 && marks <=79) {
        console.log ("B")
        return "B"
        }
    if (marks >79 && marks <=100) {
        console.log ("A")
        return "A"
        }
//Last statement to catch anything outside of 0 - 100 marks
    if (marks <0 || marks > 100)  {
        console.log ("Number out of range!!")
        return "Number out of range!!"
        }
}
// function call with marks argument
printGrades(-1)