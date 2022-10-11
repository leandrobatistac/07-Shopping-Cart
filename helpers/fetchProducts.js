const fetchProducts = async (id) => {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${id}`;
    const result = await fetch(url);
    const data = await result.json();

    if (id === undefined) {
      throw new Error('You must provide an url');
    }

    return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
