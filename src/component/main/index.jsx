import React, {Component} from 'react';
import './index.css'
import { Button } from 'antd';
/*Redirect 已被移除*/
import { NavLink, Route, Routes, Redirect, Navigate,Outlet } from 'react-router-dom'
import Home from './Home'
import About from "./About";
import Message from './Home/Pages/Message'
import News from './Home/Pages/News'
import Test from "./Test";
import MyNavLink from '../MyNavLink'
class Main extends Component {
    render() {
        return (
            <div className="container">
                    <div className="leftNav">
                        <h3>leftNav</h3>
                        {/*
                            activeClassName 当前的NavLink标签被选中的时候 就添加该属性值的className
                            activeClassName="active"  可以省略 因为默认选中NavLink标签会自动添加active 的className
                        */}
                        {/*<NavLink activeClassName="active"  to="/home">
                            home
                        </NavLink>*/}

                        {/*<NavLink activeClassName="active"  to="/about">
                            about
                        </NavLink>*/}
                        {/*<MyNavLink to="/about" children="ABOUT" />*/}
                        <div>
                            <MyNavLink to="/about" >ABOUT</MyNavLink>
                        </div>
                        <div>
                            <MyNavLink to="/home" >HOME</MyNavLink>
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
                                    <Route index element={<Message/>}></Route>
                                    <Route path="news" element={<News/>}></Route>
                                </Route>
                                <Route path="/about" element={<About/>}/>
                                <Route path="*" element={ <Navigate to="/home"/>}/>
                                {/*<Redirect to="/home"/>*/}
                                {/*如果一个路由匹配到多个组件
                                v5版本会把所有的对应的路由组件都展示出来
                                而v6版本匹配到对应的组件后 就不再往下寻找同时也对应的组件*/}
                                {/*<Route path="/home" element={<Test/>}/>*/}
                            </Routes>
                                <Outlet />
                        </div>
                    </div>
            </div>
        );
    }
}

export default Main;