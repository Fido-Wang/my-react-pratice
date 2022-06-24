import React, {Component} from 'react';
import { Select } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
class Dynamic extends Component {
    handleChange = (value)=> {
        console.log('change SELECTA', value)
    }
    render() {
        const { TextArea } = Input;
        const { Option } = Select;
        return (
            <div>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={ this.handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled">Fantasy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <TextArea rows={4} />
                <Button type="primary">发布动态</Button>
                <Button>照片</Button>
                <Button type="dashed">文件</Button>
                <Select defaultValue="lucy" style={{ width: 120 }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled">Fantasy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </div>
        );
    }
}

export default Dynamic;