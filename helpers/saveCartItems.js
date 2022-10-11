const saveCartItems = (carrinho) => {
  localStorage.setItem('cartItem', carrinho);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
