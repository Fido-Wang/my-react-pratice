import React, {Component} from "react";
import PubSub from 'pubsub-js'
import './index.scss'
class SearchGithub extends Component {
    state = {
        list: [],
        isFirst: true, // 是否第一次打开页面
        isLoadding: false, // 正在加载中
        err:'' // 请求报错信息
    }

    openCurUserHomePage=(event)=> {
        console.log(event.target)
        return window.open(event.target.value.html_url)
    }

    componentDidMount() {
        // 消息订阅
        PubSub.subscribe('MY_TOPIC',(msg, data)=> {
            console.log('接受订阅的消息', msg, data)
            this.setState({ ...data})
        })
    }

    // let token = PubSub.publish('MY_TOPIC',mySubscriber)
    render() {
        const { list, isLoadding, isFirst , err} = this.state
        return (
            <div className="search_result_box">
                {
                    isFirst? <h2>welcome</h2>:
                    isLoadding? <h2>loadding...</h2>:
                    err? <h2 style={{ color: 'red'}}>err</h2>:
                    list.map(item=> {
                        return (
                            <div onClick={ this.openCurUserHomePage } className="box_container" key={item.id}>
                                <a href={item.html_url} target="_blank">
                                    <img src={item.avatar_url} alt=""/>
                                </a>
                                <h2>{ item.login }</h2>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default SearchGithub;