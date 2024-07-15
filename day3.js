// task1
const num = 10
if (num > 0) {
    console.log("The number is positive");
}
else if (num < 0) {
    console.log("The number is negative");
}
else {
    console.log("The number is zero");
}
//task2
age = 14
if (age >= 18) {
    console.log("the person is eligible to vote");
}
else {
    console.log("the person is not eligible to vote");

}
//  task3
a = 15;
b = 5;
c = 45;
if (a > b & a > c) {
    console.log("a is greatest")
}
else if (b > a & b > c) {
    console.log("b is greatest");
}
else if (c > a & c > b) {

    console.log("c is greatest");
}
// task4



switch (3) {
    case 0:
        day: "monday";
        break;
    case 1:
        day: "tuesday";
        break;
    case 2:
        day: "wednesday";
        break;
    case 3:
        day: "thursday";
        break;
    case 4:
        day: "friday";
        break;
    case 5:
        day: "saturday";
        break;
    case 6:
        day: "sunday";
        break;
    default:
        day: "none";
}

// task5
function myGrading(score) {
    let grade;
  
    switch(true) {
      case (score <= 100 && score >= 90):
         grade = 'A';
          break;
      case (score <= 89 && score >= 80):
          grade = 'B';
           break;
      case (score <= 79 && score >= 70):
          grade = 'C';
           break;
         case (score <= 69 && score >= 60):
          grade = 'D';
           break;
      case (score <= 59 && score >= 0):
          grade = 'F';
          break;
  
      case (score > 100 && score < 0):
          grade = 'INVALID SCORE';
          break; 
  
      default:
        return 'INVALID SCORE';
  }
  
    return grade;
  }
  
  let output = myGrading(score);
  console.log(output);
//   task6
num =4
let res = (num%2==0)?"even":"odd"
// task7
function isleapyear(year){
    if(year%4==0){
        console.log("it's a leap year");
    }
    else if(year%100==0 && year%400==0){
        console.log("it's a leap year");
    }
    else{
        console.log("it's  not a leap year");

    }
    return true
}
let result= isleapyear(2030);
console.log(result);



  

        










