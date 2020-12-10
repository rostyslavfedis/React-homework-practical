import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class Post extends Component {
    render() {
        let {item}=this.props;
        return (
            <div>
                {item.id}-{item.title}
            </div>
        );
    }
}

export default Post;