import React, {Component} from 'react';
import { Button } from 'antd';
import './index.css'
class Footer extends Component {
    // const total = this.props.total
    checkAll=(event) => {
        this.props.handleCheckAll(event.target.checked)
    }
    deleteAll=()=> {
        this.props.handleDeleteAll()
    }
    render() {
        const { doneNumber, total} = this.props
        return (
            <div className="footer">
                <input type="checkBox" checked={doneNumber== total && total!==0} onChange={ this.checkAll }/>
                <span>已完成 { doneNumber }</span> <span>全部 { total }</span>
                <Button className="delete_button"  type="danger" onClick={ this.deleteAll }>清除已完成任务</Button>
            </div>
        );
    }
}

export default Footer;