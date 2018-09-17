// Comprobaciones de actualizacion correcta
describe('Tests de actualizacion en tienda', function () {
  it('Nombre should be foo', function () {
    productos = [ new Producto('foo', 0, 0) ]
    actualizarProductos()
    expect(productos[0].nombre).toEqual('foo')
  })
  it('Caducidad should be -1', function () {
    productos = [ new Producto('foo', 0, 0) ]
    actualizarProductos()
    expect(productos[0].caducidad).toEqual(-1)
  })
  it('Valor should be 0', function () {
    productos = [ new Producto('foo', 0, 0) ]
    actualizarProductos()
    expect(productos[0].valor).toEqual(0)
  })
  it('Valor should be 9', function () {
    productos = [ new Producto('foo', 5, 10) ]
    actualizarProductos()
    expect(productos[0].valor).toEqual(9)
  })
  it('Valor should be 6', function () {
    productos = [ new Producto('foo', 2, 10) ]
    for (let i = 0; i < 3; i++) {
      actualizarProductos()
    }
    expect(productos[0].valor).toEqual(6)
  })
  it('Valor should be 50', function () {
    productos = [ new Producto('foo', 5, 100) ]
    actualizarProductos()
    expect(productos[0].valor).toEqual(50)
  })
})

describe('Tests de entrada de datos basicos correctos', function () {
  it('Nombre deberia ser string', function () {
    let producto = new Producto(null, 0, 0)
    let msg_error
    try {
      checkValidProducto(producto)
    } catch (error) {
      msg_error = error.code
    }
    expect(msg_error).toEqual(10001)
  })
  it('Caducidad deberia ser number', function () {
    let producto = new Producto('foo', 'a', 0)
    let msg_error
    try {
      checkValidProducto(producto)
    } catch (error) {
      msg_error = error.code
    }
    expect(msg_error).toEqual(10002)
  })
  it('Valor deberia ser number', function () {
    let producto = new Producto('foo', 0, 'a')
    let msg_error
    try {
      checkValidProducto(producto)
    } catch (error) {
      msg_error = error.code
    }
    expect(msg_error).toEqual(10003)
  })
  it('Caducidad deberia ser integer', function () {
    let producto = new Producto('foo', 7.3, 0)
    let msg_error
    try {
      checkValidProducto(producto)
    } catch (error) {
      msg_error = error.code
    }
    expect(msg_error).toEqual(10004)
  })
  it('Valor deberia ser integer', function () {
    let producto = new Producto('foo', 0, 0.6)
    let msg_error
    try {
      checkValidProducto(producto)
    } catch (error) {
      msg_error = error.code
    }
    expect(msg_error).toEqual(10005)
  })
})

describe('Tests de deteccion y reasignacion de clase', function () {
  it('Type should be GENERICO', function () {
    let producto = new Producto('foo', 0, 0)
    let tipoProducto = getTypeOfProduct(producto.nombre)
    expect(tipoProducto).toEqual(tipoProductos.GENERICO)
  })
  it('Type should be ENTRADA_VIP', function () {
    let producto = new Producto('Acceso VIP', 0, 0)
    let tipoProducto = getTypeOfProduct(producto.nombre)
    expect(tipoProducto).toEqual(tipoProductos.ENTRADA_VIP)
  })
  it('Type should be QUESO_AZUL', function () {
    let producto = new Producto('Queso Azul', 0, 0)
    let tipoProducto = getTypeOfProduct(producto.nombre)
    expect(tipoProducto).toEqual(tipoProductos.QUESO_AZUL)
  })
  it('Type should be TARTA', function () {
    let producto = new Producto('Tarta', 0, 0)
    let tipoProducto = getTypeOfProduct(producto.nombre)
    expect(tipoProducto).toEqual(tipoProductos.TARTA)
  })
  it('Type should be VINO', function () {
    let producto = new Producto('Vino', 0, 0)
    let tipoProducto = getTypeOfProduct(producto.nombre)
    expect(tipoProducto).toEqual(tipoProductos.VINO)
  })
  it('Class should be EntradaVIP', function () {
    productos = [ new Producto('Acceso VIP', 0, 0) ]
    actualizarProductos()
    expect(productos[0].constructor.name).toEqual('EntradaVIP')
  })
  it('Class should be ProductoGenerico', function () {
    productos = [ new Producto('foo', 0, 0) ]
    actualizarProductos()
    expect(productos[0].constructor.name).toEqual('ProductoGenerico')
  })
  it('Class should be QuesoAzul', function () {
    productos = [ new Producto('Queso Azul', 0, 0) ]
    actualizarProductos()
    expect(productos[0].constructor.name).toEqual('QuesoAzul')
  })
  it('Class should be Tarta', function () {
    productos = [ new Producto('Tarta', 0, 0) ]
    actualizarProductos()
    expect(productos[0].constructor.name).toEqual('Tarta')
  })
  it('Class should be Vino', function () {
    productos = [ new Producto('Vino', 0, 0) ]
    actualizarProductos()
    expect(productos[0].constructor.name).toEqual('Vino')
  })
})
