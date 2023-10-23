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
const valBtn = document.querySelectorAll("input");
const lightMode = document.getElementById("lightmode");
const darkMode = document.getElementById("darkmode");

window.addEventListener("load", () => {
    document.getElementById("light").style.background = "rgba(255,255,255,0.6)";
});
console.log(valBtn);
themeBtn.addEventListener("click", (e) => {
    if (e.target.id === "dark") {
        e.target.style.background = "rgba(255, 255, 255, 0.6)";
        e.target.previousElementSibling.style.background = "rgba(255, 255, 255, 0.1)";
        // lightMode.style.display = "none";
        //darkMode.style.display = "block";
        alert("dark mode will be actived");
    } else {

        e.target.style.background = "rgba(255, 255, 255, 0.6)";
        e.target.nextElementSibling.style.background = "rgba(255, 255, 255, 0.1)";
        //lightMode.style.display = "block";
        //darkMode.style.display = "none";

        alert("light mode  will be actived");
    }
}, false)