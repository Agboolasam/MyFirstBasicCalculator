let disp = document.getElementById("display");
const themeBtns = document.getElementsByTagName("nav");



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
        location.reload();
    }
}

function calc() {
    disp.value = eval(disp.value);
}

function allclr() {
    disp.value = "0";
}


themeBtns.addEventListener("click", (e) => {
    e.target.style.background = "rgba(255, 255, 255, 0.6)";
})
