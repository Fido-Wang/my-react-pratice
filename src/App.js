import React,{Component} from 'react'
import './App.css'
// import Hello from './component/Hello'
import ToDoList from './component/TodoList/index'
import SearchGithub from './component/SearchGithub/index'
// import SearchGithubByPubsubjs from'./component/SearchGithub_pubsub_js/index'
// import ReactRouterTest from './component/react_router_test'
import Main from './component/main'
import * as echarts from 'echarts';
class App extends Component {
    render() {
                // <ToDoList/>
        return (
            <div className="app-container">
                <Main/>
            </div>
        )
    }
}
export default App
