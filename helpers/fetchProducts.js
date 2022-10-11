const fetchProducts = async (id) => {
    try {
      const url = `https://api.mercadolibre.com/sites/MLB/search?q=${id}`;
      const result = await fetch(url);
      const data = await result.json();
      return data;
    } catch (error) {
      return error;
    }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
