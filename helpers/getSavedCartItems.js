const getSavedCartItems = () => {
  const storage = localStorage.getItem('cartItem');
  return storage;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
