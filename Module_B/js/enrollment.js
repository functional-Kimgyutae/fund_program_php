class Enrollment {
    constructor(){
        this.data = new Data();
        this.event();
        this.clear();
    }

    clear() {
        let dom = document.querySelector("#enrollment form");
        dom.querySelector(".number").value = "";
        dom.querySelector(".name").value = "";
        dom.querySelector(".date").value = "";
        dom.querySelector(".hour").value = "";
        dom.querySelector(".pay").value = "";
        dom.querySelector("textarea").value = "";
        dom.querySelector("#img").value = "";
        dom.querySelector(".imgview").value = "";
        dom.querySelector(".number").classList.remove("redborder");
        dom.querySelector(".name").classList.remove("redborder");
        dom.querySelector(".date").classList.remove("redborder");
        dom.querySelector(".hour").classList.remove("redborder");
        dom.querySelector(".pay").classList.remove("redborder");
        dom.querySelector(".imgview").classList.remove("redborder");
        dom.querySelector(".name-p").classList.add("d-n");
        dom.querySelector(".date-p").classList.add("d-n");
        dom.querySelector(".hour-p").classList.add("d-n");
        dom.querySelector(".img-p").classList.add("d-n");
        dom.querySelector(".pay-p").classList.add("d-n");
        this.random();
    }

    event() {
        let dom = document.querySelector("#enrollment form");
        dom.querySelector(".name").addEventListener("input",e=> {
            let reg = /(^[a-zA-Z가-힣 ]+)$/;
            if(!reg.test(e.target.value) || e.target.value.trim() == ""){
                dom.querySelector(".name-p").classList.remove("d-n");
            }else {
                dom.querySelector(".name-p").classList.add("d-n");
            }
        });
        
        dom.querySelector(".date").addEventListener("input",e=> {
            if(e.target.value == ""){
                dom.querySelector(".date-p").classList.remove("d-n");
            }else {
                dom.querySelector(".date-p").classList.add("d-n");
            }
        });

        dom.querySelector(".hour").addEventListener("input",e=> {
            if(""==e.target.value){
                dom.querySelector(".hour-p").classList.remove("d-n");
            }else {
                dom.querySelector(".hour-p").classList.add("d-n");
            }
        });

        dom.querySelector(".pay").addEventListener("input",e=> {
            let money = Math.floor(this.data.commaout(e.target.value));
            if(money <1 || isNaN(money)) {
                dom.querySelector(".pay-p").classList.remove("d-n");
            }else {
                dom.querySelector(".pay-p").classList.add("d-n");
                dom.querySelector(".pay").value = this.data.comma(money);
            }
        });

        dom.querySelector("#img").addEventListener("input", e=> {
            let file = dom.querySelector("#img").files[0].size;
            let name = e.target.value;
            let a = name.substr(name.length-3 , 3);
            console.log(a != "png" );
            if(file > 5 * 1024 * 1024 || (a !="png" && a!= "jpg")){
                dom.querySelector(".img-p").classList.remove("d-n");
                dom.querySelector("#img").value = "";
            }else {
                dom.querySelector(".img-p").classList.add("d-n");
                dom.querySelector(".imgview").value = name;
            }
        });
        dom.querySelector("button").addEventListener("click" , ()=> {
            let name = dom.querySelector(".name").value;
            let date = dom.querySelector(".date").value;
            let hour = dom.querySelector(".hour").value;
            let money = Math.floor(this.data.commaout(dom.querySelector(".pay").value));
            let reg = /(^[a-zA-Z가-힣 ]+)$/;
            let now = new Date();
            let old = new Date(date + " "+ hour);
            let f= false;
            let hourr = false;
            let datee = false;
            if(now > old) {
                this.data.alert("날짜가 지났습니다.");
                dom.querySelector(".date").classList.add("redborder");
                dom.querySelector(".hour").classList.add("redborder");
                hourr = true;
                datee = true;
                f = true;
            }else {
                dom.querySelector(".date").classList.remove("redborder");
                dom.querySelector(".hour").classList.remove("redborder");
            }
            if(date == "") {
                f = true;
                this.data.alert("날짜가 잘못됬거나 없습니다.");
                dom.querySelector(".date").classList.add("redborder");
            }else {
                if(!datee){
                    dom.querySelector(".date").classList.remove("redborder");
                }
            }
            if(hour == "") {
                f = true;
                this.data.alert("시간이 잘못됬거나 없습니다.");
                dom.querySelector(".hour").classList.add("redborder");
            }else {
                if(!hourr){
                    dom.querySelector(".hour").classList.remove("redborder");
                }
            }


            if(name.trim() == "" || !reg.test(name) ) {
                this.data.alert("창업펀드명이 비여있거나, 형식에 맞지 않습니다.");
                dom.querySelector(".name").classList.add("redborder");
                f = true;
            }else {
                dom.querySelector(".name").classList.remove("redborder");
            }
            if(money <1 || isNaN(money)) {
                this.data.alert("비여있거나, 자연수만 입력해주세요.");
                dom.querySelector(".pay").classList.add("redborder");
                f = true;
            }else {
                dom.querySelector(".pay").classList.remove("redborder");
            }

            if(!f){
                this.data.alertg("펀드가 등록되었습니다.");
                document.querySelector("header .back").click();
            }
        });
    }   


    random () {
        let str = "0";
        let char = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
        for (let i = 0; i < 4; i++) {
            str += char.charAt(Math.floor(Math.random() * char.length));
        }
        document.querySelector('#enrollment .number').value = str;
    }

}