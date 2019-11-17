import { LikeHandler } from './like';
import { Slider } from './slider';
import { HumburgerMenu } from './humburger';
import Swal from 'sweetalert2';


class Application {
    constructor() {
        this.slider = null;
        this.menu = null;
    }

    // метод для запуска приложения
    start() {
        // создаем слайдер
        this.slider = new Slider();
        // запускаем слайдер
        this.slider.start();
        // ставим обработчики на форму
        this.setupFeedbackForm();
        // класс для обработки нажатий на кнопки лайков
        new LikeHandler();
        // меню гамбургера
        this.menu = new HumburgerMenu();
        // вешаем события закрытия меню гамбургера по клику не на него
        this.setupEvents();
    }

    setupEvents() {
        document.addEventListener('click', (e) => {
            const isButton = (
                e.target.classList.contains('js-humburger-menu') > 0
                || e.target.classList.contains('js-humburger-button') > 0
            );
            if (!isButton) {
                this.menu.close();
            }
        });
    }

    setupFeedbackForm() {
        const el = document.querySelector('.js-form-button');
        el.addEventListener('click', (e) => {
            const name = document.querySelector('.js-form-name').value;
            const email = document.querySelector('.js-form-email').value;
            const contact = document.querySelector('.js-form-contact').value;

            if (!name || !email || !contact) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Not all fields filled',
                    icon: 'error',
                    confirmButtonText: 'Got it'
                });
                return;
            }

            Swal.fire({
                title: 'Success!',
                text: `Hello ${name}, your feedback is sent to our support wait an answer to ${email}`,
                icon: 'success',
                confirmButtonText: 'Cool'
            });

        })
    }

}


document.addEventListener('DOMContentLoaded', () => {
    const app = new Application();
    app.start();
});
