import React, { useState, useEffect } from 'react';
import { Form, TextField } from '@react-md/form';
import { Button } from '@react-md/button';
import { FontIcon } from '@react-md/icon';

function LoginForm (props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const values = {
            username,
            password
        };

        props.getValuesLoginForm(values);
    }

    return (
        <Form onSubmit={() => handleSubmit()}>
            <TextField
                style={styles.textField}
                id='username'
                placeholder="Escribe el usuario"
                label='Usuario'
                onChange={(event) => setUsername(event.currentTarget.value)}
                rightChildren= {<FontIcon>person_outline</FontIcon>}
                required
            />
            <TextField
                style={styles.textField}
                id='password'
                placeholder="Escribe la contraseña"
                label='Contraseña'
                onChange={(event) => setPassword(event.currentTarget.value)}
                rightChildren= {<FontIcon>lock_outline</FontIcon>}
                required
            />
            <Button
                style={styles.button}
                id="submit"
                type='submit'
                theme='primary'
                themeType="contained"
            >
                Iniciar sesión
            </Button>
        </Form>
    );
}

const styles = {
    textField: {
        width: 250,
        height: 45,
        fontSize: 13,
    },
    button: {
        marginTop: 40,
        width: 250,
        height: 45,
        color: 'white',
        fontSize: 13,
        textTransform: 'none',
        fontWeight: 'normal',
    },
};

export default LoginForm