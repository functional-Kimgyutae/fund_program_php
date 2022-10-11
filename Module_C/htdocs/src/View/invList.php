<section id="invList" class="now">
    <div class="visual">
        <div class="text">
            <h2>투자자목록</h2>
            <p>메인페이지 -> 투자자목록</p>
        </div>
    </div>
    <h2>투자자목록</h2>
    <div class="div">
        <select name="" id="">
            <option value="">최근등록순</option>
            <option value="">펀드별</option>
            <option value="">투자자별</option>
        </select>
        <table class="table">
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
    <div class="pagination d-f j-c">
        <li class="page-item"><a href="#" class="page-link">&lt;</a></li>
        <li class="page-item active"><a href="#" class="page-link">1</a></li>
        <li class="page-item"><a href="#" class="page-link">2</a></li>
        <li class="page-item"><a href="#" class="page-link">3</a></li>
        <li class="page-item"><a href="#" class="page-link">4</a></li>
        <li class="page-item"><a href="#" class="page-link">5</a></li>
        <li class="page-item"><a href="#" class="page-link">6</a></li>
        <li class="page-item"><a href="#" class="page-link">7</a></li>
        <li class="page-item"><a href="#" class="page-link">8</a></li>
        <li class="page-item"><a href="#" class="page-link">9</a></li>
        <li class="page-item"><a href="#" class="page-link">10</a></li>
        <li class="page-item"><a href="#" class="page-link">&gt;</a></li>
    </div>
</section>



<script>
    let a = null;
    window.onload = function() {
        a = new InvList();
    }
    class InvList {
        constructor() {
            this.data = new Data();
            let fundList = [];
            fundList = JSON.parse(JSON.stringify(<?= json_encode($fundList) ?>));
            let invList = JSON.parse(JSON.stringify(<?= json_encode($invList) ?>));
            this.data.loadData(fundList, invList);
            setTimeout(() => {
                this.fundList = this.data.giveFund();
                this.userList = this.data.giveUser();
                this.draw();
            }, 100);
        }

        draw() {
            let box = document.querySelector("#invList tbody");
            box.innerHTML = "";
            let max = 10;
            if(this.userList.length < 10) {
                max = this.userList.length;
            }   
            for (let i = 0; i < max; i++) {
                let f = this.userList[i];
                let tr = document.createElement("tr");
                tr.innerHTML = `
            <th class="w-10">${f.number}</th>
            <td class="w-20 font" title="${f.fundName}">${f.fundName}</td>
            <td class="w-20 font"><a href="/user?email=${f.email}">${f.name}</a></td>
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
</script>