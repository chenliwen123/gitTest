class Student{
    fullName:string;
    constructor(public firstName,public middleInitial,public lastName){
        this.fullName=firstName+" "+middleInitial+" "+lastName;
    }
}
interface Person{
    firstName:string;
    lastName:string;
}
function greeter(person:Person){
    return "HELLP"+ person.firstName+" " + person.lastName;
}
let user=new Student('Jane','m','user');
//document.body.innerHTML=greeter(user);
console.log(greeter(user));