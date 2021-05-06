const lab = document.querySelector('#lab'),
    hero = document.querySelector('#hero');

function transformation() {
    if (hero.innerHTML === `Hulk`) {
        hero.innerHTML = `Bruce Banner`;
        hero.style.fontSize = `60px`;
        hero.style.letterSpacing = `2px`;
        lab.style.backgroundColor = `#ffb300`;
    } else {
        hero.innerHTML = `Hulk`;
        hero.style.fontSize = `130px`;
        hero.style.letterSpacing = `6px`;
        lab.style.backgroundColor = `#70964b`;
    }
}