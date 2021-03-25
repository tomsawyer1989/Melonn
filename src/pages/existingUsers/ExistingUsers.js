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
            title: 'External order number',
            field: 'orderNumber',
        },
        { 
            title: 'Seller store',
            field: 'store',
        },
        { 
            title: 'Shipping method',
            field: 'method',
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

    const getValuesUserForm = (values) => {
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
                <Col span={24} style={{padding: 20, background: 'white'}}>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={1}>
                                    <span style={{fontSize: 33, color: 'blue'}} className="material-icons">list_alt</span>
                                </Col>
                                <Col span={20} offset={0}>
                                    <span style={{color: 'blue', fontSize: 20}}>Sell order list</span>
                                </Col>
                                <Col span={3}>
                                    <Button type="primary" style={{width: '100%', borderRadius: 5}} onClick={() => {showModal(); setModalLabel('creating');}}>
                                        Create
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
                <Modal width={600} title={modalLabel === 'creating' ? 'Add sell order' : 'Edit sell order'} visible={isModalVisible} footer={null} onCancel={() => hiddenModal()}>
                    <UserForm getValuesUserForm={getValuesUserForm} hiddenModal={hiddenModal}/>
                </Modal>
            </Row>
        }/>
    );
}

export default ExistingUsers;