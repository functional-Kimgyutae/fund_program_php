class Data {
    constructor() {
        this.fundList = [];
        this.user = [];
        this.userList = [];
    }

    loadData() {
        fetch("/js/fund.json")
        .then(res=> res.json())
        .then(json => {
            this.fundList = json;
            this.percent();
        });
    }
    
    percent() {
        this.fundList = this.fundList.map(f=> {
            f.percent = Math.round(f.current * 100 / f.total * 100)/100;
            f.investorList.map(e=> {
                e.name = "홍길동";
                e.fundName = f.name;
                e.number = f.number;
                e.percent = Math.round(e.pay * 100 / f.total * 100)/100;
                this.user.push(e);
            });
            return f;
        }).sort((a,b)=> b.percent - a.percent);
        this.orderUser();
    }

    orderUser() {
        this.user.map(f=> {
            let user = this.userList.find(e=> f.number == e.number && f.email == e.email);
            if(user != undefined){
                f.pay += user.pay;
                f.percent += user.percent;
            }else {
                const {email,pay,datetime,name,fundName,number,percent} = f;
                this.userList.push({email,pay,datetime,name,fundName,number,percent});
            }
        });       
        this.userList.sort((a,b)=> new Date(b.datetime) - new Date(a.datetime));
    }

    giveFund() {
        return this.fundList;
    }

    giveUser() {
        return this.userList;
    }

    comma(str) {
        str = str*1;
        return str.toLocaleString();
    }
    commaout(str) {
        return str.split(",").join("");
    }

    alert(str) {
        let box = document.querySelector("#alert");
        let dom = document.createElement("div");
        dom.id = "alert";
        dom.classList.add("alertbox","d-f","p-a","j-c","a-l");
        dom.innerHTML = `
        <p class="font" title="${str}">${str}</p>
        <button class="b p-a">×</button>`;
        box.prepend(dom);
        setTimeout(() => {
            dom.remove();
        }, 3000);
        dom.querySelector("button").addEventListener("click",()=> {dom.remove()});
    }
    alertg(str) {
        let box = document.querySelector("#alert");
        let dom = document.createElement("div");
        dom.id = "alert";
        dom.classList.add("alertbox" ,"d-f","p-a" ,"j-c", "a-l","alertg");
        dom.innerHTML = `
        <p class="font" title="${str}">${str}</p>
        <button class="b p-a">×</button>`;
        box.prepend(dom);
        setTimeout(() => {
            dom.remove();
        }, 3000);
        dom.querySelector("button").addEventListener("click",()=> {dom.remove()});
    }



}