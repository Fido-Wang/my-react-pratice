import React, {Component} from 'react';
import './index.css'
import Header from "./component/Header";
import List from "./component/List"
import Footer from './component/Footer'

class TodoList extends Component {
    state= {
        list: [
            {
                id: '00',
                things: '吃饭',
                isDid: true
            },
            {
                id: '11',
                things: '睡觉',
                isDid: false
            },
            {
                id: '22',
                things: '打豆豆',
                isDid: true
            },
            {
                id: '33',
                things: '扫雷',
                isDid: false
            },
            {
                id: '44',
                things: '写代码',
                isDid: true
            },
        ]
    }
    // 接受list传来的listitem中删除的那个item的id
    toItem = (id)=> {
        if( window.confirm('确定要删除吗')){
            const { list } = this.state
            const newList = list.filter(item=> {
                return item.id !== id
            })
            this.setState({ list: [...newList]})
        }
    }

    // 取到子组件的子组件传来的切换复选框的那一项的id 在这里做状态isdid的切花
    getChecked=(id)=> {
        console.log('listitem 的 id',id) // listItem传过来的id
        const {list} = this.state
        list.forEach(item=> {
            if(item.id == id) {
                item.isDid = !item.isDid
            }
        })
        this.setState({ list: [...list]})
    }
    // 拿到子组件Header的输入框的值 在这里添加到list中
    getHeaderValue = (value)=> {
        console.log('value',value)
        const { list} = this.state
        const newItem = {
            id: new Date().getTime(),
            things: value,
            isDid: false
        }
        console.log(newItem)
        this.setState({ list: [ newItem, ...list]})
    }
    // 全选
    checkAllItem=(boolean) => {
        const {list} = this.state
        const newlist = list.map(item=> {
            return {...item, isDid: boolean}
        })
        this.setState( { list: newlist} )
    }
    deleteAllItem=(boolean)=> {
        // 删除所有 isdis 为 true 的项
        const {list} = this.state
        const newlist = list.filter(item=> {
            return !item.isDid
        })
        this.setState({list: newlist})
    }
    render() {
        const {list} = this.state
        let doneNum = 0
        doneNum=list.reduce((pre,cur)=> {
             return pre + cur.isDid // true 和 false 做运算 等于 1 和 0
        },0)
        return (
            <div className="container">
                <Header handleInput={ this.getHeaderValue }/>
                <List list={ this.state.list } toFather={ this.toItem } toFatherChecked={ this.getChecked }/>
                <Footer total={ list.length } doneNumber={ doneNum } handleCheckAll={ this.checkAllItem } handleDeleteAll={ this.deleteAllItem }/>
            </div>
        );
    }
}

export default TodoList;