import React, {Component} from 'react';
import AllUsers from "./component/Users/AllUsers";
import AllPosts from "./component/Posts/AllPosts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PostService from "./services/PostService";
import UserService from "./services/UserService";

class App extends Component {

    state = {
        users: [],
        posts: [],
        post: null
    }

    postService = new PostService()
    userService = new UserService()

    async componentDidMount() {
        let posts = await this.postService.getAllPost();
        this.setState({posts})

        let users = await this.userService.getAllUsers();
        this.setState({users})
    }

    showPosts = (id) => {
        let arr = [];
        let filter = this.state.posts.filter(p => p.userId === id);
        arr.push(filter);
        this.setState({post: arr})
    }

    render() {
        let {users, posts, post} = this.state;
        console.log(post);
        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/'}>
                            home
                        </Link>
                        <Link to={'/users'}>
                            users
                        </Link>
                    </div>

                    <Switch>
                        <Route path={'/users'} render={()=> <AllUsers users={users} posts={posts} showPosts={this.showPosts}/>}/>
                        <Route path={'/'}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}


export default App;
