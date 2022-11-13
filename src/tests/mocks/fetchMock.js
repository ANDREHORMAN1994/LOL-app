const data = require('./data');

const REQUEST_DELAY = 200;
const endpoint = 'http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json';

const fetchMock = (url) => {
  if (!endpoint) {
    return Promise.reject(new Error(`${url} is not a valid endpoint`));
  }

  return Promise.resolve({
    json: () => new Promise((resolve) => {
      setTimeout(() => resolve(data), REQUEST_DELAY);
    }),
  });
};

global.fetch = jest.fn(fetchMock);
afterEach(jest.clearAllMocks);

module.exports = fetchMock;
