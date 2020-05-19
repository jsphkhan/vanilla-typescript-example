//import multiply from './module';
/**
 * Example to work with index.html
*/
// const btn = document.querySelector('#btn');
// const num1 = document.querySelector('#num1')! as HTMLInputElement;
// const num2 = document.querySelector('#num2')! as HTMLInputElement;
// const result = document.querySelector('#result');
// //function to add 
// function add(x:number, y:number):number {
//     return x + y;
// }
// btn.addEventListener('click', () => {
//     console.log('btn clicked!');
//     result.innerHTML = add(+num1.value, +num2.value).toString();
// }, false);
/**
 * Types
*/
let n;
n = 23;
var arr = [];
arr.push(23);
arr.push(1);
console.log(arr);
const person1 = {
    name: 'Joseph',
    email: 'kkjk@gmail.com',
};
//console.log(person1.nickname);
function sum(x, y, z) {
    return x + y;
}
console.log(sum(2.5, 2));
let tupleArr;
tupleArr = [21, 'hello'];
// const ADMIN = 0;
// const AUTHOR = 1;
// const CONTRIBUTOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["AUTHOR"] = 100] = "AUTHOR";
    Role[Role["CONTRIBUTOR"] = 200] = "CONTRIBUTOR";
})(Role || (Role = {}));
console.log(Role.AUTHOR);
const person2 = {
    name: 'Ayaan',
    email: 'jhkj@gml.com',
    role: Role.ADMIN
};
if (person2.role === Role.ADMIN) {
    console.log('He is a Admin');
}
let combine;
combine = function (n1, n2) {
    return n1 + n2;
};
console.log(combine(8, 3));
class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    myMethod() {
        console.log('hello', this.name);
    }
}
const e1 = new Employee('Joseph', 1234);
//console.log('employee: ', e1.name);
e1.myMethod();
