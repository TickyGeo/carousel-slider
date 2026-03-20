const slider = document.querySelector('.slider');
const carousel = document.querySelector('.slider .carousel');
const prevBtn = document.querySelector('.slider .btn.prev');
const nextBtn = document.querySelector('.slider .btn.next');
const items = document.querySelectorAll('.slider .carousel .item');
const inp = document.querySelector('.slider .inp');

let cur = 0;

slider.onmousedown = e => {
    if (e.button == 0) {
        bool = true;
        mouseX = e.x;
    };
};

slider.onmouseup = e => {
    if (e.button == 0) {
        bool = false;
    };
};


carousel.onmousemove = e => {
    if (bool) {
        if (e.x < mouseX) {
            cur -= 45;
        } else if (e.x > mouseX) {
            cur += 45;
        };
        bool = false;
        carousel.style.transform = `rotateX(${-inp.value}deg) rotateY(${cur}deg)`;
    };
};

nextBtn.onclick = () => {
    cur -= 45;
    carousel.style.transform = `rotateX(${-inp.value}deg) rotateY(${cur}deg)`; 
};

prevBtn.onclick = () => {
    cur += 45;
    carousel.style.transform = `rotateX(${-inp.value}deg) rotateY(${cur}deg)`;
};

slider.onmousewheel = e => {
    e.deltaY > 0 ? cur += 45 : cur -= 45;
    carousel.style.transform = `rotateX(${-inp.value}deg) rotateY(${cur}deg)`;
};

inp.oninput = () => {
    carousel.style.transform = `rotateX(${-inp.value}deg) rotateY(${cur}deg)`;
}