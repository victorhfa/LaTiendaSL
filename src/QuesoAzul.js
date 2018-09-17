class QuesoAzul extends Producto {
  constructor (_producto) {
    super(_producto.nombre, _producto.caducidad, _producto.valor)
  }

  // Actualiza el producto
  updateProduct () {
    this.updateQuality()
    this.updateExpiration()
  }

  // Actualiza la caducidad
  updateExpiration () {
  }

  // Actualiza la calidad
  updateQuality () {
    this.checkQuality()
  }

  // Comprueba que la calidad este dentro de los limites especificados y la ajusta
  checkQuality () {
    if (this.valor < QUALITY_MIN) {
      this.valor = QUALITY_MIN
      console.log('The product ' + this.name + ' had a lower quality than allowed and has been modified')
    }
  }
}
