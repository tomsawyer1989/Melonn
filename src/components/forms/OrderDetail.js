import React, { useState, useEffect } from 'react';
import { Tabs, List } from 'antd';
import MaterialTable from 'material-table';
import { getPromises } from '../../services/orders';

const { TabPane } = Tabs;

function OrderDetail (props) {

    const [orderData, setOrderData] = useState([]);
    const [shippingData, setShippingData] = useState([]);
    const [promiseData, setPromiseData] = useState([]);

    const columns = [
        { 
            title: 'Product',
            field: 'product',
        },
        { 
            title: 'Qty',
            field: 'qty',
        },
        { 
            title: 'Weight',
            field: 'weight',
        },
    ];

    useEffect(() => {
        const methodObject = props.methods.filter(item => item.name === props.order.method)[0];

        getPromises(methodObject.id)
        .then(response => {
            if (response.success) {
                getPromiseInfo(response.promises);
            }
        });        
    }, [props.methods, props.order]);

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
    }, [props.order]);

    const getPromiseInfo = (promises) => {
        const dataAux = [];

        dataAux.push(
            {
                title: 'Pack promise min',
                value: promises.pack_promise_min !== null ? promises.pack_promise_min : 'null',
            },
            {
                title: 'Pack promise max',
                value: promises.pack_promise_max !== null ? promises.pack_promise_max : 'null',
            },
            {
                title: 'Ship promise min',
                value: promises.ship_promise_min !== null ? promises.ship_promise_min : 'null',
            },
            {
                title: 'Ship promise max',
                value: promises.ship_promise_max !== null ? promises.ship_promise_max : 'null',
            },
            {
                title: 'Delivery promise min',
                value: promises.delivery_promise_min !== null ? promises.delivery_promise_min : 'null',
            },
            {
                title: 'Delivery promise max',
                value: promises.delivery_promise_max !== null ? promises.delivery_promise_max : 'null',
            },
            {
                title: 'Ready pickup promise min',
                value: promises.ready_pickup_promise_min !== null ? promises.ready_pickup_promise_min : 'null',
            },
            {
                title: 'Ready pickup promise max',
                value: promises.ready_pickup_promise_max !== null ? promises.ready_pickup_promise_max : 'null',
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
                <MaterialTable
                    title=''
                    data={props.order.lineItems.map(item => {return item})}
                    columns={columns}
                    options={{ search: true, paging: true, filtering: false, actionsColumnIndex: -1, exportButton: true }}
                />
            </TabPane>
        </Tabs>
    );
}

export default OrderDetail;