class FundList {
    constructor() {
        this.data = new Data();
        this.data.loadData();
        setTimeout(() => {
            this.fundList = this.data.giveFund();
            this.userList = this.data.giveUser();
            this.draw();
        }, 100);       
    }


    draw() {
        let box = document.querySelector("#fundList .cardbox");
        box.innerHTML = "";
        let a = 0;
        this.fundList.forEach(i => {
            a++;
            let now = new Date();
            let old = new Date(i.endDate);
            
            let dom = document.createElement("div");
            dom.classList.add("card");
            if(now < old) {
                dom.innerHTML = `
                <div class="img">
                <img src="images/sample${a+2}.jpg" alt="">
                </div>
                <div class="text">
                    <p class="font-s" title="${i.name}">${i.name}</p>
                </div>
                <div class="canvas">
                    <p>${i.number}</p>
                    <canvas width="160" height="160"></canvas>
                    <p class="font-s" title="${i.endDate}까지 ${this.data.comma(i.current)}원 /${this.data.comma(i.total)}원">${i.endDate}까지 <br> ${this.data.comma(i.current)}원 /${this.data.comma(i.total)}원</p>
                    <div class="btnbox">
                        <button class="gobuy">투자하기</button>
                        <button class="listView">상세보기</button>
                    </div>
                </div>`;
                dom.querySelector(".gobuy").addEventListener("click" ,()=> {this.popup(i)});
            }else {
                dom.innerHTML = `
                <div class="img">
                <img src="images/sample${a+2}.jpg" alt="">
                </div>
                <div class="text">
                    <p class="font-s" title="${i.name}">${i.name}</p>
                </div>
                <div class="canvas">
                    <p>${i.number}</p>
                    <canvas width="160" height="160"></canvas>
                    <p class="font-s" title="${i.endDate}까지 ${this.data.comma(i.current)}원 /${this.data.comma(i.total)}원">${i.endDate}까지 <br> ${this.data.comma(i.current)}원 /${this.data.comma(i.total)}원</p>
                    <div class="btnbox">
                        <button >모집완료</button>
                        <button class="listView">상세보기</button>
                    </div>
                </div>`;
            }
            dom.querySelector(".listView").addEventListener('click',()=> {this.listView(i)});
            box.append(dom);
            let ctx = dom.querySelector("canvas").getContext("2d");
            let move = false;
            dom.addEventListener("mouseover",()=> {
                if(!move){
                    move = true;
                    let time = 0;
                    let timer = setInterval(() => {
                        time += 1;
                        if(time > i.percent) {
                            time = i.percent;
                            this.render(ctx,time);
                            clearInterval(timer);
                            move = false;
                        }else {
                            this.render(ctx,time);
                        }
                    }, 1000/10);
                }
            });
        });
    }

    popup(i) {
        let box = document.querySelector("body");
        let dom = document.createElement("div");
        dom.classList.add("popup");
        dom.id = "buy";
        dom.innerHTML = `
        <form action="/buy" method="POST" class="m-a" onsubmit="return false;" >
        <li><h2>투자하기</h2></li>
        <li><input type="text" readonly name="number" class="number" value="${i.number}"></li>
        <li><input type="text" readonly name="fundName" class="fundName" value="${i.name}"></li>
        <li><input type="text" readonly name="name" class="name" value="홍길동"></li>
        <li>
            <input type="text" name="pay" class="pay">
            <p class="alerttext d-n pay-p">자연수만 입력하세요.</p>
        </li>
        <li>
            <canvas width="260" height="90" class="can"></canvas>
            <input type="range" max="10" min="1" class="size">
        </li>
        <li>
            <button class="out">취소</button>
            <button class="bying">투자</button>
        </li>
        </form>`;
        box.append(dom);
        let sign = new Sign();
        this.buy(sign,i,dom);
        box.querySelector(".out").addEventListener("click",()=> {dom.remove()});
    }

    buy(sign,i,dom) {
        dom.querySelector(".pay").addEventListener("input", e => {
            let money = Math.floor(this.data.commaout(e.target.value));
            console.log(money);
            if(money <1 || isNaN(money)) {
                dom.querySelector(".pay-p").classList.remove("d-n");
            }else {
                dom.querySelector(".pay-p").classList.add("d-n");
                if(money > i.total - i.current ) {
                    money = i.total - i.current;
                }
                dom.querySelector(".pay").value = this.data.comma(money);
            }
        });
        dom.querySelector(".bying").addEventListener("click", ()=> {
            let money = Math.floor(this.data.commaout(dom.querySelector(".pay").value));
            let f = true;
            if(money < 1|| isNaN(money)) {
                dom.querySelector(".pay").classList.add("redborder");
                f = false;
                this.data.alert("공백이거나, 자연수만 가능합니다.");
            }else {
                dom.querySelector(".pay").classList.remove("redborder");
            }
            if(!sign.isSign) {
                f = false;
                dom.querySelector(".can").classList.add("redborder");
                this.data.alert("사인이 필요합니다.");
            }else {
                dom.querySelector(".can").classList.remove("redborder");
            }
            if(f){
                dom.remove();
                this.data.alertg("투자가 되었습니다.");
            }
        });

    }


    render(c,value) {
        const bias = Math.PI / 2;
        const rad = Math.PI * 2 * value / 100;
        c.clearRect(0,0,160,160);
        c.beginPath();
        c.moveTo(80, 80);
        c.fillStyle='#fff';
        c.arc(80, 80, 70, 0 - bias, rad - bias);
        c.closePath();
        c.fill();
        c.fillStyle='#222';
        c.beginPath();
        c.arc(80, 80, 50, 0, Math.PI * 2);
        c.fill();
        
        c.font='25px noto';
        c.fillStyle = "#fff";
        c.textAlign='center';
        c.textBaseline='middle';
        c.fillText(value + "%", 80, 80);
    }

    listView(item) {
        let box = document.querySelector("body");
        let dom = document.createElement("div");
        dom.classList.add("popup");
        dom.innerHTML = `
        <div>
            <h2>투자자목록(<a href="#">${item.owner}</a>)</h2>
            <div class="btn">×</div>
            <div class="div">
                <table class="table" style="table-layout:fixed">
                    <thead>
                        <tr>
                            <th class="w-10">펀드번호</th>
                            <th class="w-20">창업펀드명</th>
                            <th class="w-20">투자자명</th>
                            <th class="w-20">투자금액</th>
                            <th class="w-20">투자지분</th>
                            <th class="w-10"></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>`;
        dom.querySelector(".btn").addEventListener("click",()=> {dom.remove()});
        let i = 0;
        this.userList.map(f=> {
            if(item.number == f.number) {
                let tr = document.createElement("tr");
                tr.innerHTML = `
                <th class="w-10">${f.number}</th>
                <td class="w-20 font" title="${f.fundName}">${f.fundName}</td>
                <td class="w-20 font">홍길동</td>
                <td class="w-20 font" title="${this.data.comma(f.pay)}원">${this.data.comma(f.pay)}원</td>
                <td class="w-20">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped" role="progressbar" style="width:${f.percent}%;"></div>
                    </div>
                </td>
                <td class="w-10 font">${f.percent}%</td>`;
                dom.querySelector("tbody").append(tr);
                i++;
                if(i > 4) {
                    dom.querySelector(".div").classList.add("scroll");
                }else {
                    dom.querySelector(".div").classList.remove("scroll");
                }
            }
        })
        box.append(dom);
        
    }


}