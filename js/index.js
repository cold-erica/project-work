import { LikeHandler } from './like';
import { Slider } from './slider';
import Swal from 'sweetalert2';


class Application {
    constructor() {
        this.slider = null;
    }

    start() {
        this.slider = new Slider();
        this.slider.start();
        this.setupFeedbackForm();
        new LikeHandler();
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
