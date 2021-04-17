let regExpAnimal = /^[a-z]{1,20}$/gi,
    regExpGender = /^(male|female|\s+)?$/i,
    regExpAge = /^[0-9]{1,5}$/g,
    animal, gender, age, description;

animal = prompt('What animal is the superhero most similar to?').toLowerCase();
if (!regExpAnimal.test(animal)) {
    alert('Wrong input')
    console.log('wrong input')
} else {
    gender = prompt('Is the superhero male or female? Leave blank if unknown or other.')
    if (!regExpGender.test(gender)) {
        alert('Wrong input')
    } else {
        age = prompt('How old is the superhero?');
        if (age == 0 || !regExpAge.test(age)) {
            alert('Wrong input')
        }
    }
}

if (/^male$/i.test(gender) && age < 18 && age > 0) {
    description = 'boy'
    alert(`The superhero name is: ${animal}-${description}`)
} else if (/^male$/i.test(gender) && age >= 18) {
    description = 'man'
    alert(`The superhero name is: ${animal}-${description}`)
} else if (/^female$/i.test(gender) && age < 18 && age > 1) {
    description = 'girl'
    alert(`The superhero name is: ${animal}-${description}`)
} else if (/^female$/i.test(gender) && age >= 18) {
    description = 'woman'
    alert(`The superhero name is: ${animal}-${description}`)
} else if (gender == '' && age < 18 && age > 1) {
    description = 'kid'
    alert(`The superhero name is: ${animal}-${description}`)
} else if (gender == '' && age >= 18) {
    description = 'hero'
    alert(`The superhero name is: ${animal}-${description}`)
}