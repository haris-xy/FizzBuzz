document.querySelector('#press').addEventListener('click', run)


let output = "";


function run() {

    for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)}
 /*   let inputNum = Number(document.querySelector('#yourNum').value)

    for (let i = 0; inputNum < i; i++) {


        if (inputNum % 3 == 0) {
            output = output + "Fizz" };
        if (inputNum % 5     == 0) {
             output = output + "Buzz" };
        if (output == "") {
            output = i };

        }
document.querySelector('#zebra').innerText = `${output}`;
}
 for (let i = 1; i <= 100; i++) {

     let meho = "";

     if (i % 3 == 0) { meho += "Fizz";}    
     if (i % 5 == 0) { meho += "Buzz";}    
     if (i == "") { meho = i;}

     console.log(i);

*/
