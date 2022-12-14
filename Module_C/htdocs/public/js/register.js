let a = null;
class Register {
    constructor() {
        this.data = new Data();
        this.event();
        this.clear();
    }

    clear() {
        let dom = document.querySelector("#register form");
        dom.querySelector(".email").value = "";
        dom.querySelector(".name").value = "";
        dom.querySelector(".password").value = "";
        dom.querySelector(".passwordc").value = "";
        dom.querySelector(".email-p").classList.add("d-n");
        dom.querySelector(".name-p").classList.add("d-n");
        dom.querySelector(".password-p").classList.add("d-n");
        dom.querySelector(".passwordc-p").classList.add("d-n");
        dom.querySelector(".email").classList.remove("redborder");
        dom.querySelector(".name").classList.remove("redborder");
        dom.querySelector(".password").classList.remove("redborder");
        dom.querySelector(".passwordc").classList.remove("redborder");
    }


    event() {
        let dom = document.querySelector("#register form");
        dom.querySelector(".name").addEventListener("input", e => {
            if (e.target.value.trim() == "") {
                dom.querySelector(".name-p").classList.remove("d-n");
            } else {
                dom.querySelector(".name-p").classList.add("d-n");
            }
        });
        dom.querySelector(".email").addEventListener("input", e => {
            let reg = /(^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+(\.[a-z]{2,3}))$/;
            if (!reg.test(e.target.value) || e.target.value.trim() == "") {
                dom.querySelector(".email-p").classList.remove("d-n");
            } else {
                dom.querySelector(".email-p").classList.add("d-n");
            }
        });

        dom.querySelector(".password").addEventListener("input", e => {
            let reg = /(^[a-zA-Z0-9!@#$%^&*()]+)$/;
            let isn = e.target.value.search(/[0-9]/g);
            let ise = e.target.value.search(/[a-zA-Z]/g);
            let iss = e.target.value.search(/[!@#$%^&*()]/g);
            console.log(isn, ise, iss);
            if (!reg.test(e.target.value) || e.target.value.trim() == "" || isn < 0 || ise < 0 || iss < 0) {
                dom.querySelector(".password-p").classList.remove("d-n");
            } else {
                dom.querySelector(".password-p").classList.add("d-n");
            }
            let pass = dom.querySelector(".passwordc").value;
            if (e.target.value != pass) {
                dom.querySelector(".passwordc-p").classList.remove("d-n");
            } else {
                dom.querySelector(".passwordc-p").classList.add("d-n");
            }
        });
        dom.querySelector(".passwordc").addEventListener("input", e => {
            let pass = dom.querySelector(".password").value;
            if (e.target.value != pass || e.target.value.trim() == "") {
                dom.querySelector(".passwordc-p").classList.remove("d-n");
            } else {
                dom.querySelector(".passwordc-p").classList.add("d-n");
            }
        });
    }

    check() {
        let dom = document.querySelector("#register form");
        let email = dom.querySelector(".email").value;
        let name = dom.querySelector(".name").value;
        let password = dom.querySelector(".password").value;
        let passwordc = dom.querySelector(".passwordc").value;
        let email_reg = /(^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+(\.[a-z]{2,3}))$/;
        let reg = /(^[a-zA-Z0-9!@#$%^&*()]+)$/;
        let isn = password.search(/[0-9]/g);
        let ise = password.search(/[a-zA-Z]/g);
        let iss = password.search(/[!@#$%^&*()]/g);
        let f = true;
        if (!email_reg.test(email) || email.trim() == "") {
            f = false;
            this.data.alert("????????? ????????? ??????????????????.");
            dom.querySelector(".email").classList.add("redborder");
        } else {
            dom.querySelector(".email").classList.remove("redborder");
        }

        if (!reg.test(password) || password.trim() == "" || isn < 0 || ise < 0 || iss < 0) {
            f = false;
            this.data.alert("??????,??????,????????? ?????????????????????.");
            dom.querySelector(".password").classList.add("redborder");
        } else {
            dom.querySelector(".password").classList.remove("redborder");
        }
        if (name.trim() == "") {
            f = false;
            this.data.alert("????????? ??????????????????.");
            dom.querySelector(".name").classList.add("redborder");
        } else {
            dom.querySelector(".name").classList.remove("redborder");
        }

        if (passwordc.trim() == "" || passwordc != password) {
            f = false;
            this.data.alert("??????????????? ???????????? ????????????.");
            dom.querySelector(".passwordc").classList.add("redborder");
        } else {
            dom.querySelector(".passwordc").classList.remove("redborder");
        }

        if (f) {
            return true;
        }
        return false;
    }
}

window.onload = function(){
    a = new Register();
}

function check() {
    return a.check();
}