let firstName = prompt('Please write your first Name');
let lastName = prompt('Please write your last Name');
let regExp = /^[a-z]*$/i
if (firstName && regExp.test(firstName) && lastName && regExp.test(lastName)) {
    let changeFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    let changeSecondName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
    alert(`Hello ${changeFirstName} ${changeSecondName}`)
    console.log(`Hello ${changeFirstName} ${changeSecondName}`)
} else {
    alert('Wrong input');
    console.log('Wrong input')
}
