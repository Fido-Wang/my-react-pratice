import React, { Component , useState } from 'react'
import {HashRouter as Router} from 'react-router-dom';
import './index.css'
import { Layout } from 'antd';
import  { Menu } from 'antd'
import { Breadcrumb } from 'antd';
import { Card } from 'antd';
import Dynamic from './Dynamic'

import {
    AppstoreOutlined,
    CalendarOutlined,
    LinkOutlined,
    MailOutlined,
    SettingOutlined,
    AlignLeftOutlined
} from '@ant-design/icons';

class AntDesignTest extends Component {
    state = {

    }
    onClick= (value)=> {
        console.log('muneValue', value)
    }
    render() {
        const { Header, Footer, Sider, Content } = Layout;
        // >=4.20.0 可用，推荐的写法 ✅
        const items = [
            {
                label: '菜单项一',
                key: 'item-1',
                icon: <AppstoreOutlined/>,
                children: [{
                    label: '子菜单项',
                    key: 'submenu-item-1',
                    icon: <AlignLeftOutlined />
                }],
            }, // 菜单项务必填写 key
            {
                label: '菜单项二',
                key: 'item-2',
                icon: <CalendarOutlined/>,
                children: [{
                    label: '子菜单项',
                    key: 'submenu-item-1',
                    icon: <LinkOutlined/>,
                }],

            },
            {
                label: '子菜单',
                key: 'submenu',
                icon: <MailOutlined/>,
                children: [{
                    label: '子菜单项',
                    key: 'submenu-item-1',
                    icon: <SettingOutlined/>,
                }],
            },
        ];
        return (
            <div className="ant-design-test-box">

                <Layout>
                    <Header>
                        <div className="header-left">

                        </div>
                        <div className="header-right">

                        </div>
                    </Header>
                    <Layout>
                        <Sider>
                            <div className="left-nav-bar">
                                <Menu
                                    onClick={ this.onClick }
                                    style={{ width: 256 }}
                                    defaultOpenKeys={['submenu-item-1']}
                                    mode="inline"
                                    items={items}
                                />
                            </div>
                        </Sider>
                        <Content>
                            <Breadcrumb>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <a href="">Application Center</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <a href="">Application List</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>An Application</Breadcrumb.Item>
                            </Breadcrumb>

                            <Card>
                                <Dynamic/>
                            </Card>
                        </Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}

export default AntDesignTest