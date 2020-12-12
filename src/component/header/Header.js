import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllUsers from "../all-user/AllUsers";
import './Header.css'
import {PostService} from "../../services/PostService";
class Header extends Component {
    state = {
        posts: [],
        post: null
    }

    postService = new PostService()


    async componentDidMount() {
        let posts = await this.postService.getAllPost();
        this.setState({posts})

    }

    showPosts = (id) => {
        let arr = [];
        let filter = this.state.posts.filter(p => p.userId === id);
        arr.push(filter);
        this.setState({post: arr})
    }


    render() {
        let { posts, post} = this.state;
        return (
            <div className={'body'}>
                <div className={'header'}>
                    <Router>
                        <div className={'menu'}>

                        <div className={'header-home'}>
                            <Link  to={'/'}>
                                <h1>home</h1>
                            </Link>
                        </div>
                        <div className={'header-users'}>
                            <Link to={'/users'}>
                               <h2>users</h2>
                            </Link>
                        </div>
                        </div>
                        <Switch>
                            <Route path={'/users'} render={()=> <AllUsers  posts={posts} showPosts={this.showPosts}/>}/>
                            <Route path={'/'}/>
                        </Switch>
                    </Router>
                </div>


            </div>
        );
    }
}

export default Header;