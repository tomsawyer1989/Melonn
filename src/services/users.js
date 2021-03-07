import { sessionEndpoint, usersEndpoint } from './config/endpoints';
import { optionsGET, optionsPOST, optionsPATCH, optionsDELETE } from './config/options';

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
    console.log(`Unable to get the information to the database: ${err}`);
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
    console.log(`Unable to get the information to the database: ${err}`);
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

    const user = await response.json();   // El json-server responde con el usuario añadido, agregando su id

    return {
      success: true,
      message: 'OK',
      user,
    };
  } catch (err) {
    console.log(`Unable to post the information to the database: ${err}`);
    throw err
  }
}

export const patchUser = async (params, body) => {
  try {
    const response = await fetch(usersEndpoint(params), optionsPATCH(body));

    if (!response.ok) {
      return {
        success: false,
        message: 'unauthorized',
      };
    }

    const user = await response.json();   // El json-server responde con el usuario editado

    return {
      success: true,
      message: 'OK',
      user,
    };
  } catch (err) {
    console.log(`Unable to patch the information to the database: ${err}`);
    throw err
  }
}

export const deleteUser = async (params) => {
  try {
    const response = await fetch(usersEndpoint(params), optionsDELETE());

    if (!response.ok) {
      return {
        success: false,
        message: 'unauthorized',
      };
    }

    return {
      success: true,
      message: 'OK',
    };
  } catch (err) {
    console.log(`Unable to delete the information to the database: ${err}`);
    throw err
  }
}