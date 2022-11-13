// import requestLolApi from '../requestLolApi';
// import data from './mocks/data';
import './mocks/fetchMock';

// const endpoint = 'http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json';
const TIME = 10000;

jest.setTimeout(TIME);

describe('Testando chamada Api', () => {
  it.todo('Teste se requestLolApi é uma função');

  it.todo('Teste se o fetch foi chamado');

  it.todo('Teste se o fetch foi chamado com o endpoint correto');

  it.todo('Teste o retorno da função requestLolApi');

  it.todo('Teste se a função requestLolApi retorna um erro caso não passe um endpoint');
});
