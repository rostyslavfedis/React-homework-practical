import React, {Component} from 'react';
import PostComponent from "./PostComponent";
import {PostService} from "../services/PostService";

class AllPost extends Component {
    postService=new PostService();
    state={posts:[]};

    componentDidMount() {
      this.postService.getAllPost().then(value => this.setState({posts:value}))
    }


    render() {
        let {posts}=this.state;
        return (
            <div>
                <h1>All Posts</h1>
                {
                    posts.map(value=>(<PostComponent item={value} key={value.id}/>))
                }
            </div>
        );
    }
}

export default AllPost;