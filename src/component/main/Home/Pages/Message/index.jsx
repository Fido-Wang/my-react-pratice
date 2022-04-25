import React, {Component} from 'react';
import {Link, Routes, Route, Outlet} from 'react-router-dom'
import MyNavLink from "../../../../MyNavLink";

class Message extends Component {
    state= {
        messageArr: [
            { id: 1, title: '消息1'},
            { id: 2, title: '消息2'},
            { id: 3, title: '消息3'}
        ]
    }
    render() {
        console.log('1111', this.props)
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map(item=> {
                            return (
                                <Link style={{ padding: '12px'}} key={item.id} to={`/home/message/${item.id}`}>
                                    {item.title}
                                </Link>
                            )
                        })
                    }
                </ul>
                <Outlet/>
            </div>
        );
    }
}

export default Message;