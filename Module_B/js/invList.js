class InvList {
    constructor() {
        this.data = new Data();
        this.data.loadData();
        setTimeout(() => {
            this.userList = this.data.giveUser();
            this.draw();
        }, 100);
    }

    draw() {
        let box = document.querySelector("#invList tbody");
        box.innerHTML = "";
        for(let i = 0; i< 5; i++) {
            let f = this.userList[i];
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
            box.append(tr);
        }
    }

}