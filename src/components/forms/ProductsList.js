import React from 'react';
import { Form, Input, Space, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

function ProductsList () {
    
    return (
        <Form.List name="lineItems">
            {(fields, { add, remove }) => (
                <>
                {fields.map(field => (
                    <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                        <Form.Item
                            {...field}
                            name={[field.name, 'product']}
                            fieldKey={[field.fieldKey, 'product']}
                            rules={[{ required: true, message: 'Missing product name' }]}
                        >
                            <Input placeholder="Product name" />
                        </Form.Item>
                        <Form.Item
                            {...field}
                            name={[field.name, 'qty']}
                            fieldKey={[field.fieldKey, 'qty']}
                            rules={[{ required: true, message: 'Missing product qty' }]}
                        >
                            <Input placeholder="Product qty" />
                        </Form.Item>
                        <Form.Item
                            {...field}
                            name={[field.name, 'weight']}
                            fieldKey={[field.fieldKey, 'weight']}
                            rules={[{ required: true, message: 'Missing product weight' }]}
                        >
                            <Input placeholder="Product weight" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(field.name)} />
                    </Space>
                ))}
                <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        Add Product
                    </Button>
                </Form.Item>
                </>
            )}
        </Form.List>
    );    
}

export default ProductsList;