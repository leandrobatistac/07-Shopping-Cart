const saveCartItems = (carrinho) => {
  localStorage.setItem('cartItem', JSON.stringify(carrinho));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
