import React, {Component} from "react";
import './index.scss'
import { Button } from 'antd'
import axios from "axios";
class SearchGithub extends Component {
    search=()=> {
        console.log(this.keywordElement.value)
        // 发送请求之前 先把loadding 打开
        this.props.updateAppState({isFirst: false, isLoadding: true})
        const { keywordElement: { value:keyword }} = this
        axios.get(`/api1/search/users?q=${ keyword }`).then(
            response=> {
                const { items } = response.data
                this.props.updateAppState({isLoadding: false, list: items})
            },
            error=> {
                console.log('error',error)
                this.props.updateAppState({ isLoadding: false,err: error.message})
            }
        )
    }
    render() {
        return (
            <div>
                <div className="top_container">
                    <input ref={(c)=> { this.keywordElement = c }} type="text" placeholder="please input your key word"/>
                    <Button type="primary" onClick={ this.search }>search </Button>
                </div>
            </div>
        );
    }
}

export default SearchGithub;