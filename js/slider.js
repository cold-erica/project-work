import Swiper from 'swiper';

export class Slider {
    constructor() {
        this.sliderSelector = '.swiper-container';
        this.sliderButtonSelectorTemplate = '.swiper-button-';
        this.slider = null;
    }

    start() {
        this.slider = new Swiper(this.sliderSelector, {
            // бесконечно прокручивать
            loop: true,
            // классы кнопок
            navigation: {
                nextEl: `${this.sliderButtonSelectorTemplate}next`,
                prevEl: `${this.sliderButtonSelectorTemplate}prev`,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });
    }

}