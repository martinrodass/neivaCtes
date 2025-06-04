fetch('productos.json')
  .then(res => res.json())
  .then(productos => {
    const contenedor = document.getElementById("productos-container");

    productos.forEach(producto => {
      const div = document.createElement("div");
      div.className = "producto";

      let cuotasHTML = '';
      if (producto.cuotas === 1) {
        cuotasHTML = `<p class="oferta">3 cuotas <br>sin interés!!</p>`;
      }

      if (producto.descuento !== 0) {
        div.innerHTML = `
          <div class="container-img-product">
            <img src="${producto.img}" alt="Imagen de ${producto.nombre}">
          </div>
          <div class="container-info-product">
            <h4>${producto.nombre}</h4>
            <p class="descuento">$<del>${producto.precio.toLocaleString("es-AR")}</del> <span>${producto.descuento * 1}%OFF</span> </p>
            <p class="precio">$${(producto.precio * producto.descuento).toLocaleString("es-AR")}</p>
            <p class="descripcion">${producto.descripcion.replace(/\n/g, "<br>")}</p>
            ${cuotasHTML}
            <a class="comprar" href="https://wa.me/5493794860589?text=Hola!%20Estoy%20interesado%20en%20${encodeURIComponent(producto.nombre)}" target="_blank">comprar</a>
          </div>
        `;
      } else {
        div.innerHTML = `
          <div class="container-img-product">
            <img src="${producto.img}" alt="Imagen de ${producto.nombre}">
          </div>
          <div class="container-info-product">
            <h4>${producto.nombre}</h4>
            <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>
            <p class="descripcion">${producto.descripcion.replace(/\n/g, "<br>")}</p>
            ${cuotasHTML}
            <a class="comprar" href="https://wa.me/5493794860589?text=Hola!%20Estoy%20interesado%20en%20${encodeURIComponent(producto.nombre)}" target="_blank">comprar</a>
          </div>
        `;
      }

      contenedor.appendChild(div);
    });
  })
  .catch(error => console.error("Error cargando productos:", error));
