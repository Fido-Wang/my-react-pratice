import React, {Component} from 'react';
import { Button } from 'antd';
class Test extends Component {
    render() {
        console.log('home组件收到的props', this.props)
        return (
            <h3>
                Test...
            </h3>
        );
    }
}

export default Test;