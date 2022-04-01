import React, {Component} from "react";
import './index.scss'
import SearchTop from './SearchTop'
import SearchResult from './SearchResult'
class SearchGithub extends Component {
    render() {
        return (
            <div className="container">
                <SearchTop/>
                <SearchResult/>
            </div>
        );
    }
}

export default SearchGithub;