import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './index.css'

class Header extends Component {
    state= {
        value:''
    }
    // 对接受的props进行 类型 和 必要性 的限制
    // static propTypes = {
    //     getHeaderValue:PropTypes.func.isRequired,
    // }
    inputValue = (event)=> {
        if(event.keyCode != 13) return
        const { value } = this.state
        const inputvalue = event.target.value
        // 把当前输入框中的value传递给父组件todolist
        this.props.handleInput(inputvalue)
        event.target.value = ''
    }
    render() {
        return (
            <div className="header">
                <input className="add-input" type="text" placeholder="请输入你的任务名称，按回车确认添加" onKeyDown={ this.inputValue }/>
            </div>
        );
    }
}

export default Header;