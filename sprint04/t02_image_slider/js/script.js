let offset = 0;//смещение от левого края 
const sliderLine = document.querySelector('.slider-line'),
       container = document.querySelector('.container');

document.querySelector('.slider-prev').addEventListener('click', prevSlider)
document.querySelector('.slider-next').addEventListener('click', nextSlider)


let interval = setInterval(nextSlider,3000);
container.onmouseover = stopInterval;
container.onmouseout = goInterval;

function stopInterval(){
    clearInterval(interval);
}
function goInterval(){
    interval = setInterval(nextSlider,3000);
}

function prevSlider() {
    offset -= 230;
    if(offset < 0){//когда заканчиается ширина блока блок возвращается на начало
        offset = 690;
    }
    sliderLine.style.left = -offset + 'px';
}

function nextSlider(){
    offset += 230;
    if(offset > 690){//когда заканчиается ширина блока блок возвращается на начало
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
}