import React, {Component} from 'react';
import PropTypes from 'prop-types'
import ListItem from "../ListItem";
import './index.css'
class List extends Component {

    // 对接受的props进行 类型 和 必要性 的限制
    // static propTypes = {
    //     toItem:PropTypes.func.isRequired,
    //     getChecked:PropTypes.func.isRequired,
    //     list:PropTypes.array.isRequired,
    // }
    acceptDelete= (id)=> {
        // 把子组件listitem中删除的一项的id  传给父组件todolist
        this.props.toFather(id)
    }

    getItemChecked=(id)=> {
        // 把子组件listitem切换复选框状态的那一项的id拿来 传递给父组件todolist
        this.props.toFatherChecked(id)
    }
    render() {
        return (
            <div className="list">
                {
                    this.props.list.map(item=> {
                        return (
                                <ListItem key={ item.id } delete={ this.acceptDelete } sendItemChecked={ this.getItemChecked} {...item }/>
                            )
                    })
                }
            </div>
        );
    }
}

export default List;