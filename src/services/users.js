import { sessionEndpoint } from './config/endpoints';
import { optionsGET } from './config/options';

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