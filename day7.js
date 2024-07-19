// task1
const book={
    title:"my gold medal",
    authour:"jesse owens",
    year:"2000"
}
console.log(book);
// task2
const book1={
    title:"my gold medal",
    authour:"jesse owens",
    year:"2000"
}
console.log(book1.title);
console.log(book1.authour)
// task3
const book2={

    title:"my gold medal",
    authour:"jesse owens",
    year:"2000"
}
book2.bookname = function() {
     return this.title +" is written by "+ this.authour;
     };
     console.log(book2.bookname());
// task4
const book3={

    title:"my gold medal",
    authour:"jesse owens",
    year:"2000"
}
book3.bookname = function(year) {
     return this.year;
     };
     console.log(book3.bookname(2001));

     