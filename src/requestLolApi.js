import Swal from 'sweetalert2';

const requestLolApi = async (endpoint) => {
  if (!endpoint) throw new Error('Endpoint inexistente');

  try {
    const response = await fetch(endpoint);
    const { data } = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `Something went wrong! ${error.message}`,
    });
  }
};

export default requestLolApi;
