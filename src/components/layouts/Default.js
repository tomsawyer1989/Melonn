import React, { useState } from 'react';
import { Avatar, Layout, Menu, Button, Tooltip } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  UploadOutlined,
  FileOutlined,
  UnorderedListOutlined,
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
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={styles.sidebar}>
                    <Menu.Item key="1" icon={<UserOutlined style={{fontSize: 24}}/>} style={styles.itemHeader}>
                        OLSoftware
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined style={{fontSize: 24}}/>} style={styles.item}>
                        Programación
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UnorderedListOutlined style={{fontSize: 24}}/>} style={styles.item}>
                        Gestión de operaciones
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UserOutlined style={{fontSize: 24}}/>} style={styles.item}>
                        Perfiles
                    </Menu.Item>
                    <Menu.Item key="5" icon={<UserOutlined style={{fontSize: 24}}/>} style={styles.item}>
                        Roles
                    </Menu.Item>
                    <Menu.Item key="6" icon={<UploadOutlined style={{fontSize: 24}}/>} style={styles.item}>
                        Usuario
                    </Menu.Item>
                    <Menu.Item key="7" icon={<FileOutlined style={{fontSize: 24}}/>} style={styles.item}>
                        Reportes
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0, color: 'blue' }}>
                    {React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                    <span style={{marginLeft: 15, fontSize: 20}}>Prueba Front-end</span>
                    <Avatar style={{marginLeft: '54%'}} size="large" icon={<UserOutlined />}/>
                    <span style={{marginLeft: 15, color: 'black'}}>{localStorage.getItem('user')}</span>
                    <Tooltip title="Cerrar sesión">
                        <Button shape="circle" icon={<ExportOutlined />} style={{marginLeft: 40}} onClick={() => logOut()}/>
                    </Tooltip>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        // padding: 24,
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