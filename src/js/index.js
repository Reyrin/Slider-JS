const sidebar     = document.querySelector('.sidebar'),
      main        = document.querySelector('.main'),
      upBtn       = document.querySelector('.controls__up'),
      downBtn     = document.querySelector('.controls__down'),
      slidesCount = document.querySelectorAll('.sidebar__slide').length,
      container = document.querySelector('.container'),
      height = container.clientHeight;

let activeSideSlide = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}%`;

upBtn.addEventListener('click', () => {
    changeSlides('up');
});

downBtn.addEventListener('click', () => {
    changeSlides('down');
});

const changeSlides = (direction) => {
    if (direction === 'up') {
        activeSideSlide++
        if (activeSideSlide === slidesCount) activeSideSlide = 0;
    } else if (direction === 'down') {
        activeSideSlide--
        if (activeSideSlide < 0) activeSideSlide = slidesCount - 1;
    }

    main.style.transform = `translateY(-${activeSideSlide * height}px)`;
    sidebar.style.transform = `translateY(${activeSideSlide * height}px)`;
}