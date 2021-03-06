import React from 'react';
import LoginForm from '../../components/forms/LoginForm';
import { Row, Col } from 'antd';

function LoginPage (props) {

    const getValuesLoginForm = (values) => {
        props.getValuesLoginForm(values);
    }

    return(
        <Row >
            <Col span={6} offset={15} style={styles.container}>
                <Row>
                    <Col span={24}>
                        <p style={styles.title}>Inicio de sesión</p>
                    </Col>
                    <Col span={24}>
                        <LoginForm getValuesLoginForm={getValuesLoginForm}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

const styles = {
    container: {
        marginTop: 250,
        padding: 40,
        borderRadius: 35,
        boxShadow: '0px 0px 50px gray',
        background: 'white',
    },
    title: {
        marginBottom: 40,
        textAlign: 'center',
        fontSize: 26,
    },
};

export default LoginPage;