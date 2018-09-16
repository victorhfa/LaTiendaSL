describe("Kata Tests", function() {

  it("should foo", function() {
    items = [ new Producto("foo", 0, 0) ];
    actualizarProductos();
    expect(items[0].nombre).toEqual("FIX ME");
  });

});

