import React, {Component} from 'react';
import PostServise from '../../service/PostServise';
import Post from "../post/Post";
import FullPost from "../full-post/FullPost";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


class AllPosts extends Component {
    userService = new PostServise();
    state = {users: []}

    async componentDidMount() {
        let users = await this.userService.users();
        this.setState({users});
    }

    render() {
        let {users} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    users.map(value => <Post item={value} key={value.id}/>)
                }


<hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <FullPost id={id} key={id}/>
                    }}/>
                </Switch>
<hr/>
            </div>

        );
    }
}

export default withRouter(AllPosts);