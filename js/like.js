import { partial } from 'lodash';
import {set as setCookie, get as getCookie} from 'es-cookie';

export class LikeHandler {

    constructor() {
        this.values = [8000, 7301, 8125];
        this.cookieName = 'like-';
        this.selector = '.js-like';
        this.selectedClass = 'fas';
        this.unselectedClass = 'far';
        
        this.setInitialState();
    }

    setInitialState() {
        const elements = [...document.querySelectorAll(this.selector)];
        elements.forEach((element, index) => {
            const cookie = getCookie(this.getCookieName(index));
            const cookieIsSet = cookie === '1'
    
            this.setLikeState(element, cookieIsSet, this.values[index]);
            const handler = partial(this.likeClick, index).bind(this);
            element.addEventListener('click',  handler);
        })
    }

    initEvents() {
        document.querySelector(this.likeSelector).addEventListener('click', this.likeClick.bind(this));
    }

    getSetValue(value) {
        return value === true ? '1' : '0';
    }

    setLikeState(element, value, initialValue) {
        element.dataset.set = this.getSetValue(value);

        const classToRemove = value ? this.unselectedClass : this.selectedClass;
        const classToAdd = value ? this.selectedClass : this.unselectedClass;
        const valueToSet = value ? initialValue + 1 : initialValue;

        element.classList.remove(classToRemove);
        element.classList.add(classToAdd);
        element.innerHTML = ` ${valueToSet}`;
    }

    getCookieName(index) {
        return `${this.cookieName}${index}`;
    }

    likeClick(index, e) {
        const element = e.target;
        const newSelected = !(element.dataset.set === '1');
        const newCookieValue = newSelected ? '1' : '0';

        setCookie(this.getCookieName(index), newCookieValue);

        this.setLikeState(element, newSelected, this.values[index] );
    }
}