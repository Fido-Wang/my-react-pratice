import React, {Component} from 'react';
import { Button } from 'antd';
import './index.css'
import PropTypes from "prop-types";
class ListItem extends Component {
    // 对接受的props进行 类型 和 必要性 的限制
    // static propTypes = {
    //     getItemChecked:PropTypes.func.isRequired,
    //     acceptDelete:PropTypes.func.isRequired
    // }
    // 发送切换的checkbox的id给list
    handleCheck=(id)=> {
        console.log('点击listitem中的选择框')
        return ()=> {
            // 把当前点击的复选框的id传给父组件list
            this.props.sendItemChecked(id)
        }}

    handleDelete=(id)=> {
        console.log('点击listitem中的删除')
        return ()=> {
            // 把当前点击删除的item的id传给父组件list
            this.props.delete(id)
        }
    }
    render() {
        console.log(this.props, 'listitem props')
        const { things, id ,isDid } = this.props
        return (
            <div className="listitem">
                <input type="checkBox" onChange={ this.handleCheck(id) } checked={ isDid } />
                <span className="things_box">{ things }</span>
                <Button className="delete-button" type="danger" onClick={ this.handleDelete(id) }>删除</Button>
            </div>
        );
    }
}

export default ListItem;