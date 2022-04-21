import React, {Component} from 'react';
import './index.css'
import { Button } from 'antd';
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from "./About";
class Main extends Component {
    render() {
        return (
            <div className="container">
                    <div className="leftNav">
                        <Link to="/home">
                            <Button>home</Button>
                        </Link>

                        <Link to="/about">
                            <Button>about</Button>
                        </Link>
                    </div>
                    <div className="rightContainer">
                        <div className="header"></div>
                        <div className="content">
                            {/*注册路由*/}
                            <Routes>
                                <Route path="/home"  element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                            </Routes>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Main;