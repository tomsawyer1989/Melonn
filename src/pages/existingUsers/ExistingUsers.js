import React, { useState, useEffect } from 'react';
import Default from '../../components/layouts/Default';
import { Modal, Row, Col, Button } from 'antd';
import UserForm from '../../components/forms/UserForm';
import { getUsers, postUser, patchUser, deleteUser } from '../../services/users';
import MaterialTable from 'material-table';

function ExistingUsers (props) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [data, setData] = useState([]);
    const [modalLabel, setModalLabel] = useState('');
    const [userPatch, setUserPatch] = useState(null);

    const columns = [
        {
            title: "Nombres",
            field: "name",
        },
        {
            title: "Apellidos",
            field: "lastname",
        },
        {
            title: "Identificación (C.C)",
            field: "identity",
        },
        {
            title: "Rol asociado",
            field: "role",
        },
        {
            title: "Estado",
            field: "state",
        },
        {
            title: "Teléfono",
            field: "phone",
        },
        {
            title: "Correo electrónico",
            field: "email",
        },
    ];

    const actions = [
        {
            icon: 'edit',
            tooltip: 'Editar',
            onClick: (event, rowData) => {showModal(); setModalLabel('editing'); setUserPatch(rowData);}
        },
        {
            icon: 'delete',
            tooltip: 'Eliminar',
            onClick: (event, rowData) => removeUser(rowData)
        }
    ];

    useEffect(() => {
        getUsers()
        .then(response => {
            if (response.success) {
                setData(response.users);
            }
        });
    }, []);

    const logOut = (value) => {
        props.logOut(value);
    }

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const hiddenModal = () => {
        setIsModalVisible(false);
    };

    const getValuesUserForm = (values, origin) => {
        if (origin === 'post') {
            switch (modalLabel) {
                case 'creating':
                    postUser(values)
                    .then(response => {
                        if (response.success) {
                            const dataAux = [...data];
                            dataAux.push(response.user);
                            setData(dataAux);
                        }
                    });
    
                    hiddenModal();
                break;
    
                case 'editing':
                    const params = userPatch.id;
    
                    patchUser(params, values)
                    .then(response => {
                        if (response.success) {
                            const dataAux = [...data];
                            const index = dataAux.indexOf(userPatch);
                            index !== -1 && dataAux.splice(index, 1);
                            dataAux.push(response.user);
                            setData(dataAux);
                        }
                    });
    
                    hiddenModal();
                break;

                default: console.log('');
            }
        }
        else {
            alert('Esta función de filtrado, aún no está implementada.');
        }
    }

    const removeUser = (user) => {
        const params = user.id;

        deleteUser(params)
        .then(response => {
            if (response.success) {
                const dataAux = [...data];
                const index = dataAux.indexOf(user);
                index !== -1 && dataAux.splice(index, 1);
                setData(dataAux);
            }
        });
    }

    return (
        <Default logOut={logOut} render={
            <Row style={{background: '#eeefff'}}>
                <Col xs={24} lg={{span: 18}} style={{padding: 20, background: 'white'}}>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={1}>
                                    <span style={{fontSize: 33, color: 'blue'}} className="material-icons">groups</span>
                                </Col>
                                <Col span={19} offset={1}>
                                    <span style={{color: 'blue', fontSize: 20}}>Usuarios existentes</span>
                                </Col>
                                <Col span={3}>
                                    <Button type="primary" style={{width: '100%', borderRadius: 5}} onClick={() => {showModal(); setModalLabel('creating');}}>
                                        Crear
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24} style={{marginTop: 60}}>
                            <MaterialTable
                                title=''
                                data={data}
                                columns={columns}
                                options={{ search: true, paging: true, filtering: false, actionsColumnIndex: -1, exportButton: true }}
                                actions={actions}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} lg={{span: 5, offset: 1}} style={{padding: 20, background: 'white'}}>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={1}>
                                    <span style={{fontSize: 30, color: 'blue'}} className="material-icons">person_search</span>
                                </Col>
                                <Col span={19} offset={4}>
                                    <span style={{color: 'blue', fontSize: 20}}>Filtrar búsqueda</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24} style={{marginTop: 20}}>
                            <UserForm originLabel='search' getValuesUserForm={getValuesUserForm}/>
                        </Col>
                    </Row>
                </Col>
                <Modal width={600} title={modalLabel === 'creating' ? 'Agregar nuevo usuario' : 'Editar usuario'} visible={isModalVisible} footer={null} onCancel={() => hiddenModal()}>
                    <UserForm originLabel='post' getValuesUserForm={getValuesUserForm}/>
                </Modal>
            </Row>
        }/>
    );
}

export default ExistingUsers;