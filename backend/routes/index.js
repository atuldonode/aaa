
console.log("😎 HeLLO BoSS 😎");

//   Find Palindrome Words

// function strings (str){
//     const len = string.length;
//     for(var i = 0; i < len/2; i++){
//         if (string[i] !== str[len -1 -i ]) {
//             console.log("not palindrome");
//             return;
//         }else{
//             "it is palindrome";
//             return;
//         }
//     }
// };

// const string = 'lololp' ;
// const value = strings(string);  


// Reverses string 

// function reverseString(str){
//     const splitString = str.split("");
//     const reverse = splitString.reverse();
//     const joinArray = reverse.join("");
//     return joinArray;
// };
// console.log(reverseString("hello"));

//  Map() method 
// var arr = [2, 5, 6, 5, 5, 3, 8, 5, 9];

// var newArr = arr.map((val) => {
//     // if (val == 2)
//     return val + 2;
// })
// console.log(newArr)

// for (let index = 0; index < 5; index++) {
// setTimeout(() => {
//   console.log(index);
// }, 1000);
// };

// queueMicrotask
// setTimeout(() => {
//   console.log(index);
// }, 1000);

// console.log(10 * "10" + 5);
// console.log(+ "10" + 10 + 5);

// Closure
// function OuterFunction() {

//     var outerVariable = 1;

//     function InnerFunction() {
//         var a = 2;
//         console.log(outerVariable);
//     }
//     InnerFunction();
//     // console.log(a);
// };
// OuterFunction();


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log("sort", fruits.sort());
// console.log("reverse", fruits.reverse());



// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort(function(a, b){return b - a}));

// let x = 1
// x = () => {
//     console.log(x);
//     x = 5
//     var x;
// };
// x();


//2nd largest number

// const a = async() =>{
//     console.log("async");
// }; a();

// filter

// var arr = [1,2,3,3,54,5,56,78,8,456,57,5]

// const results = arr.sort((a, b) =>{
//     return 0.5 - Math.random()
// })

// console.log(results);

// arr.unshift(1000)
// console.log(arr);

// var greaterThan2 = arr.filter( n => n ==3)
// console.log(greaterThan2);

// var selectedCandidate = arr.map(user => {
// 	// if(user < 50){
// 	// 	return user;
//     // }

//     // map 

//     return user + 20
// });
// console.log(selectedCandidate);

// var initialVal = 0;
// let result=arr.reduce( (accu, val) => 
// val + accu , initialVal)

// console.log(result) // 15

// const randumNum = Math.floor(Math.random() * 11111);
// console.log(randumNum);

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }

// console.log(day);

// Slice out a portion of a string from position 7 to position 13 (13 not included):
// let str = "Apple, Banana, Kiwi";
// - count from the last Element
// let part = str.slice(-15, -6);
// let part = str.substring(7, 13);
// let part = str.substr(0, 10);
// console.log(part.toLocaleUpperCase());

//splice

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.splice(3, 0, "Lemon", "Kiwi");
// const citrus = fruits.slice(1);
// console.log(citrus);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.sort();
// fruits.reverse();
// console.log(fruits);

// setTimeout(() => {
//     console.log("setTimout");
// }, 5000);

// const string = "hello"
// const str = string.split("")
// const result = str.reverse();
// console.log(result.join(""));


// const start = new Date().toLocaleTimeString();
// console.log(start);

// Promiseeeeeee

// const call = new Promise((res, rej) =>{
//     if (!true) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// });

// call.then((result)=>{
//     console.log(result);
// }).catch(err => console.log(err))

// const callMe = async()  =>{
// if (true) {
//    return "hello";
// }
// }

// const parent = async () =>{
//     return await callMe()
// }

// (async()=>{
//     console.log(await parent());
// })();

// Call And Apply method borrow the function method

// const name1 = {
//     first:"Atul",
//     last:"Donode",

// }
// const fullName = function(city, state){
//     console.log(this.first + " " + this.last + " " + "from" + " " + city +  "-", state);
// }

// fullName.call(name1, "ngp", "Mh");
// fullName.apply(name1, ["ngp", "Mh"]);
// let bind = fullName.bind(name1, "ngp", "Mh");
// bind();

// Rest Parameter
// ES5
// function x(a, b){
//     console.log(a+b);
// };
// x(1,2,3,5,6)

// // Es6 rest

// function sum(a, b, ...input){
//     // console.log(a);
//     // console.log(b);
//     let total = 0;
//     for(let i of input){
//         total += i
//     }
//     console.log(total);

// };
// sum(1,20,3,5,6,10)


// ES6 Spread
// var arr1 = [2,3,4,]
// var arr = [1,2,3,4,5,...arr1]
// console.log(arr[5]);
// sum(...arr);

// console.log(Math.max.apply(null,arr1));;


// Squre 
// function sqr(num){
//     // let total = 2;
//     for(i = 1; i <= 10; i++){
//         console.log(i * i);
//     }
// };
// sqr();


// squre Root

// function sqrRoot(){
//     // let total = 2;
//     for(i = 1; i <= 10; i++){
//         const result = Math.sqrt(i);
//         console.log(result);
//     }
// };
// sqrRoot();

// take the input from the user
// const number = 9;

// const result = Math.sqrt(number);
// console.log(result);

// function squareIt(number) {
//     return number ** 2;
//   }

//   console.log(squareIt(5));


//ODD Even number sqr and sqr root

// function number() {
//     for(i = 1; i <= 10; i++){
// console.log(i * i);       //Sqr
// //SqrRoot 
// const result = Math.sqrt(i);
// console.log(result);            

// odd Even🦾

