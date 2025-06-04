const boton= document.getElementById("bar");
const barContainer= document.getElementById("bar-container");
const boton2= document.getElementById("bar2");

boton.addEventListener("click", () => {
  if (barContainer.style.left === "0px") {
    // Está abierto, cerrar
    barContainer.style.left = "-100vw";
    boton.className = "fa-solid fa-bars";
  } else {
    // Está cerrado, abrir
    barContainer.style.left = "0";
    boton.className = "fa-solid fa-x";
  }
});

boton2.addEventListener("click",()=>{
    barContainer.style.left = "-100vw";
    boton.className = "fa-solid fa-bars";
})