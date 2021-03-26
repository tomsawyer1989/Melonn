import React, { useState, useEffect } from 'react';
import Default from '../../components/layouts/Default';
import { Modal, Row, Col, Button } from 'antd';
import OrderForm from '../../components/forms/OrderForm';
import OrderDetail from '../../components/forms/OrderDetail';
import { getOrders, postOrder, deleteOrder } from '../../services/orders';
import MaterialTable from 'material-table';

function ExistingOrders (props) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [data, setData] = useState([]);
    const [modalLabel, setModalLabel] = useState('');
    const [order, setOrder] = useState(null);

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
            title: 'Creation date',
            field: 'date',
        },
        { 
            title: 'Shipping method',
            field: 'method',
        },
    ];

    const actions = [
        {
            icon: 'search',
            tooltip: 'Check',
            onClick: (event, rowData) => {showModal(); setModalLabel('consulting'); setOrder(rowData);}
        },
        {
            icon: 'delete',
            tooltip: 'Delete',
            onClick: (event, rowData) => removeOrder(rowData)
        }
    ];

    useEffect(() => {
        getOrders()
        .then(response => {
            if (response.success) {
                setData(response.orders);
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

    const getValuesOrderForm = (values) => {
        postOrder(values)
        .then(response => {
            if (response.success) {
                const dataAux = [...data];
                dataAux.push(response.order);
                setData(dataAux);
            }
        });

        hiddenModal();
    }

    const removeOrder = (order) => {
        const params = order.id;

        deleteOrder(params)
        .then(response => {
            if (response.success) {
                const dataAux = [...data];
                const index = dataAux.indexOf(order);
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
                <Modal width={600} title={modalLabel === 'creating' ? 'Add sell order' : 'Consulting sell order'} visible={isModalVisible} footer={null} onCancel={() => hiddenModal()}>
                    {modalLabel === 'creating' ? 
                        <OrderForm getValuesOrderForm={getValuesOrderForm} hiddenModal={hiddenModal}/>
                        :
                        <OrderDetail order={order}/>
                    }
                </Modal>
            </Row>
        }/>
    );
}

export default ExistingOrders;