class Index {
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
        let box = document.querySelector("#index .cardbox");
        box.innerHTML = '';
        let i = 0;
        this.fundList.forEach(item=> {
            let now = new Date();
            let old = new Date(item.endDate);
            if(now < old&& i <4) {
                let dom = document.createElement("div");
                dom.classList.add("card");
                dom.innerHTML = `
                <h2 class="font-s" title="${item.name}">${item.name}</h2>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width:0%;"></div>
                </div>
                <p class="font-s" title="${item.endDate}까지 ${this.data.comma(item.current)}원 /${this.data.comma(item.total)}원">${item.endDate}까지 <br> ${this.data.comma(item.current)}원 /${this.data.comma(item.total)}원</p>
                <button class="listView">상세보기</button>`;
                dom.querySelector(".listView").addEventListener("click" , ()=> { this.listView(item)});
                box.append(dom);
                setTimeout(() => {
                    dom.querySelector(".progress-bar").style = `transition:all ${item.percent / 10}s;width : ${item.percent}%;`;
                }, 100);
            }
        });
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