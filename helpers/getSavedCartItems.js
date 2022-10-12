const getSavedCartItems = () => {
  const storage = JSON.parse(localStorage.getItem('cartItem'));
  return storage;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
