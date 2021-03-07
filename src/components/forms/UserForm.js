import React from 'react';
import { Form, Input, Button, Row, Col, } from 'antd';

function UserForm (props) {

    const handleSubmit = (values) => {
        props.getValuesUserForm(values, props.originLabel);
    }

    return (
        <Form
            name="normal_user"
            className="user-form"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            labelCol={{span: 24}}
        >
            <Row>
                <Col span={props.originLabel === 'post' ? 9 : 24} offset={props.originLabel === 'post' ? 2 : 0}>
                    <Form.Item
                        label="Nombres"
                        name="name"
                        rules={[{ required: true, message: 'Escribe el nombre' }]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={props.originLabel === 'post' ? 9 : 24} offset={props.originLabel === 'post' ? 2 : 0}>
                    <Form.Item
                        label="Apellidos"
                        name="lastname"
                        rules={[{ required: true, message: 'Escribe el apellido' }]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={props.originLabel === 'post' ? 9 : 24} offset={props.originLabel === 'post' ? 2 : 0}>
                    <Form.Item
                        label="Identificación (C.C)"
                        name="identity"
                        rules={[{ required: true, message: 'Escribe la identificación' }]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={props.originLabel === 'post' ? 9 : 24} offset={props.originLabel === 'post' ? 2 : 0}>
                    <Form.Item
                        label="Rol asociado"
                        name="role"
                        rules={[{ required: true, message: 'Escribe el rol asociado' }]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={props.originLabel === 'post' ? 9 : 24} offset={props.originLabel === 'post' ? 2 : 0}>
                    <Form.Item
                        label="Estado"
                        name="state"
                        rules={[{ required: true, message: 'Escribe el estado' }]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={props.originLabel === 'post' ? 9 : 24} offset={props.originLabel === 'post' ? 2 : 0}>
                    <Form.Item
                        label="Contraseña"
                        name="password"
                        rules={[{ required: true, message: 'Escribe la contraseña' }]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={props.originLabel === 'post' ? 9 : 24} offset={props.originLabel === 'post' ? 2 : 0}>
                    <Form.Item
                        label="Teléfono"
                        name="phone"
                        rules={[{ required: true, message: 'Escribe el teléfono' }]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={props.originLabel === 'post' ? 9 : 24} offset={props.originLabel === 'post' ? 2 : 0}>
                    <Form.Item
                        label="Correo electrónico"
                        name="email"
                        rules={[{ required: true, message: 'Escribe el correo electrónico' }]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={props.originLabel === 'post' ? 4 : 11} offset={props.originLabel === 'post' ? 7 : 0}>
                    <Form.Item>
                        <Button style={{width: '100%', borderRadius: 5}} type="primary" htmlType="submit" className="user-form-button">
                            {props.originLabel === 'post' ? 'Aceptar' : 'Filtrar'}
                        </Button>
                    </Form.Item>
                </Col>
                <Col span={props.originLabel === 'post' ? 4 : 11} offset={props.originLabel === 'post' ? 2 : 2}>
                    <Form.Item>
                        <Button style={{width: '100%', borderRadius: 5}} type="secondary" className="user-form-button">
                            {props.originLabel === 'post' ? 'Cancelar' : 'Limpiar'}
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}

export default UserForm;