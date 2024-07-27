// task1 and task2 
class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
}
 getGreeting(){
    return `hey ${this.name} your age is ${this.age}`;
 }
 updatedGreeting(){
     let age = 18;
    return `your age is ${age}` ;
 }
 }
const instanceperson = new person('sujal',20);
console.log(instanceperson.getGreeting());
console.log(instanceperson.updatedGreeting());

// task3 and task 4
class student extends person{
     constructor(studentid,name,age){
         super(name,age);
        this.studentid=studentid;
    }
    getMethod(){
        return `your student id is ${this.studentid}`
    }
   getMethod(){
        return "23sujal";
}
}
const instancestudent =new student('23sujal');
console.log(instancestudent.getMethod());

// task5
class person1{
    static getstaticMethod(){
        return "hey welcome to our voice"
    }
}
 const val = person1.getstaticMethod();
 console.log(val);

// task6
