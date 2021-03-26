import React from 'react';
import { Form, Input, Button, Row, Col, } from 'antd';

function OrderForm (props) {

    const formItems = [
        { 
            label: 'Seller store',
            name: 'store',
        },
        { 
            label: 'Shipping method',
            name: 'method',
        },
        { 
            label: 'External order number',
            name: 'orderNumber',
        },
        { 
            label: 'Buyer full name',
            name: 'name',
        },
        { 
            label: 'Buyer phone number',
            name: 'phone',
        },
        { 
            label: 'Buyer email',
            name: 'email',
        },
        { 
            label: 'Shipping address',
            name: 'address',
        },
        { 
            label: 'Shipping city',
            name: 'city',
        },
        { 
            label: 'Shipping region',
            name: 'region',
        },
        { 
            label: 'Shipping country',
            name: 'country',
        },
        { 
            label: 'Line items',
            name: 'items',
        },
    ];

    const handleSubmit = (values) => {
        props.getValuesOrderForm(values);
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
                    <Col key={i} span={7} offset={1}>
                        <Form.Item
                            label={item.label}
                            name={item.name}
                            rules={[{ required: true, message: 'type "' + item.label + '" field' }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
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