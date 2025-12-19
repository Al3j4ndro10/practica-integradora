const { calcularStock } = require('../src/services/stock');

test('calcularStock retorna el stock correcto', () => {
  expect(calcularStock(10, 5, 3)).toBe(12);
});
