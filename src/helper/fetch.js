export async function fetchApi(method='GET', route, data= null) {
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
    let response = await fetch(`http://10.0.2.2:8097/${route}`, options);
    response = await response.json();
    console.log('Response :', response);

    return response;
  } catch (error) {
    console.error('error :', error);

    return error;
  }
}
