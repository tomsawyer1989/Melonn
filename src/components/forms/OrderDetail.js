import React, { useState, useEffect } from 'react';
import { Tabs, List, Form, Input, Select, Button, Row, Col, } from 'antd';
import { getMethodsList } from '../../services/melonn';

const { TabPane } = Tabs;

function OrderDetail (props) {

    const [orderData, setOrderData] = useState([]);
    const [shippingData, setShippingData] = useState([]);

    useEffect(() => {
        getOrderInfo();
        getShippingInfo();
    }, []);

    const getOrderInfo = () => {
        const dataAux = [];

        dataAux.push(
            {
                title: 'External order number',
                value: props.order.orderNumber,
            },
            {
                title: 'Buyer full name',
                value: props.order.name,
            },
            {
                title: 'Buyer phone number',
                value: props.order.phone,
            },
            {
                title: 'Buyer email',
                value: props.order.email,
            },
        );

        setOrderData(dataAux);
    }

    const getShippingInfo = () => {
        const dataAux = [];

        dataAux.push(
            {
                title: 'Shipping address',
                value: props.order.address,
            },
            {
                title: 'Shipping city',
                value: props.order.city,
            },
            {
                title: 'Shipping region',
                value: props.order.region,
            },
            {
                title: 'Shipping country',
                value: props.order.country,
            },
        );

        setShippingData(dataAux);
    }

    return(
        <Tabs defaultActiveKey="1">
            <TabPane tab="Order information" key="1">
                <List
                    itemLayout="horizontal"
                    dataSource={orderData}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.title}
                                description={item.value}
                            />
                        </List.Item>
                    )}
                />
            </TabPane>
            <TabPane tab="Shipping info" key="2">
                <List
                    itemLayout="horizontal"
                    dataSource={shippingData}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.title}
                                description={item.value}
                            />
                        </List.Item>
                    )}
                />
            </TabPane>
            <TabPane tab="Promise dates" key="3">
                {/* <List
                    itemLayout="horizontal"
                    dataSource={orderData}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.title}
                                description={item.value}
                            />
                        </List.Item>
                    )}
                /> */}
            </TabPane>
            <TabPane tab="Line items" key="4">
                {/* <List
                    itemLayout="horizontal"
                    dataSource={orderData}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.title}
                                description={item.value}
                            />
                        </List.Item>
                    )}
                /> */}
            </TabPane>
        </Tabs>
    );
}

export default OrderDetail;