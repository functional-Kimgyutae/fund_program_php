class All {
    constructor() {
        this.pageList = document.querySelectorAll(".one > section");
        this.nowPage = 0;
        this.index = new Index();
        this.enrollment = new Enrollment();
        this.fundList = new FundList();
        this.invList = new InvList();
        this.register = new Register();
        document.querySelector("header").addEventListener("click", this.menuClick);
    }

    menuClick = e => {
        let menuIdx = e.target.dataset.idx;
        if(menuIdx == undefined || menuIdx == this.nowPage) return;
        this.pageList[this.nowPage].classList.remove("now");
        this.pageList[menuIdx].classList.add("now");
        this.nowPage = menuIdx;
        let dom = document.querySelector(".one");
        switch (this.nowPage) {
            case "0":
                dom.style.height = "100vh";
                break;
            case "1":
                this.enrollment.clear();
                dom.style.height = "100vh";
                break;
            case "2":
                dom.style.height = "123vh";
                break;
            case "3":
                dom.style.height = "100vh";
                break;
            case "4":
                this.register.clear();
                dom.style.height = "100vh";
                break;
            default:
                break;

        }
    };
}

window.onload = function() {
    let a = new All();
}