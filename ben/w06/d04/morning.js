// # (function() {
// #     var i;

// #     for (i = 1; i <= 100; i++) {
// #         console.log(i + ":" + [i % 3 === 0 ? "Fizz" : void 0] + [i % 5 === 0 ? "Buzz" : void 0])
// #     }

// # }).call(this);


// for(i=0;i<100;console.log(i+":"+(++i%3?'':'Fizz')+(i%5?'':'Buzz')));




function fizzBuzz(i) {

    var i;

    console.log(i + ":" + [i % 3 === 0 ? "Fizz" : void 0] + [i % 5 === 0 ? "Buzz" : void 0])

    if (i != 100) {
        fizzBuzz(i += 1)
    }
}

fizzBuzz(1);


// function fizzBuzz(i) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }

//   if (i != 100) {
//     fizzBuzz(i += 1);
//   }
// }

// fizzBuzz(1);