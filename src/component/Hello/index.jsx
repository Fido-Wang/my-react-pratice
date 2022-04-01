import React,{Component} from 'react'
import { Button } from 'antd';

import './index.css'
export default class Hello extends Component{
    render() {
        return (
            <div className="title">Hello!React222 <Button  type="primary">Start</Button></div>
        )
    }
}