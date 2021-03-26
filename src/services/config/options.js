export const apiKey = 'oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT';

export const optionsGET = () => ({
    method: 'GET',
    headers: {
        'x-api-key': apiKey
    }
});

export const optionsPOST = (body) => ({
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json'
    }
});

export const optionsPATCH = (body) => ({
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json'
    }
});

export const optionsDELETE = () => ({
    method: 'DELETE'
});