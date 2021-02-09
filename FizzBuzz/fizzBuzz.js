document.querySelector('#press').addEventListener('click', fizzBuzz)


let output = "";


function fizzBuzz() {

    let inputNum = Number(document.querySelector('#yourNum').value)

    for (let i = 0; inputNum < i; i++) {


        if (inputNum % 3 == 0) { output = +"Fizz" }
        if (inputNum % 3 == 0) { output = +"Buzz" }
        if (output == "") { output = i }

    }

document.querySelector('#zebra').innerText = `${output}`
}
// for (let i = 1; i <= 100; i++) {

    // let meho = "";

    // if (i % 3 == 0) { meho += "Fizz";}    
    // if (i % 5 == 0) { meho += "Buzz";}    
    // if (i == "") { meho = i;}

    // console.log(i);
