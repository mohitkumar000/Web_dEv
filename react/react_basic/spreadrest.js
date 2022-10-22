//spread operator 
//it isused to split up arr element or object properties

const num = [1,2,3];
const new_nums = [...num];
console.log(new_nums);

const new_nums1=[num,5];

const obj ={
    name:"mohit",
    age:"23"

}
//rest opearator

//used to merge a list of function arguments into one
function fun (...args)
{
    console.log(args)
 }

fun("hello world","how",2,true);

