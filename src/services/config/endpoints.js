export const baseUrl = 'https://backend-melonn.herokuapp.com/';
// export const baseUrl = 'http://localhost:3001/';

export const sessionEndpoint = () => `${baseUrl}sessions`;

export const ordersEndpoint = (params) => `${baseUrl}orders/${params ? params : ''}`;

export const promisesEndpoint = (params) => `${baseUrl}orders/promises/${params ? params : ''}`;

export const methodsListEndpoint = (params) => `${baseUrl}orders/methods/${params ? params : ''}`;