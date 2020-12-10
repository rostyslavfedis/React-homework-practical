import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import AllUsers from "./AllUsers";
import AllPosts from "../Posts/AllPosts";

class User extends Component {

    render() {
        let {match:{url},item, showPosts}=this.props;
        return (
            <Router>
            <div>
                {item.id}-{item.name}
                <button onClick={()=> showPosts(item.id)}>Posts</button>
                <Link to={url+'/'+ item.id}>posts</Link>

            </div>

            </Router>
        );
    }
}

export default withRouter(User);