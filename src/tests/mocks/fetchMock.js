import charactersLol from './data'

const REQUEST_DELAY = 200

const fetchMock = async () => ({
  json: async () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(charactersLol)
    }, REQUEST_DELAY)
  }),
})

global.fetch = jest.fn(fetchMock)
afterEach(jest.clearAllMocks)

module.exports = fetchMock
