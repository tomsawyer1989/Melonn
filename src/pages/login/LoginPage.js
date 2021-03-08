import React from 'react';
import LoginForm from '../../components/forms/LoginForm';
import { Row, Col } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import BeatLoader from 'react-spinners/BeatLoader';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

function LoginPage (props) {

    const classes = useStyles();

    const getValuesLoginForm = (values) => {
        props.getValuesLoginForm(values);
    }

    return(
        <>
        <div style={styles.image}></div>
        <div style={{position: 'absolute'}}>
            <Row>
                <Col span={4} offset={10} style={{color: 'white', marginTop: 270}}>
                    <span style={{fontSize: 30}}>Aplicación OLSoftware</span>
                </Col>
                <Col span={14} offset={10} style={{color: 'white', marginTop: 20}}>
                    <p style={{fontSize: 16}}>Prueba práctica Front-end senior</p>
                </Col>
            </Row>
        </div>
        <Backdrop className={classes.backdrop} open={props.loadingLogin}>
            <Row>
                <Col span={24} style={{fontSize: 30, marginBottom: 30}}>
                    <span>Estamos preparando todo para tí</span>
                </Col>
                <Col span={17} offset={7}>
                    <BeatLoader color={'white'} size={40}/>
                </Col>
            </Row>
        </Backdrop>
        <Row>
            <Col xs={24} md={{span: 6, offset: 15}} style={styles.container}>
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
        </>
    );
}

const styles = {
    image: {
        position: 'absolute',
        height: '155%',
        width: '78%',
        backgroundImage: 'url("https://alkilautos.com/blog/wp-content/uploads/2018/08/18.08.14-Planes-para-hacer-en-Cali-Parque-Artesanal-Loma-de-la-Cruz.jpg")',
        backgroundPosition: 'right bottom',
        borderRadius: '0% 50% 100% 62%',
        marginTop: '-27%',
    },
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