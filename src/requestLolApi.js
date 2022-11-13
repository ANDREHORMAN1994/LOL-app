const requestLolApi = async (endpoint) => {
  if (!endpoint) throw new Error('Endpoint inexistente');

  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export default requestLolApi;
