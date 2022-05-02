import React, {Component} from 'react';

class ReduxTest extends Component {
    state= { count: 0}
    increment=()=> {
        const { count } = this.state
        const { value } = this.selectNumber
        this.setState({ count: count+(value-0) })
    }
    decrement=()=> {
        const {count} = this.state
        const { value } = this.selectNumber
        this.setState({ count: count- (value-0)})
    }
    incrementIfOdd=()=> {
        const { value } =this.selectNumber
        const { count } = this.state
        if((value-0)%2!==0) {
            this.setState({ count: count+ (value-0)})
        }else {
            return
        }
    }
    incrementAsync=()=> {
        const {count} = this.state
        const {value} = this.selectNumber
        setTimeout(()=> {
            this.setState({ count: count+ (value-0)})
        },500)
    }
    render() {
        const {count} = this.state
        return (
            <div>
                <h2>当前数为：{count}</h2>
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