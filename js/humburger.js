export class HumburgerMenu {
    constructor() {
        this.opened = false;
        this.el = document.querySelector('.js-humburger');
        this.menuEl = document.querySelector('.js-header-menu');
        this.visibleClass = 'visible';
        this.hiddenClass = 'hidden';

        this.el.addEventListener('animationend', () => {
            this.el.classList.remove('rotate-humberger');
            if (!this.opened) {
                this.open();
            } else {
                this.close();
            }
        });

        this.el.addEventListener('click', () => {
            this.el.classList.add('rotate-humberger');
        });
    }

    open() {
        this.menuEl.classList.add(this.visibleClass);
        this.el.classList.add(this.hiddenClass);
        this.opened = !this.opened;
    }

    close() {
        this.menuEl.classList.remove(this.visibleClass);
        this.el.classList.remove(this.hiddenClass);
        this.opened = !this.opened;
    }
}