export class HumburgerMenu {
    constructor() {
        this.opened = false;
        this.el = document.querySelector('.js-humburger');
        this.menuEl = document.querySelector('.js-header-menu');
        this.visibleClass = 'visible';
        this.hiddenClass = 'hidden';
        this.el.addEventListener('click', () => {
            if (!this.opened) {
                this.open();
            } else {
                this.close();
            }
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