import React, {Component} from 'react';
import {PostService} from "../../services/PostService";
import UserService from "../../services/UserService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import AllPost from "../all-post/AllPost";

class Post extends Component {
    state = {
        posts: [],
        post: null
    }

    postService = new PostService();


    async componentDidMount() {
        let posts = await this.postService.getAllPost();
        this.setState({posts})

    }

    showPosts = (id) => {
        let arr = [];
        let filter = this.state.posts.filter(post => post.userId === id);
        arr.push(filter);
        this.setState({post: arr})
    }
    render() {
        let { posts, post} = this.state;

        return (
            <Router>
                <div>
    <Link to={'/users/11'}>post</Link>
                </div>
            </Router>
        );
    }
}

export default Post;
