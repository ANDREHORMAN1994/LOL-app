import requestLolApi from '../requestLolApi';
import charactersLol from './mocks/data';
import './mocks/fetchMock';

const endpoint = 'http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json';
const TIME = 10000;

jest.setTimeout(TIME);

describe('Testando chamada Api', () => {
  it('Teste se requestLolApi é uma função', () => {
    expect(typeof requestLolApi).toBe('function');
  });

  it('Teste se o fetch foi chamado', () => {
    requestLolApi(endpoint);
    expect(fetch).toHaveBeenCalled();
  });

  it('Teste se o fetch foi chamado com o endpoint correto', () => {
    requestLolApi(endpoint);
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Teste o retorno da função requestLolApi', async () => {
    const response = await requestLolApi(endpoint);
    expect(response).toEqual(charactersLol);
  });

  it(`Teste se a função requestLolApi retorna
  um erro caso não passe um endpoint`, async () => {
    const data = await requestLolApi();
    expect(data).toBe('Endpoint inexistente');
  });
});
