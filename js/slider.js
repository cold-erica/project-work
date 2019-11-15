import Swiper from 'swiper';

export class Slider {
    constructor() {
        this.sliderSelector = '.swiper-container';
        this.sliderButtonSelectorTemplate = '.swiper-button-';
        this.slider = null;
    }

    start() {
        this.slider = new Swiper(this.sliderSelector, {
            loop: true,
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