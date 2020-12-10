import React, {Component} from 'react';
import PostService from "../../services/PostService";
import Post from "./Post";

class AllPosts extends Component {
    state = {posts: []};
    postService = new PostService();

    async componentDidMount() {
        let posts = await this.postService.getAllPost();
        this.setState({posts});
    }

    render() {
        let {posts} = this.state;
        console.log(posts);
        return (
            <div>
                {posts.map(value => <Post key={value.id} item={value}/>)}

            </div>
        );
    }
}

export default AllPosts;