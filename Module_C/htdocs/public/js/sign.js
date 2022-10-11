class Sign {
   constructor() {
        this.start = {x:0,y:0};
        this.isDraw = false;
        this.isSi = false;
        this.canvas = document.querySelector("#buy .can");
        this.ctx = this.canvas.getContext("2d");
        this.addEvent();
    }

    addEvent () {
        let c = this.canvas;
        c.addEventListener("mousedown",this.startDraw);
        c.addEventListener("mousemove",this.drawMove);
        c.addEventListener("mouseup",this.endDraw);
    }

    startDraw = e=> {
        const {offsetX:x,offsety:y} = e;
        this.start = {x,y};
        this.isDraw = true;
    }

    drawMove = e => {
        if(!this.isDraw)return;
        console.log('a');
        let c = this.ctx;
        let s = this.start;
        const {offsetX:x,offsetY:y} = e;
        c.beginPath();
        c.fillStyle='#000';
        c.lineWidth = document.querySelector(".size").value;
        console.log(s);
        c.lineCap='round';
        c.moveTo(s.x,s.y);
        c.lineTo(x, y);
        c.stroke();
        c.closePath();
        this.start = {x,y};
        this.isSi = true;
    }
    endDraw = e=> {
        this.isDraw = false;
    }

    isSign() {
        return this.isSi;
    }
}