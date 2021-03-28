import React, { useState, useEffect } from 'react';
import { Tabs, List } from 'antd';
import { getPromises } from '../../services/orders';

const { TabPane } = Tabs;

function OrderDetail (props) {

    const [orderData, setOrderData] = useState([]);
    const [shippingData, setShippingData] = useState([]);
    const [promiseData, setPromiseData] = useState([]);

    useEffect(() => {
        const methodObject = props.methods.filter(item => item.name === props.order.method)[0];

        getPromises(methodObject.id)
        .then(response => {
            if (response.success) {
                getPromiseInfo(response.promises);
            }
        });        
    }, [props.methods, props.order.method]);

    useEffect(() => {
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

        getOrderInfo();
        getShippingInfo();
    }, []);

    const getPromiseInfo = (promises) => {
        const dataAux = [];

        dataAux.push(
            {
                title: 'Pack promise min',
                value: promises.pack_promise_min,
            },
            {
                title: 'Pack promise max',
                value: promises.pack_promise_max,
            },
            {
                title: 'Ship promise min',
                value: promises.ship_promise_min,
            },
            {
                title: 'Ship promise max',
                value: promises.ship_promise_max,
            },
            {
                title: 'Delivery promise min',
                value: promises.delivery_promise_min,
            },
            {
                title: 'Delivery promise max',
                value: promises.delivery_promise_max,
            },
            {
                title: 'Ready pickup promise min',
                value: promises.ready_pickup_promise_min,
            },
            {
                title: 'Ready pickup promise max',
                value: promises.ready_pickup_promise_max,
            },
        );

        setPromiseData(dataAux);
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
                <List
                    itemLayout="horizontal"
                    dataSource={promiseData}
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