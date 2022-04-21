import React, {Component} from 'react';
class About extends Component {
    render() {
    console.log('about组件收到的props', this.props)
        return (
            <h2>
                About
            </h2>
        );
    }
}

export default About;