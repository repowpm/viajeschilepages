
const headerNode = document.getElementsByClassName("navbar_altura")[0];

function marginTopAuto(entries) {
  const elemento_entry = entries[0];
  if (elemento_entry.target) {
    const mainNode = document.getElementsByTagName("main")[0];
    mainNode.style.paddingTop = `${elemento_entry.target.clientHeight}px`;
  }
}


const resizeObserver = new ResizeObserver(marginTopAuto);


resizeObserver.observe(headerNode);

marginTopAuto([headerNode]);

function selectoresItemsMenu(evento) {

  const contenedorItemsMenu = document.querySelector(".navbar-nav");
  const itemsMenu = contenedorItemsMenu.children;
  for (let itemli of itemsMenu) {
    itemli.classList.remove("estilo_menu");
  }

  const elementoSeleccionado = evento.target;

  elementoSeleccionado.parentElement.classList.add("estilo_menu");

  if (window.innerWidth < 576) {
    document.querySelector(".navbar-toggler").click();
  }
}

const contenedorItemsMenu = document.querySelector(".navbar-nav");
const itemsMenu = contenedorItemsMenu.children;
for (let itemli of itemsMenu) {
  itemli.children[0].addEventListener("click", selectoresItemsMenu);
}


const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const tooltipNombreFooter = document.querySelector(".tooltip_nombre");

function toolTipPersonalizado(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    trigger: "hover",
    placement: "bottom",
    template:
      '<div class="tooltip tooltipNombreFooter" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  });
}
toolTipPersonalizado(tooltipNombreFooter);


function scrollToSection(evento) {
  evento.preventDefault();

  const alturaHeader =
    document.getElementsByClassName("navbar_altura")[0].offsetHeight;

  var targetElemento = document.getElementById(
    evento.target.getAttribute("href").substring(1)
  );

  if (targetElemento) {
    
    var offset = targetElemento.offsetTop - alturaHeader;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
}

for (let itemli of itemsMenu) {
  itemli.children[0].addEventListener("click", scrollToSection);
}

window.onscroll = function () {
  mostrarOcultarBoton();
};

function mostrarOcultarBoton() {
  const botonScroll = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botonScroll.style.opacity = "1";
  } else {
    botonScroll.style.opacity = "0";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


const botonAutor = document.querySelector(".popovernombre");

function popOverAutor(popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl, {
    trigger: "click",
    placement: "top",
    html: true,
    template:
      '<div class="popover popoverautor" role="tooltip"><h3 class="popover-header fw-bold text-dark"></h3><div class="popover-body"></div><div class="arrow"></div></div>',
  });
}

popOverAutor(botonAutor);


const formElement = document.querySelector("#contacto form");

formElement.addEventListener("submit", (evento) => {
  evento.preventDefault();
  window.alert("Felicidades, hemos recibido sus datos, pronto lo contactaremos!");
});
