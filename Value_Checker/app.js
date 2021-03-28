function valueChecker(arg1, arg2){
    if(arg1 === arg2){
        console.log('True')
    } else {
        console.log('false')
    }
}

let result = valueChecker(2, 2);
let result2 = valueChecker(4, 'hello');
let result3 = valueChecker('reskillamericans', 'reskillamericans');
let result4 = valueChecker(10, 10);
let result5 = valueChecker(8, '8');
let result6 = valueChecker('able', 7);