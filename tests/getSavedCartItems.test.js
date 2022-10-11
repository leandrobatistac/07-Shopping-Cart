const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Verifique se a função localStorage.setItem foi chamada.', () => {
    getSavedCartItems('Teste');
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  it('Verifique se a função localStorage.setItem foi chamada com 2 parametros.', () => {
    getSavedCartItems('Teste');
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItem');
  });
});
