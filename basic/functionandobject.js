// function calculatecartprice(num1){
//     return num1 
// }

// console.log(calculatecartprice(100))

// function calculatecartprice(...num1){
//     return num1 
// }

// console.log(calculatecartprice(100, 200, 400))

// function calculatecartprice(var1, var2, ...num1){
//     return num1 
// }

// console.log(calculatecartprice(100, 232, 123, 453, 111, 212))

const user = {
    username: "nawal",
    price: 999
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username}, and the price is ${anyobject.price}`); 
    
}

handleobject(user)