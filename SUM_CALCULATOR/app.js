// let arr = [34, 56, 124, 79];
// let reducer = (accumlator, currentvalue) => accumlator + currentvalue;

// console.log(arr.reduce(reducer));

// let res = 0;
// function checkSum(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         res += arr[i];
//     }
//     return res
// }


let checkSum = (arr) => {
    let res = 0;
    for(let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res
}

console.log(checkSum([24, 35, 68, 88]));
console.log(checkSum([525, 243, 4, 36]));
console.log(checkSum([125, 87, 255, 69]));
console.log(checkSum([36, 78, 729, 60]));