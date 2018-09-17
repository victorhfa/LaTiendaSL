describe('Tests de clase QuesoAzul', function () {
  it('Class assignment should keep the properties intact', function () {
    let producto = new Producto('foo', 0, 0)
    let quesoAzul = new QuesoAzul(producto)
    expect(quesoAzul).toEqual(producto)
  })
  it('QuesoAzul after updateProduct should be caducidad 15 and valor 10', function () {
    let producto = new Producto('foo', 15, 10)
    let quesoAzul = new QuesoAzul(producto)
    quesoAzul.updateProduct()
    expect(quesoAzul.caducidad).toEqual(producto.caducidad)
    expect(quesoAzul.valor).toEqual(producto.valor)
  })
  it('QuesoAzul after updateProduct with caducidad <= 0 should be caducidad 0 and valor 30', function () {
    let producto = new Producto('foo', 0, 30)
    let quesoAzul = new QuesoAzul(producto)
    quesoAzul.updateProduct()
    expect(quesoAzul.caducidad).toEqual(producto.caducidad)
    expect(quesoAzul.valor).toEqual(producto.valor)
  })
  it('Caducidad after updateExpiration should be 0', function () {
    let producto = new Producto('foo', 0, 0)
    let quesoAzul = new QuesoAzul(producto)
    quesoAzul.updateExpiration()
    expect(quesoAzul.caducidad).toEqual(producto.caducidad)
  })
  it('Valor after updateQuality with caducidad <= 0 should be 0', function () {
    let producto = new Producto('foo', 0, 0)
    let quesoAzul = new QuesoAzul(producto)
    quesoAzul.updateQuality()
    expect(quesoAzul.valor).toEqual(producto.valor)
  })
  it('Valor after checkQuality with valor > 50 should be 80', function () {
    let producto = new Producto('foo', 11, 80)
    let quesoAzul = new QuesoAzul(producto)
    quesoAzul.checkQuality()
    expect(quesoAzul.valor).toEqual(producto.valor)
  })
  it('Valor after checkQuality with valor < 0 should be MIN (0)', function () {
    let producto = new Producto('foo', 11, -5)
    let quesoAzul = new QuesoAzul(producto)
    quesoAzul.checkQuality()
    expect(quesoAzul.valor).toEqual(QUALITY_MIN)
  })
})
