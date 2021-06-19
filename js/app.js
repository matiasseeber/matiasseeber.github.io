const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("navMenu");

let navActive = false;

hamburger.onclick = function() {
    if (!navActive) {
        hamburger.classList.toggle("active");
        menu.classList.add("navActive");
        navActive = true;
    } else {
        hamburger.classList.remove("active");
        menu.classList.remove("navActive");
        navActive = false;
    }
}

let slider = document.getElementById("sliderVertical");

let cont = 0;

function autoSlider(slider) {
    let slides = slider.children;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateY(+" + cont + "00%)";
    }
    cont++;
    if (cont > slides.length - 1)
        cont = 0;
}

setInterval(function() {
    autoSlider(slider);
}, 2000)

let form = document.getElementById("formContact");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let tema = document.getElementById("Tema");
let comentarios = document.getElementById("comentarios");
let enviar = document.getElementById("enviar");

function validationFormContact() {
    let submit = true;
    if (nombre.value === "") {
        submit = false;
        nombre.classList.add("complete");
    } else {
        nombre.classList.remove("complete");
    }
    if (apellido.value === "") {
        submit = false;
        apellido.classList.add("complete");
    } else {
        apellido.classList.remove("complete");
    }
    if (email.value === "") {
        submit = false;
        email.classList.add("complete");
    } else {
        email.classList.remove("complete");
    }
    if (tema.value === "") {
        submit = false;
        tema.classList.add("complete");
    } else {
        tema.classList.remove("complete");
    }
    return submit;
}

form.onsubmit = function() {
    return validationFormContact();
}