document.querySelector('#press').addEventListener('click', fizzBuzz)

let inputNum = document.querySelector('#yourNum').value
let output;

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

    // let meho = "";

    // if (i % 3 == 0) { meho += "Fizz";}    
    // if (i % 5 == 0) { meho += "Buzz";}    
    // if (i == "") { meho = i;}

    // console.log(i);
