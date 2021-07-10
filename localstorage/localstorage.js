'use sctrict';

// localStorage.setItem('number', 5);
// localStorage.setItem('another', 6);


// console.log(localStorage.getItem('number'));

// localStorage.removeItem('another');

// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
        form = document.querySelector('form'),
        change = document.querySelector('#color');

        if(localStorage.getItem('isChecked')){
            checkbox.checked = true;
        }
        if(localStorage.getItem('bg') === 'changed'){
            form.style.backgroundColor = 'red';
        }

        checkbox.addEventListener('change', () => {
            localStorage.setItem('isChecked', true);
        });

        change.addEventListener('click', () => {
            if(localStorage.getItem('bg') === 'changed'){
                localStorage.removeItem('bg');
                form.style.backgroundColor = 'white';
            }else{
                localStorage.setItem('bg', 'changed');
                form.style.backgroundColor = 'red';
            }
        });


const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);