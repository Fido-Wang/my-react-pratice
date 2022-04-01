import React,{Component} from 'react'
// import Hello from './component/Hello'
import ToDoList from './component/TodoList/index'
import SearchGithub from './component/SearchGithub/index'
import SearchGithubByPubsubjs from'./component/SearchGithub_pubsub_js/index'
class App extends Component {
    render() {
                // <ToDoList/>
        return (
            <div>
                <SearchGithubByPubsubjs/>
            </div>
        )
    }
}
export default App
