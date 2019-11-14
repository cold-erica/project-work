import '../css/style.scss';

import {set as setCookie, get as getCookie} from 'es-cookie';
import Swiper from 'swiper';


class Application {
    constructor() {

        this.sliderSelector = '.swiper-container';
        this.sliderButtonSelectorTemplate = '.swiper-button-';
        this.slider = null;
        
        this.likeCookieName = 'like';
        this.likeInitialValue = 8125;
        this.likeSelector = '.js-like';
        this.likeSelectedClass = 'fas';
        this.likeEl = document.querySelector(this.likeSelector);
        this.likeCookieIsSet = getCookie(this.likeCookieName) === '1';
        this.setLikeState(this.likeCookieIsSet);
        this.initEvents();
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
                delay: 250000,
                disableOnInteraction: false,
            },
        });
    }

    initEvents() {
        document.querySelector(this.likeSelector).addEventListener('click', this.likeClick.bind(this));
    }

    setLikeState(cookieSet) {
        const classToRemove = cookieSet?'far':'fas';
        const classToAdd = cookieSet?'fas':'far';
        const valueToSet = cookieSet?this.likeInitialValue + 1:this.likeInitialValue;
        this.likeEl.classList.remove(classToRemove);
        this.likeEl.classList.add(classToAdd);
        this.likeEl.innerHTML = ` ${valueToSet}`;
    }

    likeClick(e) {
        const newValue = this.likeCookieIsSet?'0':'1';
        setCookie(this.likeCookieName, newValue);
        this.likeCookieIsSet = !this.likeCookieIsSet;
        this.setLikeState(this.likeCookieIsSet);
        console.log('setting ' + newValue);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const app = new Application();
    app.start();
});
