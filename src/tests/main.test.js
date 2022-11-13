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

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Teste se o fetch foi chamado com o endpoint correto', () => {
    requestLolApi(endpoint);

    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Teste o retorno da função requestLolApi', async () => {
    const characters = await requestLolApi(endpoint);
    expect(characters).toEqual(charactersLol);
    expect.assertions(1);

    requestLolApi(endpoint)
      .then((response) => {
        expect(response).toEqual(charactersLol);
        expect.assertions(2);
      });
  });

  it(`Teste se a função requestLolApi retorna
  um erro caso não passe um endpoint`, () => {
    expect(() => requestLolApi())
      .rejects.toThrowError('Endpoint inexistente');
  });
});
