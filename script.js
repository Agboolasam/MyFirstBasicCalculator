let disp = document.getElementById("display");



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