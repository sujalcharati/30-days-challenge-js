//  task 1
const str =/javascript/;
str.test(" hey i have learnt javascript");
// task 2

let digit="super 30";
digit.match(/\d/g);
// task 3
const text = " Sujal is a name of a Student who is Male.";
const capitalizedWords = text.match(/\b[A-Z][a-z]*\b/g);
console.log(capitalizedWords);

// task 4
 const test ="im 20 years old and im thinking of 30 years to have worth of 50";
 const testsequence =test.match(/\d+/g);
 console.log(testsequence);
  

//  task 5
const areacode ="(123) 456-7890";
const matching =areacode.match(/(\d{3})\s(\d{3})-(\d{4})/);
console.log(matching);

// task 6
const email ="sujac@gmil.com";
const checkemail = email.match(/\b [A-Z][a-z]*\@ \.\b/g);
console.log(checkemail);

// task 7
