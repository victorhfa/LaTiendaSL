function Producto(nombre, caducidad, valor) {
  this.nombre = nombre;
  this.caducidad = caducidad;
  this.valor = valor;
}

var productos = []

function actualizarProductos() {
  for (var i = 0; i < productos.length; i++) {
    if (productos[i].nombre != 'Botella Vino Tinto' && productos[i].nombre != 'Acceso VIP Eric Mauller') {
      if (productos[i].valor > 0) {
        if (productos[i].nombre != 'Queso Azul') {
          productos[i].valor = productos[i].valor - 1
        }
      }
    } else {
      if (productos[i].valor < 50) {
        productos[i].valor = productos[i].valor + 1
        if (productos[i].nombre == 'Acceso VIP Eric Mauller') {
          if (productos[i].caducidad < 11) {
            if (productos[i].valor < 50) {
              productos[i].valor = productos[i].valor + 1
            }
          }
          if (productos[i].caducidad < 6) {
            if (productos[i].valor < 50) {
              productos[i].valor = productos[i].valor + 1
            }
          }
        }
      }
    }
    if (productos[i].nombre != 'Queso Azul') {
      productos[i].caducidad = productos[i].caducidad - 1;
    }
    if (productos[i].caducidad < 0) {
      if (productos[i].nombre != 'Botella Vino Tinto') {
        if (productos[i].nombre != 'Acceso VIP Eric Mauller') {
          if (productos[i].valor > 0) {
            if (productos[i].nombre != 'Queso Azul') {
              productos[i].valor = productos[i].valor - 1
            }
          }
        } else {
          productos[i].valor = productos[i].valor - productos[i].valor
        }
      } else {
        if (productos[i].valor < 50) {
          productos[i].valor = productos[i].valor + 1
        }
      }
    }
  }
}
