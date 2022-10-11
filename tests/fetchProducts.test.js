require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('fetchProducts é uma funçao', async () => {
    expect(typeof fetchProducts).toBe('function')
  });

  it('Verifique se a função fetch foi chamada.', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Verifique se a função fetch foi chamada com o endpoint correto', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('FetchProducts sem argumento, retorna um erro com a mensagem', async () => {
    await expect(fetchProducts()).rejects.toThrow('You must provide an url');
  });

  it('Retorno da função é uma estrutura de dados igual ao objeto ', async () => {
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  });
});
