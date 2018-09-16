class Vino extends Producto {
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
    this.caducidad--
  }

  // Actualiza la calidad
  updateQuality () {
    let expiryFactor = (this.caducidad > EXPIRY_LIMIT) ? QUALITY_INITIAL_FACTOR : QUALITY_EXPIRED_FACTOR

    this.valor += QUALITY_RATE * expiryFactor

    this.checkQuality()
  }

  // Comprueba que la calidad este dentro de los limites especificados y la ajusta
  checkQuality () {
    if (this.valor > QUALITY_MAX) {
      this.valor = QUALITY_MAX
    }

    if (this.valor < QUALITY_MIN) {
      this.valor = QUALITY_MIN
    }
  }
}
