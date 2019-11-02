import Swiper from 'swiper';


class Application {
    constructor() {
        this.sliderSelector = '.swiper-container';
        this.sliderButtonSelectorTemplate = '.swiper-button-'
        this.slider = null;
    }

    start() {
        this.slider = new Swiper(this.sliderSelector, {
            loop: true,
            navigation: {
                nextEl: `${this.sliderButtonSelectorTemplate}next`,
                prevEl: `${this.sliderButtonSelectorTemplate}prev`,
            },
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const app = new Application();
    app.start();
});
