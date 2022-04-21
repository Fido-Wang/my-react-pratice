import React, {Component} from 'react'
import './index.css'

class RouterTest extends Component {
    render() {
        return (
            <div className="routetest-container">
                <div className="routetest-header">Header</div>
                <div className="routetest-main">
                    <div className="routetest-nav">
                        <ul className='routetest-nav-ul'>
                            <li className="routetest-nav-li">home</li>
                            <li className="routetest-nav-li">about</li>
                        </ul>
                    </div>
                    <div className="routetest-content"></div>
                </div>
            </div>
        )
    }
}

export default RouterTest;