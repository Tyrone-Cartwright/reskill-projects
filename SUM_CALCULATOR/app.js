// let arr = [34, 56, 124, 79];
// let reducer = (accumlator, currentvalue) => accumlator + currentvalue;

// console.log(arr.reduce(reducer));

let res = 0;
function checkSum(arr) {
    for(let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res
}

console.log(checkSum([24, 35, 68, 88]));