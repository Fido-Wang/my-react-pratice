import React, {Component} from 'react';
import {Link, Routes, Route, Outlet} from 'react-router-dom'

class Message extends Component {
    state= {
        messageArr: [
            { id: 1, title: '消息1'},
            { id: 2, title: '消息2'},
            { id: 3, title: '消息3'}
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map(item=> {
                            return (
                                <Link to={`/home/message/messageDetail/${item.id}`}>
                                    <li key={item.id}><h4>{item.title}</h4></li>
                                </Link>
                            )
                        })
                    }
                </ul>
                {/*<Outlet/>*/}
            </div>
        );
    }
}

export default Message;