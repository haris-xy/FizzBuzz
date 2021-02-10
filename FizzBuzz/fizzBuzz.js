document.querySelector('#press').addEventListener('click', run)

let inputNum = document.querySelector('#yourNum').value
let output;

<<<<<<< HEAD
let output = "";
let inputNum = Number(document.querySelector('#yourNum').value)

function run() {

  //  for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)}

  
=======
function fizzBuzz() {

    for (var i=1; i <= inputNum; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}
}


>>>>>>> b8f899e335afd7e30cb4786da9c0ff2f866fdd58



<<<<<<< HEAD
        if (inputNum % 3 == 0) {
            output = output + "Fizz" };
        if (inputNum % 5     == 0) {
             output = output + "Buzz" };
        if (output == "") {
            output = i };

        }
document.querySelector('h5').innerText = `${output}`;
}
 /* for (let i = 1; i <= 100; i++) {
=======







// 
// var output = ""; 
// 
// 
// function fizzBuzz() {
// 
    // let inputNum = document.querySelector('#yourNum').value
// 
    // for (let i=0; i < inputNum; i++) {
// 
// 
        // if (i % 3 == 0) { output += "Fizz" }
        // if (i % 5 == 0) { output += "Buzz" }
        // if (output == "") { output = i }
// 
    // }
// 
// document.querySelector('#zebra').innerText = `${output}`
// 
// console.log(inputNum);
// console.log(output);
// }
// for (let i = 1; i <= 100; i++) {
>>>>>>> b8f899e335afd7e30cb4786da9c0ff2f866fdd58

     let meho = "";

     if (i % 3 == 0) { meho += "Fizz";}    
     if (i % 5 == 0) { meho += "Buzz";}    
     if (i == "") { meho = i;} */

     console.log(i);
     console.log(inputNum);
 
console.log(output);
