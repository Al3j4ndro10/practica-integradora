const { calcularTotalCompra } = require('../src/services/compraService');

test('calcularTotalCompra calcula el total correctamente', () => {
  const detalles = [
    { cantidad: 2, precio: 10 },
    { cantidad: 1, precio: 20 }
  ];

  expect(calcularTotalCompra(detalles)).toBe(40);
});
