import React, {Component} from 'react';
import './index.css'
/*Redirect 已被移除*/
import { NavLink, Route, Routes, Redirect, Navigate,Outlet } from 'react-router-dom'
import Home from './Home'
import About from "./About";
import Message from './Home/Pages/Message'
import News from './Home/Pages/News'
import Amap from './Amap'
import Echarts from './Echarts'
import AntDesign from './AntDesignTest'
import Test from "./Test";
import MyNavLink from '../MyNavLink'
import MessageDetail  from "./Home/Pages/Message/MessageDetail";
import ReduxTest from './ReduxTest'
class Main extends Component {
    render() {
        return (
            <div className="container">
                    <div className="leftNav">
                        <h3 >leftNav</h3>
                        <div>
                            <MyNavLink to="/about" className="left-nav-button">About</MyNavLink>
                        </div>
                        <div>
                            <MyNavLink to="/home" className="left-nav-button">Home</MyNavLink>
                        </div>
                        <div>
                            <MyNavLink to="/reduxTest" className="left-nav-button">redux</MyNavLink>
                        </div>
                        <div>
                            <MyNavLink to="/amap" className="left-nav-button">Amap</MyNavLink>
                        </div>
                        <div>
                            <MyNavLink to="/echarts" className="left-nav-button">Echarts</MyNavLink>
                        </div>
                        <div>
                            <MyNavLink to="/antd" className="left-nav-button">AntD</MyNavLink>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div className="header">
                            <h3>header</h3>
                        </div>
                        <div className="content">
                            {/*注册路由*/}
                            <Routes>
                                <Route path="/home"  element={<Home/>}>
                                    {/*<Route path="message" element={<Message/>}></Route>*/}
                                    {/* index 属性为默认的路由地址 */}
                                    <Route path="message" element={<Message/>}>
                                        <Route path=':id' element={<MessageDetail/>}/>
                                    </Route>
                                    <Route path="news" element={<News/>}></Route>
                                </Route>
                                <Route path="/about" element={<About/>}/>
                                <Route path="reduxTest" element={<ReduxTest/>}></Route>

                                <Route path="amap" element={<Amap/>}></Route>
                                <Route path="echarts" element={<Echarts/>}></Route>
                                <Route path="antd" element={<AntDesign/>}></Route>
                                <Route path="*" element={ <Navigate to="/home"/>}/>
                                {/*<Redirect to="/home"/>*/}
                                {/*如果一个路由匹配到多个组件
                                v5版本会把所有的对应的路由组件都展示出来
                                而v6版本匹配到对应的组件后 就不再往下寻找同时也对应的组件*/}
                                {/*<Route path="/home" element={<Test/>}/>*/}
                            </Routes>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Main;