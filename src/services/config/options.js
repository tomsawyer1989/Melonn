export const optionsGET = () => ({
    method: 'GET'
});

export const optionsPOST = (body) => ({
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json'
    }
});