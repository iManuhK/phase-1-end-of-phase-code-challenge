function printgrades(marks) {
    if (marks >=0 && marks < 40) {
    console.log("E")
  }
  if (marks >=40 && marks <49) {
        console.log("D")
  }
  if (marks >=50 && marks <=59) {
        console.log("C")
  }
  if (marks >=60 && marks <=79) {
        console.log("B")
  }
  if (marks >79 && marks <=100) {
            console.log("A")
  }
  if (marks <0 || marks > 100) {
  console.log("Number out of range!!")
  }
  }
  printgrades(-1)