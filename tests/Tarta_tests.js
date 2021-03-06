describe('Tests de clase Tarta', function () {
  it('Class assignment should keep the properties intact', function () {
    let producto = new Producto('foo', 0, 0)
    let tarta = new Tarta(producto)
    expect(tarta).toEqual(producto)
  })
  it('Tarta after updateProduct should be caducidad - 1 and valor - 2', function () {
    let producto = new Producto('foo', 15, 10)
    let tarta = new Tarta(producto)
    tarta.updateProduct()
    expect(tarta.caducidad).toEqual(producto.caducidad - 1)
    expect(tarta.valor).toEqual(producto.valor - 2)
  })
  it('Tarta after updateProduct with caducidad <= 0 should be caducidad - 1 and valor - 4', function () {
    let producto = new Producto('foo', 0, 30)
    let tarta = new Tarta(producto)
    tarta.updateProduct()
    expect(tarta.caducidad).toEqual(producto.caducidad - 1)
    expect(tarta.valor).toEqual(producto.valor - 4)
  })
  it('Caducidad after updateExpiration should be caducidad - 1', function () {
    let producto = new Producto('foo', 0, 0)
    let tarta = new Tarta(producto)
    tarta.updateExpiration()
    expect(tarta.caducidad).toEqual(producto.caducidad - 1)
  })
  it('Valor after updateQuality with caducidad <= 0 should be MIN (0)', function () {
    let producto = new Producto('foo', 0, 0)
    let tarta = new Tarta(producto)
    tarta.updateQuality()
    expect(tarta.valor).toEqual(QUALITY_MIN)
  })
  it('Valor after checkQuality with valor > 50 should be MAX (50)', function () {
    let producto = new Producto('foo', 11, 80)
    let tarta = new Tarta(producto)
    tarta.checkQuality()
    expect(tarta.valor).toEqual(QUALITY_MAX)
  })
  it('Valor after checkQuality with valor < 0 should be MIN (0)', function () {
    let producto = new Producto('foo', 11, -5)
    let tarta = new Tarta(producto)
    tarta.checkQuality()
    expect(tarta.valor).toEqual(QUALITY_MIN)
  })
})
