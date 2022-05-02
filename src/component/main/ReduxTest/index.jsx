import React, {Component} from 'react';
import store from '../../../redux/store'
// 引入actionCreator 专门用于创建action对象
import { createIncrementAction, createDecrementAction} from '../../../redux/count_action'

class ReduxTest extends Component {
    componentDidMount() {
        // 监测redux中状态的变化，只要发生变化，就调用render 重新渲染页面
        store.subscribe(()=> {
            this.setState({})
        })
    }
    increment=()=> {
        const {value} = this.selectNumber
        store.dispatch(createIncrementAction(value-0))
    }
    decrement=()=> {
        const { value} = this.selectNumber
        store.dispatch(createDecrementAction(value-0))
    }
    incrementIfOdd=()=> {
        const {value}= this.selectNumber
        if((value-0)%2!==0) {
            store.dispatch(createIncrementAction(value-0))
        }else {
            return
        }

    }
    incrementAsync=()=> {
        const {value} = this.selectNumber
        setTimeout(()=> {
            store.dispatch(createIncrementAction(value-0))
        },500)

    }
    render() {
        return (
            <div>
                <h1>Redux-Test</h1>
                <h2>当前数count为：{ store.getState() }</h2>
                <select ref={ c=> { this.selectNumber =c}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={ this.increment }>+</button>
                <button onClick={ this.decrement }>-</button>
                <button onClick={ this.incrementIfOdd }>increment if odd</button>
                <button onClick={ this.incrementAsync }>increment async</button>
            </div>
        );
    }
}

export default ReduxTest;