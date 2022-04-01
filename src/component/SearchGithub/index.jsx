import React, {Component} from "react";
import './index.scss'
import SearchTop from './SearchTop'
import SearchResult from './SearchResult'
class SearchGithub extends Component {
    state = {
        list: [],
        isFirst: true, // 是否第一次打开页面
        isLoadding: false, // 正在加载中
        err:'' // 请求报错信息

    }
    // 通用的更新state状态的方法
    updateAppState=( stateObj )=> {
        console.log(this.state)
        this.setState(stateObj)
    }
    render() {
        // const {state:stateObj} = this.state
        return (
            <div className="container">
                <SearchTop updateAppState={ this.updateAppState }/>
                <SearchResult { ...this.state }/>
            </div>
        );
    }
}

export default SearchGithub;