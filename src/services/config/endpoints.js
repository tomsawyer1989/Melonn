export const baseUrl = 'http://localhost:3001/';

export const sessionEndpoint = () => `${baseUrl}sessions`;

export const ordersEndpoint = (params) => `${baseUrl}orders/${params ? params : ''}`;