'use strict';

class User{
    constructor(name, age){
        this.name = name;
        this._age = age;
    }
   
    #surname = 'Petrychenko'; // приватное свойство

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get age(){
        return this._age;
    }

    set age(age){
        if(typeof age === 'number' && age > 0 && age < 110){
            _age = age; 
        }else{
            console.log('Нeдопустимое значение');
        }
    }
}

const ivan = new User('Ivan', 27)
ivan.say();

ivan.userAge = 30;
ivan.name = 'Alex';

ivan.age = 333;

console.log(ivan.age)