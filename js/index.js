import Swiper from 'swiper';


class Application {
    constructor() {
        this.sliderSelector = '.swiper-container';
        this.slider = null;
    }

    start() {
        console.info('creating swiper');
        this.slider = new Swiper(this.sliderSelector, {
            // Optional parameters
            loop: true,


            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const app = new Application();
    app.start();
});
