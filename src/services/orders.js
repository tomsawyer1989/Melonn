import { ordersEndpoint } from './config/endpoints';
import { optionsGET, optionsPOST, optionsPATCH, optionsDELETE } from './config/options';

export const getOrders = async () => {
  try {
    const response = await fetch(ordersEndpoint(), optionsGET());

    if (!response.ok) {
      return {
        success: false,
        message: 'unauthorized',
      };
    }

    const orders = await response.json();

    return {
      success: true,
      message: 'OK',
      orders,
    };
  } catch (err) {
    console.log(`Unable to get the information to the database: ${err}`);
    throw err
  }
}

export const postOrder = async (body) => {
  try {
    const response = await fetch(ordersEndpoint(), optionsPOST(body));

    if (!response.ok) {
      return {
        success: false,
        message: 'unauthorized',
      };
    }

    const order = await response.json();   // El json-server responde con el usuario añadido, agregando su id

    return {
      success: true,
      message: 'OK',
      order,
    };
  } catch (err) {
    console.log(`Unable to post the information to the database: ${err}`);
    throw err
  }
}

export const patchOrder = async (params, body) => {
  try {
    const response = await fetch(ordersEndpoint(params), optionsPATCH(body));

    if (!response.ok) {
      return {
        success: false,
        message: 'unauthorized',
      };
    }

    const order = await response.json();   // El json-server responde con el usuario editado

    return {
      success: true,
      message: 'OK',
      order,
    };
  } catch (err) {
    console.log(`Unable to patch the information to the database: ${err}`);
    throw err
  }
}

export const deleteOrder = async (params) => {
  try {
    const response = await fetch(ordersEndpoint(params), optionsDELETE());

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