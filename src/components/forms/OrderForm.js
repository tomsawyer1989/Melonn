import React from 'react';
import ProductsList from './ProductsList';
import { Form, Input, Select, Button, Row, Col, } from 'antd';

const { Option } = Select;

function OrderForm (props) {

    const formItems = [
        { 
            label: 'Seller store',
            name: 'store',
            type: 'input',
        },
        { 
            label: 'Shipping method',
            name: 'method',
            type: 'select',
        },
        { 
            label: 'External order number',
            name: 'orderNumber',
            type: 'input',
        },
        { 
            label: 'Buyer full name',
            name: 'name',
            type: 'input',
        },
        { 
            label: 'Buyer phone number',
            name: 'phone',
            type: 'input',
        },
        { 
            label: 'Buyer email',
            name: 'email',
            type: 'input',
        },
        { 
            label: 'Shipping address',
            name: 'address',
            type: 'input',
        },
        { 
            label: 'Shipping city',
            name: 'city',
            type: 'input',
        },
        { 
            label: 'Shipping region',
            name: 'region',
            type: 'input',
        },
        { 
            label: 'Shipping country',
            name: 'country',
            type: 'input',
        },
        { 
            label: 'Line items',
            name: 'items',
            type: 'inputList',
        },
    ];

    const handleSubmit = (values) => {
        props.getValuesOrderForm(values);
        console.log('values ', values);
    }

    const hiddenModal = () => {
        props.hiddenModal();
    };

    return (
        <Form
            name="normal_order"
            className="order-form"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            labelCol={{span: 24}}
        >
            <Row>
                {formItems.map((item, i) =>
                    {switch (item.type) {
                        case 'select':
                            return(
                                <Col key={i} span={7} offset={1}>
                                    <Form.Item
                                        label={item.label}
                                        name={item.name}
                                        rules={[{ required: true, message: 'type "' + item.label + '" field' }]}
                                    >
                                        <Select placeholder={"Select " + item.label}>
                                            {props.methods.map(item =>
                                                <Option key={item.id} value={item.name}>{item.name}</Option>
                                            )}
                                        </Select>
                                    </Form.Item>
                                </Col>
                            );

                        case 'inputList':
                            return(
                                <Col key={i} span={23} offset={1}>
                                   <ProductsList/>
                                </Col>
                            );
                    
                        default:
                            return (
                                <Col key={i} span={7} offset={1}>
                                    <Form.Item
                                        label={item.label}
                                        name={item.name}
                                        rules={[{ required: true, message: 'type "' + item.label + '" field' }]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                            );
                    }}
                )}
                <Col span={4} offset={7}>
                    <Form.Item>
                        <Button style={styles.confirmButton} type="primary" htmlType="submit" className="order-form-button">
                            Confirm
                        </Button>
                    </Form.Item>
                </Col>
                <Col span={4} offset={2}>
                    <Form.Item>
                        <Button style={styles.cancelButton} type="secondary" onClick={() => hiddenModal()} className="order-form-button">
                            Cancel
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}

const styles = {
    confirmButton: {
        background: 'green', 
        width: '100%', 
        borderRadius: 5
    },
    cancelButton: {
        background: 'white', 
        color: 'green', 
        width: '100%', 
        borderRadius: 5
    },
};

export default OrderForm;