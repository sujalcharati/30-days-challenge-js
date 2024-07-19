// task1
const book = {
    title: "my gold medal",
    authour: "jesse owens",
    year: "2000"
}
console.log(book);
// task2
const book1 = {
    title: "my gold medal",
    authour: "jesse owens",
    year: "2000"
}
console.log(book1.title);
console.log(book1.authour)
// task3 and task7
const book2 = {

    title: "my gold medal",
    authour: "jesse owens",
    year: "2000"
}
book2.bookname = function () {
    return this.title + " is written by " + this.authour;
};
console.log(book2.bookname());
// task4
const book3 = {

    title: "my gold medal",
    authour: "jesse owens",
    year: "2000"
}
book3.bookname = function (year) {
    return this.year = 2001;
};
console.log(book3.bookname());
//  task5 and task6
const library = {
    name: "sujal",
    bookss: [{
        title: "chemistry",
        authour: "rd sharma"

    },
    {
        title: "physics",
        authour: "hc verma"
    }
]
}
console.log(library);
console.log(library.name);
console.log(library.bookss["title"]);

// task8
const bookobj = {
    title: "my gold medal",
    authour: "jesse owens",
    year: "2000"
}
for (const key in bookobj) {
    console.log(`${key} :${bookobj[key]}`)
    
}
// task9
const bookobj1 = {
    title: "my gold medal",
    authour: "jesse owens",
    year: "2000"
}
const key =Object.keys( bookobj1);
console.log(key)
const val =Object.values( bookobj1);
console.log(val)





