//you can use ES6 imports because I am using Parcel
//bundler to create final bundle
import { sum, multiply } from './module';
/**
 * Example to work with index.html
*/
const btn = document.querySelector('#btn');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const result = document.querySelector('#result');
btn.addEventListener('click', () => {
    console.log('btn clicked!', multiply(3, 3));
    result.innerHTML = sum(+num1.value, +num2.value).toString();
}, false);
/**
 * Types
*/
// let n: number;
// n = 23;
// var arr: number[] = [];
// arr.push(23);
// arr.push(12);
// console.log(arr);
// interface Person {
//     name: string,
//     email: string,
//     [key: string]: any
// }
// const person1:Person = {
//     name: 'Joseph',
//     email: 'kkjk@gmail.com',
// }
// //console.log(person1.nickname);
// function sum(x: number, y: number, z?: number):number {
//     return x + y;
// }
// console.log(sum(2.5,2));
// let tupleArr: [number, string];
// tupleArr = [21, 'hello']
// // const ADMIN = 0;
// // const AUTHOR = 1;
// // const CONTRIBUTOR = 2;
// enum Role {
//     ADMIN = 5,
//     AUTHOR = 100,
//     CONTRIBUTOR = 200
// }
// console.log(Role.AUTHOR);
// const person2: Person = {
//     name: 'Ayaan',
//     email: 'jhkj@gml.com',
//     role: Role.ADMIN
// }
// if(person2.role === Role.ADMIN) {
//     console.log('He is a Admin');
// }
// let combine: (a: number, b: number) => number;
// combine = function(n1, n2) {
//     return n1 + n2;
// }
// console.log(combine(8,3));
// //ES6 class example
// interface EmployeeType {
//     name: string;
//     id: number;
//     [key: string]: any;
// }
// class Employee {
//     private readonly name:string;
//     id: number;
//     constructor(name: string, id: number) {
//         this.name = name;
//         this.id = id;
//     }
//     myMethod():void {
//         console.log('hello', this.name);
//     }
// }
// const e1 = new Employee('Joseph', 1234);
// //console.log('employee: ', e1.name);
// e1.myMethod()
