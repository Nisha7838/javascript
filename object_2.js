const obj1= new Object();//singleton object

const obj2 = {};
//above give same out put at  after print


const objt3 = {
    fullname: {
        myName:{
            firstName:"nisha",
            lastname:"kumari",
        }
    },
}
//console.log(objt3.fullname.myName.firstName);

const obj4 = {1:"a",
2:"b",
}

const obj5 = {
3:'c',
4:'d',
}

//const obj6 = {obj4,obj5};//this is print object inside the object
//there is the assign function is available in the js 
//assign(target,source);
//target means we need to convert all the source into given target
//const obj7 = Object.assign({},obj4,obj5);


//spread in object most of time used 

//const obj6 = {...obj4,...obj5}

const users = [
    {
        id:"1",
        email:"abc@gmail.com",
    }
    ,
    {
        id:"2",
        email:"abc@gmail.com",
    }
    ,
    {
        id:"3",
        email:"abc@gmail.com",
    }
    ,
    {
        id:"4",
        email:"abc@gmail.com",
    }
    ,

]

//most used keys method
console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.entries(users));
//console.log(users[2].id);