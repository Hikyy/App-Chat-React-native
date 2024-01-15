export async function wsFetchApi(route, data= null) {
  try {
    let response = await fetch(`ws://localhost:9098/ws/${route}`);
    response = await response.json();
    console.log('Response ! :', response);

    return response;
  } catch (error) {
    console.error('error :', error);

    return error;
  }
}

