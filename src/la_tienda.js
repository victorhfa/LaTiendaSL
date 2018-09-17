// Ruta de los ficheros JS
const JS_FILES_ROUTE = './src/'

// Array de productos
var productos = []

// Importa los ficheros
importJS('constants.js')

importJS('Producto.js')

importJS('EntradaVIP.js')
importJS('ProductoGenerico.js')
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

function checkValidProducto (_product) {
  if (typeof _product.nombre !== 'string') {
    throw { msg: 'Nombre ' + _product.nombre + ' should be string', code: 10001 }
  }
  if (typeof _product.caducidad !== 'number') {
    throw { msg: 'Caducidad ' + _product.caducidad + ' should be number', code: 10002 }
  }
  if (typeof _product.valor !== 'number') {
    throw { msg: 'Valor ' + _product.valor + ' should be number', code: 10003 }
  }
  if (!Number.isInteger(_product.caducidad)) {
    throw { msg: 'Caducidad ' + _product.caducidad + ' should be integer', code: 10004 }
  }
  if (!Number.isInteger(_product.valor)) {
    throw { msg: 'Valor ' + _product.valor + ' should be integer', code: 10005 }
  }
}

// Actualiza el array de productos
function actualizarProductos () {
  for (var i = 0; i < productos.length; i++) {
    let producto = productos[i]
    let texto = producto.nombre

    let customProduct

    try {
      // Comprueba que el producto tenga el formato correcto
      checkValidProducto(producto)

      // Asigna el producto a una clase distinta según su tipo
      switch (getTypeOfProduct(texto)) {
        case tipoProductos.GENERICO:
          customProduct = new ProductoGenerico(producto)
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

      customProduct.updateProduct()
      productos[i] = customProduct
    } catch (exception) {
      console.log(exception.msg)
      console.log('   > The product ' + texto + ' won\'t be updated')
    }
  }
}
