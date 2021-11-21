let baseUrl = '';
if (process.env.production) {
  baseUrl = 'https://pnd-peredvizh-api.herokuapp.com';
} else {
  baseUrl = 'https://pnd-peredvizh-api.herokuapp.com';
}

export default baseUrl;