import React, {Component} from 'react';
import { Routes, Route, } from 'react-router-dom'
import { Button } from 'antd';
import Message from './Pages/Message'
import News from './Pages/News'
import MyNavLink from "../../MyNavLink";
class Home extends Component {
    render() {
        console.log('home组件收到的props', this.props)
        return (
            <div>
                <h2>Home</h2>
                <MyNavLink to="/home/message">Message</MyNavLink>
                <MyNavLink to="/home/news">News</MyNavLink>
                    {/*<Message></Message>
                    <News></News>*/}
                    <Routes>
                        <Route path="message" element={<Message/>} />
                        <Route path="news" element={<News/>} />
                    </Routes>
            </div>
        );
    }
}

export default Home;