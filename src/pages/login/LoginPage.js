import React from 'react';
import LoginForm from '../../components/forms/LoginForm';
import { AppSizeListener, Grid, GridCell } from "@react-md/utils";

function LoginPage (props) {

    const getValuesLoginForm = (values) => {
        props.getValuesLoginForm(values);
    }

    return(
        <div>
            <div style={styles.login}>
                <AppSizeListener>
                    <Grid>
                        <GridCell colSpan={12}>
                            <p style={styles.title}>Inicio de sesión</p>
                        </GridCell>
                        <GridCell colSpan={12}>
                            <LoginForm getValuesLoginForm={getValuesLoginForm}/>
                        </GridCell>
                    </Grid>
                </AppSizeListener>
            </div>
        </div>
    );
}

const styles = {
    title: {
        marginTop: 20,
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 26,
    },
    login: {
        paddingLeft: 40,
        paddingRight: 40,
        width: 360,
        height: 350,
        marginTop: 250,
        marginLeft: 845,
        borderRadius: 35,
        boxShadow: '0px 0px 50px gray',
    },
};

export default LoginPage;