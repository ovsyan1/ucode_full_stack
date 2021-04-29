// function removeDuplicates() {
//     let arr = str.split(' ');
//     let newStr = [...new Set(arr)]
//     return newStr.join(' ')
// }

String.prototype.removeDuplicates = function() {
    return [...new Set(this.split(' '))].join(' ')
}

let str = "Giant Spiders?   What's next? Giant Snakes?"
console.log(str)
// Giant Spiders?   What's next? Giant Snakes?
str = str.removeDuplicates();
console.log(str)
// Giant Spiders? What's next? Snakes?
str =  ". . . . ? . . . . . . . . . . . ";
console.log(str)
// . . . . ? . . . . . . . . . . . 
str = str.removeDuplicates()
console.log(str);
// .?