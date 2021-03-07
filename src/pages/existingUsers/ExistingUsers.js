import React, { useState, useEffect } from 'react';
import Default from '../../components/layouts/Default';
import { Modal, Row, Col, Button, Table } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';
import UserForm from '../../components/forms/UserForm';
import { getUsers, postUser } from '../../services/users';

function ExistingUsers (props) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [data, setData] = useState([]);

    const columns = [
        { title: 'Nombres', dataIndex: 'name', key: 'name' },
        { title: 'Apellidos', dataIndex: 'lastname', key: 'lastname' },
        { title: 'Identificación (C.C)', dataIndex: 'identity', key: 'identity' },
        { title: 'Rol asociado', dataIndex: 'role', key: 'role' },
        { title: 'Estado', dataIndex: 'state', key: 'state' },
        { title: 'Teléfono', dataIndex: 'phone', key: 'phone' },
        { title: 'Correo electrónico', dataIndex: 'email', key: 'email' },
        {
          title: 'Action',
          dataIndex: '',
          key: 'x',
          render: () => <a>Delete</a>,
        },
    ];
      
    // const data = [
    //     {
    //       key: 1,
    //       name: 'John Brown',
    //       age: 32,
    //       address: 'New York No. 1 Lake Park',
    //       description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    //     },
    //     {
    //       key: 2,
    //       name: 'Jim Green',
    //       age: 42,
    //       address: 'London No. 1 Lake Park',
    //       description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    //     },
    //     {
    //       key: 3,
    //       name: 'Not Expandable',
    //       age: 29,
    //       address: 'Jiangsu No. 1 Lake Park',
    //       description: 'This not expandable',
    //     },
    //     {
    //       key: 4,
    //       name: 'Joe Black',
    //       age: 32,
    //       address: 'Sidney No. 1 Lake Park',
    //       description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    //     },
    // ];

    useEffect(() => {
        getUsers()
        .then(response => {
            if (response.success) {
                const dataAux = response.users.map(item => {
                    item.key = item.id;
                    return item;
                });
                setData(dataAux);
            }
        });
    }, []);

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const getValuesUserForm = (values) => {
        postUser(values)
        .then(response => {
            if (response.success) {
                response.user.key = response.user.id;
                const dataAux = [...data];
                dataAux.push(response.user);
                setData(dataAux);
            }
        });
    }

    return (
        <Default render={
            <Row style={{background: '#eeefff'}}>
                <Col span={18} style={{padding: 20, background: 'white'}}>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={1}>
                                    <UsergroupAddOutlined style={{color: 'blue', fontSize: 25}}/>
                                </Col>
                                <Col span={20}>
                                    <span style={{color: 'blue', fontSize: 20}}>Usuarios existentes</span>
                                </Col>
                                <Col span={3}>
                                    <Button type="primary" style={{width: '100%', borderRadius: 5}} onClick={() => showModal()}>
                                        Crear
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24} style={{marginTop: 60}}>
                            <Table
                                columns={columns}
                                dataSource={data}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={5} offset={1} style={{padding: 20, background: 'white'}}>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={1}>
                                    <UsergroupAddOutlined style={{color: 'blue', fontSize: 25}}/>
                                </Col>
                                <Col span={20} offset={3}>
                                    <span style={{color: 'blue', fontSize: 20}}>Filtrar búsqueda</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24} style={{marginTop: 20}}>
                            <UserForm originLabel='search' getValuesUserForm={getValuesUserForm}/>
                        </Col>
                    </Row>
                </Col>
                <Modal width={600} title="Agregar nuevo usuario" visible={isModalVisible} footer={null} onCancel={() => handleCancel()}>
                    <UserForm originLabel='post' getValuesUserForm={getValuesUserForm}/>
                </Modal>
            </Row>
        }/>
    );
}

export default ExistingUsers;