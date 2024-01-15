export function fetchApi(method='GET', route, data= null) {
  let options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (method !== 'GET') {
    options.body = JSON.stringify(data);
  }

  try {
    let response = fetch(`http://10.0.2.2:8097/${route}`, options)
      .then(response => response.json());

    return response;
  } catch (error) {
    console.error('error :', error);

    return error;
  }
}
