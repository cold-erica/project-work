import '../css/style.scss';

import { LikeHandler } from './like';
import { Slider } from './slider';


class Application {
    constructor() {
        this.slider = null;
    }

    start() {
        this.slider = new Slider();
        this.slider.start();

        new LikeHandler();
    }

}


document.addEventListener('DOMContentLoaded', () => {
    const app = new Application();
    app.start();
});
