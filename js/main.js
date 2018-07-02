class Background {

    constructor() {
        this.img = document.querySelector('img');
    }

    change(n = 0) {
        this.id = setTimeout(() => {
            this.img.src = `images/train_0${n}_${(Background.random(10) === 10) ? 'off' : 'on'}.svg`;
            this.change((n) ? 0 : 1);
        }, 100);
    }

    stop() {
        clearTimeout(this.id);
    }

    static random(b, a = 0) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }
}

new Background().change();