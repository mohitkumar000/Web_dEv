console.log("hello world")

 var num = 4500;
// // console.log(`half of num is ${num} is ${num/2}`);

//function 

// function add(a,b)
// {
//     return a+b;
// }
// console.log(add(17,45))

//function can be returned
//function are treated as first class citizen in javascript and

function calculator(str,a,b){
    if(str =='add')
    {
        return function add(a,b)
        {
            return a+b;

        }

    }
    else if(str=='sub')
    {
        return function sub(a,b)
        {
            return a-b;

        }

    }
}


let calculated_value = calculator('add',10,30)
console.log(calculated_value)







