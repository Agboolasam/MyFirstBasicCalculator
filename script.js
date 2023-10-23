let disp = document.getElementById("display");
<<<<<<< HEAD
let themeBtns = document.getElementById("theme");
=======
const themeBtns = document.getElementsByTagName("nav");

>>>>>>> dfc426e113bccc9fd5265153d07e3dbf107ac205


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


<<<<<<< HEAD
let darkThm = document.getElementById("darkCheck");
let lightThm = document.getElementById("lightCheck");
themeBtns.addEventListener("click", (e) => {
    if (e.target.id === "darkCheck") {
        e.target.style.background = "rgba(255, 255, 255, 0.6)";
        darkThm.checked = true;
    } else if (e.target.id === "darkCheck") {
        e.target.style.background = "rgba(255, 255, 255, 0.6)";
        lightThm.checked = true;
    }

})
=======
themeBtns.addEventListener("click", (e) => {
    e.target.style.background = "rgba(255, 255, 255, 0.6)";
})
>>>>>>> dfc426e113bccc9fd5265153d07e3dbf107ac205
