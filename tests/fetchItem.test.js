require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('fetchItem é uma funçao', async () => {
    expect(typeof fetchItem).toBe('function')
  });

  it('Verifique se a função fetch foi chamada.', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Verifique se a função fetch foi chamada com o endpoint correto', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('fetchItem sem argumento, retorna um erro com a mensagem', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  });

  it('Retorno da função é uma estrutura de dados igual ao objeto ', async () => {
    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item);
  });
});
