let begin = prompt('Take the Begin of a range', 1);
let end = prompt('Take the End of a range', 100);

function checkDivision(beginRange, endRange) {
    let result = '';
    for (let i = beginRange; i < endRange; i++) {
        if (i % 10 == 0 && i % 3 == 0 && i % 2 == 0){
            result += `${i} is even, a multiple of 3, a multiple of 10`
        }else if(i % 3 == 0){
            result += `${i} is a multiple of 3`
        }else if(i % 2 == 0){
            result += `${i} is even`
        }else{
            result += `${i} -`
        }
        result += '\n';
    }
console.log(result)
}
checkDivision(begin, end)