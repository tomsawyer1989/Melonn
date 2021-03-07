import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function LoginForm (props) {

    const handleSubmit = (values) => {
        props.getValuesLoginForm(values);
    }

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Escribe el usuario' }]}
            >
                <Input suffix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuario" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Escribe la contraseña' }]}
            >
                <Input suffix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Contraseña"/>
            </Form.Item>
            <Form.Item>
                <Button style={{width: '100%', borderRadius: 5}} type="primary" htmlType="submit" className="login-form-button">
                    Iniciar sesión
                </Button>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;