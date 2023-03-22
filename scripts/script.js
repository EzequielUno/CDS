window.sr = ScrollReveal({ reset: true });

sr.reveal(".show-once", {
    reset: false
  });

  sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});

sr.reveal('#img-1', {
    duration: 2000,
    origin: 'rigth',
    distance: '300px',
    delay: 1000
});

sr.reveal('#text-1', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});

sr.reveal('#text-2', {
    duration: 2000,
    origin: 'rigth',
    distance: '300px',
    delay: 1000
});

sr.reveal('#img-2', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('#img-3-i', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    delay: 1000
});

sr.reveal('#img-3-d', {
    duration: 2000,
    origin: 'rigth',
    distance: '300px',
    delay: 1500
});

sr.reveal('#text-3', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});


let anclas = document.querySelectorAll("a.nav-link");
let lista = document.querySelector("#navbarCDS");
let ocultar = () => {
    lista.classList.remove("show");
}


for(i of anclas){
    i.addEventListener("click", ocultar)
};