//funcion para verificar si el producto q se le pasa tiene cuotas
function verificarCuotas(prod){
  let cuotasHTML = '';
  if (prod.cuotas === 1) {
        cuotasHTML = `<p class="oferta">3 cuotas <br>sin interés!!</p>`;
      }
      return cuotasHTML;
}


//funcion para saber si hay disponibilidad

function verificarDisponibilidad(prod){
  if(prod.stock < 1){
  return `<p class="disponibilidad">sin stock consultar</p>`;
  }else{
    if(prod.stock === 1){
      return `<p class="disponibilidad dis">ultima unidad</p>`
    }else{
 
      return `<p class="disponibilidad dis">ultimas ${prod.stock} unidades</p>`
    };
  }
}



function printProductos(container,pCategoria, todo){
//trae el archivio
fetch('productos.json')
//entonces convierte la respuesta en objetos
  .then(res => res.json())
//entonces se accede a los objetos como objeto llamado productos
  .then(productos => {
    const contenedor = document.getElementById(container);

    //para cada producto en productos va a hacer esto
    productos.forEach(producto => {
      //seleccion por categoria

    if(producto.categoria == pCategoria || todo){
          const div = document.createElement("div");
      div.className = "producto";

      // verifica si el producto seleccionado en el momento se puede en cuotas y disponibilidad
      let cuotasHTML =verificarCuotas(producto);
      let disponibilidad = verificarDisponibilidad(producto);
      
      //bloque de cracion de divs solo si tiene descuento
      if (producto.descuento !== 0) {
          div.innerHTML = `
          <div class="container-img-product">
            <img src="${producto.img}" alt="Imagen de ${producto.nombre}">
          </div>
          <div class="container-info-product">
            <h4>${producto.nombre}</h4>
            <p class="descuento">$<del>${producto.precio.toLocaleString("es-AR")}</del> <span>${producto.descuento * 100}%OFF</span> </p>
            <p class="precio">$${(producto.precio * producto.descuento).toLocaleString("es-AR")}</p>
            <p class="descripcion">${producto.descripcion.replace(/\n/g, "<br>")}</p>
            ${disponibilidad}
            ${cuotasHTML}
            <a class="comprar" href="https://wa.me/5493794860589?text=Hola!%20Estoy%20interesado%20en%20${encodeURIComponent(producto.nombre)}" target="_blank">consultar</a>
          </div>
        `;
      } 
      // bloque solo si no tiene descuento
      else { 
        div.innerHTML = `
          <div class="container-img-product">
            <img src="${producto.img}" alt="Imagen de ${producto.nombre}">
          </div>
          <div class="container-info-product">
            <h4>${producto.nombre}</h4>
            <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>
            <p class="descripcion">${producto.descripcion.replace(/\n/g, "<br>")}</p>
            ${disponibilidad}
            ${cuotasHTML}
            <a class="comprar" href="https://wa.me/5493794860589?text=Hola!%20Estoy%20interesado%20en%20${encodeURIComponent(producto.nombre)}" target="_blank">consultar</a>
          </div>
        `;
      }
      //agregar div al contenedor
      contenedor.appendChild(div);
       }
    });
  })
  .catch(error => console.error("Error cargando productos:", error));
}

printProductos("descartables","descartable");

printProductos("recargables","recargable");