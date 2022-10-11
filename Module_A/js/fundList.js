class FundList {
    constructor() {
        this.draw();
    }


    draw() {
        let box = document.querySelectorAll("#fundList .card canvas");
        let list = [80, 50, 40, 10];
        for (let i = 0; i < 4; i++) {
            let e = box[i];
            let ctx = e.getContext("2d");
            let time = 0;
            let timer = setInterval(() => {
                time += 1;
                if (time > list[i]) {
                    time = list[i];
                    this.render(ctx, time);
                    clearInterval(timer);
                } else {
                    this.render(ctx, time);
                }
            }, 1000 / 10);
        }
    }

    render(c, value) {
        const bias = Math.PI / 2;
        const rad = Math.PI * 2 * value / 100;
        c.clearRect(0, 0, 160, 160);
        c.beginPath();
        c.moveTo(80, 80);
        c.fillStyle = '#fff';
        c.arc(80, 80, 70, 0 - bias, rad - bias);
        c.closePath();
        c.fill();
        c.fillStyle = '#222';
        c.beginPath();
        c.arc(80, 80, 50, 0, Math.PI * 2);
        c.fill();

        c.font = '25px noto';
        c.fillStyle = "#fff";
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.fillText(value + "%", 80, 80);
    }



}
window.onload = function () {
    let a = new FundList();
}