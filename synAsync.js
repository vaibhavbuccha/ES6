

// Synchronus and Asychronus Programming

let log = console.log;

let a1 = (function(){ return 5 })();
let b1 = (function(){ return 20 })();


log(a1);
log(b1);


// this is the synchronous code 
//  synchronous code means that run line by line 

// that javascript usually do 


// asynchronous code

let a2 = function(num) {return num*5};
let b2 = (function(){ return 25 } )();

setTimeout(() => {
	b2++;
	log(b2); //it run after log(a2(b2)); because we made this async
},0);
//  according to sync programming the value of b2 must be increased by 1 but still the value of b2 is 25 

log(a2(b2));

setTimeout(() => {
	// b2++;
	log(a2(b2));//it run after log(a2(b2)); because we made this async
},0);


//  FAQs 


//  -- why we need asynchronous programming?
//  when we have a function that might take a lot of time in execution like getting geological location etc than that is the best pratices to put that function asnyc because js always execute sync than asynch code.
