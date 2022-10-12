const getSavedCartItems = () => {
  const storage = localStorage.getItem('cartItem') !== undefined 
    ? JSON.parse(localStorage.getItem('cartItem')) 
    : undefined; 
  return storage;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
