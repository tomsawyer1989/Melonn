import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Avatar, Layout, Menu, Button, Tooltip } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  ExportOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

function Default (props) {
  
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const logOut = () => {
        props.logOut(true);
    }

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={styles.sidebar}>
                    <Menu.Item key="1" icon={<span style={{fontSize: 30}} className="material-icons">fiber_manual_record</span>} style={styles.itemHeader}>
                        <NavLink to="/" className="nav-text">
                            Melonn
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<span style={{fontSize: 30}} className="material-icons">fact_check</span>} style={styles.item}>
                        <NavLink to="/existing-orders" className="nav-text">
                            Sell order
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0, color: 'blue' }}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>
                            {React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
                                className: 'trigger',
                                onClick: toggle,
                            })}
                            <span style={{marginLeft: '20px', fontSize: 20}}>Prueba Front-end</span>
                        </div>
                        <div>
                            <Avatar style={{marginRight: '15px'}} size="large" icon={<UserOutlined />}/>
                            <span style={{marginRight: '40px', color: 'black'}}>{localStorage.getItem('user')}</span>
                            <Tooltip title="Log out">
                                <Button shape="circle" icon={<ExportOutlined style={{color: 'blue'}}/>} style={{marginRight: '20px'}} onClick={() => logOut()}/>
                            </Tooltip>
                        </div>
                    </div>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        minHeight: 280,
                    }}
                >
                    {props.render}
                </Content>
            </Layout>
        </Layout>
    );
}

const styles = {
    sidebar: {
        height: '100%',
        background: 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    },
    itemHeader: {
        paddingLeft: 25,
        paddingTop: 10,
        height: 60,
        borderBottom: '1px solid white',
        borderRadius: 2,
    },
    item: {
        paddingLeft: 25,
        paddingTop: 10,
        height: 60,
        borderRadius: 7,
    },
};

export default Default;