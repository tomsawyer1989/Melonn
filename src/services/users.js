import { sessionEndpoint, usersEndpoint } from './config/endpoints';
import { optionsGET, optionsPOST } from './config/options';

export const getSessions = async () => {
  try {
    const response = await fetch(sessionEndpoint(), optionsGET());

    if (!response.ok) {
      return {
        success: false,
        message: 'unauthorized',
      };
    }

    const sessions = await response.json();

    return {
      success: true,
      message: 'OK',
      sessions,
    };
  } catch (err) {
    console.log(`Unable to get the information to the database: ${err}`)
    throw err
  }
}

export const getUsers = async () => {
  try {
    const response = await fetch(usersEndpoint(), optionsGET());

    if (!response.ok) {
      return {
        success: false,
        message: 'unauthorized',
      };
    }

    const users = await response.json();

    return {
      success: true,
      message: 'OK',
      users,
    };
  } catch (err) {
    console.log(`Unable to get the information to the database: ${err}`)
    throw err
  }
}

export const postUser = async (body) => {
  try {
    const response = await fetch(usersEndpoint(), optionsPOST(body));

    if (!response.ok) {
      return {
        success: false,
        message: 'unauthorized',
      };
    }

    const user = await response.json();   // El json-server responde con el usuario agregado

    return {
      success: true,
      message: 'OK',
      user,
    };
  } catch (err) {
    console.log(`Unable to post the information to the database: ${err}`)
    throw err
  }
}