function sortEvenOdd(arr){
    return  arr.sort(function(a, b){
        return a % 2 - b % 2 || a - b
    });
}

const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
sortEvenOdd(arr);
console.log(arr)