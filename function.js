
//this returning the object
// function User() {
//     object = {
//         name:"nisha",
//         age:"23"
//     }
//     return object;
// }

// console.log(User().name);

//make a generic function 

// function totalAmmount(num1){
//     return num1;
// }  this is the simple function which contain 0ne agrgumenet and return one results

//console.log(totalAmmount(10,20,30,40,500));
//... will work as spread and REST opertor both are depend on the used case how you are using
// function totalAmmount(...num1){
//     return num1;
// }

// console.log(totalAmmount(10,20,30,40,60));


// let a = 10;
// const b = 20 ;
// var c = 30;//var will be ascessable from out of the scope which is wronge thats why we not used var

//console.log(`the value of let : ${a} and the value of const ${b} and the value of var ${c}`)

// function scopes(){
//     let x =100;
//     let y =20;
//     if(x==10){
//         z=1000;
//     }
//     console.log(x);
//     console.log(y);
//     console.log(z);

// }

// scopes();


//IIFE immediately Invoked Function Expression

//()() first prithese for the defination and second for the call
//global scopes jo pollution hota ha usko hatane ke liye jo IIFE used karte ha
// (function chai(){
//    console.log("hello IIFE");
// })()


// const two = function (){
//     console.log("variable function");
// }

// two();

//convert into arrow function

const Arrow = () => {
    let x= 10;
    console.log(this);
}

Arrow();
//in the arrow function we can not used the this keyword


//arrow function
