import React from 'react';
import Default from '../../components/layouts/Default';
import { Row, Col } from 'antd';

function HomePage (props) {

    const logOut = (value) => {
        props.logOut(value);
    }

    return (
        <Default logOut={logOut} render={
            <Row>
                <Col span={23} offset={1} style={{marginTop: 30}}>
                    <h2>Prueba Front End</h2>
                    <h3>Bienvenido a la prueba Front End</h3>
                    <p>Navega en el item <strong>Usuario</strong> del sidebar...</p>
                </Col>
            </Row>
        }/>
    );
}

export default HomePage;