function calcularTotalCompra(detalles) {
  return detalles.reduce(
    (total, item) => total + item.cantidad * item.precio,
    0
  );
}

module.exports = { calcularTotalCompra };
