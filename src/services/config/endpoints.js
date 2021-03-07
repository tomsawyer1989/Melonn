export const baseUrl = 'http://localhost:3001/';

export const sessionEndpoint = () => `${baseUrl}sessions`;

export const usersEndpoint = (params) => `${baseUrl}users/${params ? params : ''}`;