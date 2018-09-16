class EntradaVIP extends Producto {
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
    if (this.caducidad <= 0) {
      this.valor = 0
    } else if (this.caducidad <= 5) {
      this.valor += VIP_QLTY_LAST_RATE
    } else if (this.caducidad <= 10) {
      this.valor += VIP_QLTY_MIDDLE_RATE
    } else {
      this.valor += VIP_QLTY_INITIAL_RATE
    }

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
