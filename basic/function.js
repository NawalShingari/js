// function addtwonumber(num1, num2){
//     console.log(num1 + num2);
// }
// addtwonumber(2, 3)
// addtwonumber(2,"3")

// function addtwonumber(num1, num2){
//     let result = num1 + num2
//     //console.log(num1 + num2);
//     return result
// }

// const result = addtwonumber(2, 4)
// console.log("result: ", result);

function loginusername(username = "sam"){
    if(!username){
        console.log("please enter the username");
        return
        
    }
    return `${username} just logged in`
}

 console.log(loginusername("nawal"))
console.log(loginusername("nawal"))
