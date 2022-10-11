const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Verifique se a função localStorage.setItem foi chamada.', () => {
    saveCartItems('Teste');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('Verifique se a função localStorage.setItem foi chamada com 2 parametros.', () => {
    saveCartItems('Teste');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItem', 'Teste');
  });
});
