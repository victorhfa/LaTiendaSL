// Ruta de los ficheros JS
const JS_FILES_ROUTE = './src/'

// Array de productos
var productos = []

// Importa los ficheros
importJS('constants.js')

importJS('Producto.js')

importJS('EntradaVIP.js')
importJS('QuesoAzul.js')
importJS('Tarta.js')
importJS('Vino.js')

// Agrega los ficheros al head
function importJS (_file) {
  var s = document.createElement('script')
  s.type = 'text/javascript'
  s.src = JS_FILES_ROUTE + _file
  document.getElementsByTagName('head')[0].append(s)
}

// Devuelve el tipo de producto
function getTypeOfProduct (_textToMatch) {
  for (let i = 0; i < ENTRADA_VIP_MATCH.length; i++) {
    if (_textToMatch.match(ENTRADA_VIP_MATCH[i])) { return tipoProductos.ENTRADA_VIP }
  }

  for (let i = 0; i < QUESO_AZUL_MATCH.length; i++) {
    if (_textToMatch.match(QUESO_AZUL_MATCH[i])) { return tipoProductos.QUESO_AZUL }
  }

  for (let i = 0; i < TARTA_MATCH.length; i++) {
    if (_textToMatch.match(TARTA_MATCH[i])) { return tipoProductos.TARTA }
  }

  for (let i = 0; i < VINO_MATCH.length; i++) {
    if (_textToMatch.match(VINO_MATCH[i])) { return tipoProductos.VINO }
  }

  return tipoProductos.GENERICO
}

// Actualiza el producto
function updateProduct (_product) {
  updateQuality(_product)
  updateExpiration(_product)
}

// Actualiza la caducidad
function updateExpiration (_product) {
  _product.caducidad--
}

// Actualiza la calidad
function updateQuality (_product) {
  // Ajusta el ratio de disminucion de calidad en funcion de si se ha superado el limite indicado de caducidad
  let expiryFactor = (_product.caducidad > EXPIRY_LIMIT) ? QUALITY_INITIAL_FACTOR : QUALITY_EXPIRED_FACTOR

  _product.valor -= QUALITY_RATE * expiryFactor

  checkQuality(_product)
}

// Comprueba que la calidad este dentro de los limites especificados y de no ser así la ajusta
function checkQuality (_product) {
  if (_product.valor > QUALITY_MAX) {
    _product.valor = QUALITY_MAX
    console.log('El producto ' + _product.name + ' contenía una calidad mayor de la permitida y ha sido ajustado')
  }

  if (_product.valor < QUALITY_MIN) {
    _product.valor = QUALITY_MIN
  }
}

// Actualiza el array de productos
function actualizarProductos () {
  for (var i = 0; i < productos.length; i++) {
    let producto = productos[i]
    let texto = producto.nombre

    let customProduct

    switch (getTypeOfProduct(texto)) {
      case tipoProductos.GENERICO:
        updateProduct(producto)
        break
      case tipoProductos.ENTRADA_VIP:
        customProduct = new EntradaVIP(producto)
        break
      case tipoProductos.QUESO_AZUL:
        customProduct = new QuesoAzul(producto)
        break
      case tipoProductos.TARTA:
        customProduct = new Tarta(producto)
        break
      case tipoProductos.VINO:
        customProduct = new Vino(producto)
        break
    }

    if (getTypeOfProduct(texto) !== tipoProductos.GENERICO) {
      customProduct.updateProduct()
      productos[i] = customProduct
    }
  }
}
