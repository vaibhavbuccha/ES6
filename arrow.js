// arrow functions 

// normal function
function fun(name){
	return (`Hello ${name}`)
}

// arrow function
const func = (name) => {
	return (`Hello ${name}`)
}


// arrow function 
// when we user parathesis than return is not required
const myFun = (name) => (`Hello ${name}`)


console.log("normal function ", fun("vaibhav"));
console.log("arrowfunction", func("ravi"));
console.log("arrowfunction", myFun("ravi"));