// if(i % 2 == 0) {
//     console.log(`The number is even. ${i}`);
// }
// // if the number is odd
// else {
//     console.log(`The number is odd. ${i}`);
// }


// ternary operator
// const result = (i % 2  == 0) ? "even" : "odd";
// console.log(result, i);
//     }
// };
// number()


// Two Date compare
// var g1 = new Date();
// var g2 = new Date();
// if (g1.getTime() === g2.getTime()) {
//     console.log("same");
// } else {
//     console.log("different");
// }


// let a = 1;
// const b = 2
// var c = 3
// a = 3
// // b = 2
// c = 1
// console.log(a);
// console.log(b);
// console.log(c);





// Promiseeeeeee

// const rollNo = new Promise((resolve, reject) => {
// setTimeout(() => {
//         let roll = [1, 2, 3,4, 5];
//         resolve(roll);
//         reject("error")
// }, 2000);
// });

// const getBioData = (indexData) =>{
//     return new Promise((resolve, reject) => {
//         setTimeout((indexData) => {
//             let bio = {
//                 name:"Atul",
//                 city:"Ngp"
//             }
//             resolve(bio);
//             reject("error")
//         }, 3000, indexData);
//     })
// }


// rollNo.then((value) =>{
//     console.log(value);
//     getBioData(1).then((value) =>{
//         console.log(value);
//     })
// }).catch((err) => {
//     console.log(err);
// })


//  CallBack Hell
// function first() {
//     setTimeout(() => {
//         console.log("first");

//         function second() {
//             setTimeout(() => {
//                 console.log("second");

//                 function third() {
//                     setTimeout(() => {
//                         console.log("third");
//                     }, 3000);
//                 }
//                 return third();
//             }, 2000);
//         }
//         return second();
//     }, 1000);
// }; first();

// async function abc() {
//     try {
//         await setTimeout(() => {
//             console.log("first");

//         }, 1000)

//         await setTimeout(() => {
//             console.log("second");
//         }, 2000)

//         await setTimeout(() => {
//             console.log("second");
//         }, 3000)

//     } catch (error) {
//         console.log(error);
//     }
// }; abc();



//   Call back hell Solution in promise
// const first = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("first")
//         reject("error")
//     }, 1000);
// });

// second = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("second")
//             reject("second error")
//         }, 2000);
//     })
// };

// const third = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("third")
//             reject("third error")
//         }, 3000);
//     })
// };

// first.then((value) => {
//     console.log(value);
//     second().then((value) => {
//         console.log(value);
//     });
//     third().then((value) => {
//         console.log(value);
//     });
// }).catch(err => console.log(err))


// Higher order function
// function greet(name) {
//     return `Hi!! ${name} `;
// }

// function greet_name(greeting, message, name) {
//     console.log(`${greeting(name)} ${message}`);
// }

// greet_name(greet, 'Welcome To GeeksForGeeks', 'JavaScript');


// Hoisting 


// console.log(x);
// var x = 10;
// a();


// function a (){
//     console.log("hosting Function");
// };


// const obj = { name: "John", age: 30, city: "New York" };
// const arr = ["John", "Peter", "Sally", "Jane"];
// const myJSON = JSON.stringify(obj);
// const myJSON1 = Object.assign({}, arr);

// console.log(myJSON);
// console.log(myJSON1);

// const x = new Date();
// console.log(x);


// filter 
// const students = [
//     { name: 'Quincy', grade: 96 },
//     { name: 'Jason', grade: 84 },
//     { name: 'Alexis', grade: 100 },
//     { name: 'Sam', grade: 65 },
//     { name: 'Katie', grade: 90 }
//   ];

//   const studentGrades = students.filter(student => student.grade < 90);
//   console.log(studentGrades);; 


// reduce

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce(function (result, item) {
//     // console.log(result, "😁");
//     console.log("😐",item);
//   return result + item;
// });
// console.log(sum); // 10


// var http = require("http");
// http.createServer(function (request, response) {
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.end('Hello World\n');
// }).listen(3000);

// const doSomethingAsync = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve('I did something'), 2000);
//   });
// };

// const doSomethingAsyncs = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve('I did somethingsss'), 3000);
//   });
// };

//  async await

// const doSomething = async (req, res) => {
//   try {
//     const a = await doSomethingAsync();
//     const b = await doSomethingAsyncs();
//    console.log(a);
//    console.log(b);
//   } catch (error) {
//     console.log(error);
//   }
// };
// doSomething();

//  without async await
// doSomethings = () => {
// doSomethingAsync().then((value) => {
//   console.log(value);
//   doSomethingAsyncs().then((value) => {
//     console.log(value);
//   })
// }).catch((err) => console.log(err))
// };
// doSomethings();


// function modifyArray(arr, callback) {
//   // do something to arr here
//   arr.push(100);
//   // then execute the callback function that was passed
//   callback();
// }

// define Set
// const set = new Set([1, 2, 3]);

// // looping through Set
// for (let i of set) {
//     console.log(i);
// }


// modifyArray(arr, function() {
//   console.log("array has been modified", arr);
// });

// setTimeout(() => {
//     console.info('4. Execution of Timeout Callback Function'); 
// }, 10);
// setImmediate(() => {
//     console.info('3. Execution of Immediate Callback Function'); 
// });
// process.nextTick(() => {
//     console.info('2. Execution of NextTick Callback Function');
// })
// console.info('1. Execution of Main Module Ends');


fun1 = async () => {
    console.log("fun1");
}

fun2 = async (fun3) => {
    console.log("fun2");
}

fun3 = async() => {
    console.log('finc3');
}
Promise.all([fun1(), fun2()]);
// await fun1();
// await fun2();
fun3();

