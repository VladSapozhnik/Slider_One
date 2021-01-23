let offset = 0; //смещение от левого края
const SliderLine = document.querySelector('.slider-line');
document.querySelector('.slider-next').addEventListener('click', function () {
    offset += 640;
    if (offset > 2560) {
        offset = 0;
    }
    SliderLine.style.left = -offset + 'px';
})

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset -= 640;
    if (offset < 0) {
        offset = 2560;
    }
    SliderLine.style.left = -offset + 'px';
})
