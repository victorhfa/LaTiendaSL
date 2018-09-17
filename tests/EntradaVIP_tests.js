describe('Tests de clase EntradaVIP', function () {
  it('Class assignment should keep the properties intact', function () {
    let producto = new Producto('foo', 0, 0)
    let entradaVIP = new EntradaVIP(producto)
    expect(entradaVIP).toEqual(producto)
  })
  it('EntradaVIP after updateProduct with caducidad > 10 should be caducidad - 1 and valor + 1', function () {
    let producto = new Producto('foo', 15, 10)
    let entradaVIP = new EntradaVIP(producto)
    entradaVIP.updateProduct()
    expect(entradaVIP.caducidad).toEqual(producto.caducidad - 1)
    expect(entradaVIP.valor).toEqual(producto.valor + 1)
  })
  it('EntradaVIP after updateProduct with caducidad > 5 and <= 10 should be caducidad - 1 and valor + 2', function () {
    let producto = new Producto('foo', 7, 15)
    let entradaVIP = new EntradaVIP(producto)
    entradaVIP.updateProduct()
    expect(entradaVIP.caducidad).toEqual(producto.caducidad - 1)
    expect(entradaVIP.valor).toEqual(producto.valor + 2)
  })
  it('EntradaVIP after updateProduct with caducidad < 5 should be caducidad - 1 and valor + 3', function () {
    let producto = new Producto('foo', 3, 20)
    let entradaVIP = new EntradaVIP(producto)
    entradaVIP.updateProduct()
    expect(entradaVIP.caducidad).toEqual(producto.caducidad - 1)
    expect(entradaVIP.valor).toEqual(producto.valor + 3)
  })
  it('EntradaVIP after updateProduct with caducidad < 5 should be caducidad - 1 and valor = MAX (50)', function () {
    let producto = new Producto('foo', 2, 49)
    let entradaVIP = new EntradaVIP(producto)
    entradaVIP.updateProduct()
    expect(entradaVIP.caducidad).toEqual(producto.caducidad - 1)
    expect(entradaVIP.valor).toEqual(QUALITY_MAX)
  })
  it('EntradaVIP after updateProduct with caducidad <= 0 should be caducidad - 1 and valor = MIN (0)', function () {
    let producto = new Producto('foo', 0, 30)
    let entradaVIP = new EntradaVIP(producto)
    entradaVIP.updateProduct()
    expect(entradaVIP.caducidad).toEqual(producto.caducidad - 1)
    expect(entradaVIP.valor).toEqual(QUALITY_MIN)
  })
  it('Caducidad after updateExpiration should be caducidad - 1', function () {
    let producto = new Producto('foo', 0, 0)
    let entradaVIP = new EntradaVIP(producto)
    entradaVIP.updateExpiration()
    expect(entradaVIP.caducidad).toEqual(producto.caducidad - 1)
  })
  it('Valor after updateQuality with caducidad <= 0 should be MIN (0)', function () {
    let producto = new Producto('foo', 0, 20)
    let entradaVIP = new EntradaVIP(producto)
    entradaVIP.updateQuality()
    expect(entradaVIP.valor).toEqual(QUALITY_MIN)
  })
  it('Valor after updateQuality with caducidad <= 5 should be valor + 3', function () {
    let producto = new Producto('foo', 5, 20)
    let entradaVIP = new EntradaVIP(producto)
    entradaVIP.updateQuality()
    expect(entradaVIP.valor).toEqual(producto.valor + 3)
  })
  it('Valor after updateQuality with caducidad > 5 and <= 10 should be valor + 2', function () {
    let producto = new Producto('foo', 10, 20)
    let entradaVIP = new EntradaVIP(producto)
    entradaVIP.updateQuality()
    expect(entradaVIP.valor).toEqual(producto.valor + 2)
  })
  it('Valor after updateQuality with caducidad > 5 and <= 10 should be valor + 1', function () {
    let producto = new Producto('foo', 11, 20)
    let entradaVIP = new EntradaVIP(producto)
    entradaVIP.updateQuality()
    expect(entradaVIP.valor).toEqual(producto.valor + 1)
  })
  it('Valor after checkQuality with valor > 50 should be MAX (50)', function () {
    let producto = new Producto('foo', 11, 80)
    let entradaVIP = new EntradaVIP(producto)
    entradaVIP.checkQuality()
    expect(entradaVIP.valor).toEqual(QUALITY_MAX)
  })
  it('Valor after checkQuality with valor < 0 should be MIN (0)', function () {
    let producto = new Producto('foo', 11, -5)
    let entradaVIP = new EntradaVIP(producto)
    entradaVIP.checkQuality()
    expect(entradaVIP.valor).toEqual(QUALITY_MIN)
  })
})