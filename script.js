let disp = document.getElementById("display");
let disp1 = document.getElementById("display-dark");


function display(value) {
    if (disp.value != "0") {
        disp.value += value;
    } else {
        disp.value = value;
    }
}

function clr() {
    if (disp.value != "0") {
        disp.value = disp.value.toString().slice(0, -1);
    } else {
        allclr();
    }
    console.log(disp.value.toString());
}

function calc() {
    disp.value = eval(disp.value);
}

function allclr() {
    disp.value = "0";
}


const themeBtn = document.getElementById("theme");
const valBtn = document.querySelectorAll("input[type=button]");
const lightMode = document.getElementById("lightmode");
const darkMode = document.getElementById("darkmode");

window.addEventListener("load", () => {
    document.getElementById("light").style.background = "rgba(255,255,255,0.6)";
});
console.log(valBtn);
themeBtn.addEventListener("click", (e) => {
    if (e.target.id === "dark") {
        e.target.style.background = "rgba(255, 255, 255,0.4 )";
        e.target.previousElementSibling.style.background = "rgba(255, 255, 255, 0.1)";
        e.target.parentElement.style.background = "rgba(0,0,0,0.6)";
        document.getElementById("calc-base").style.backgroundColor = "rgb(1, 8, 32)";
        document.getElementById("calc-base").style.borderColor = "rgb(0, 0, 0)";
        document.querySelector(".calculator").style.background = "rgb(4, 8, 32, 0.9)";
        valBtn.forEach(element => {
            element.style.background = "rgb(0,0,0)";
            element.style.color = "rgb(255,255,255)";
        });
    } else {

        e.target.style.background = "rgba(255, 255, 255, 0.6)";
        e.target.nextElementSibling.style.background = "rgba(255, 255, 255, 0.2)";
        e.target.parentElement.style.background = "rgba(255,255,255,0.4)";
        document.getElementById("calc-base").style.backgroundColor = "rgb(179, 52, 52)";
        document.querySelector(".calculator").style.background = "rgb(179, 52, 52)";
        document.getElementById("calc-base").style.borderColor = "rgb(255, 255, 255)";
        valBtn.forEach(element => {
            element.style.background = "rgb(255,255,255)";
            element.style.color = "rgb(0,0,0)";
        });
    }
}, false)