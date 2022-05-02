import React, {Component} from 'react';
import { Routes, Route, Outlet } from 'react-router-dom'
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { DownloadOutlined } from '@ant-design/icons';
import Message from './Pages/Message'
import News from './Pages/News'
import MyNavLink from "../../MyNavLink";
class Home extends Component {
    render() {
        console.log('home组件收到的props', this.props)
        return (
            <div style={{ background: 'green', height: '100%'}}>
                <Button type="primary" icon={<DownloadOutlined />} size="small">
                    Download
                </Button>
                <Row>
                    <Col span={24}><h2>Home</h2></Col>

                </Row>
                <Row>
                    <MyNavLink style={{ padding: '12px'}} to="/home/message">Message</MyNavLink>

                    <MyNavLink style={{ padding: '12px'}} to="/home/news">News</MyNavLink>
                </Row>

                <Outlet/>
            </div>
        );
    }
}

export default Home;