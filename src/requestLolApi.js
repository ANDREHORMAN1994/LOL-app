const requestLolApi = async (endpoint) => {
  try {
    if (!endpoint) throw new Error('Endpoint inexistente');
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export default requestLolApi;
