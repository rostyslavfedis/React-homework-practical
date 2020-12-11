
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllPosts from "./component/all-posts/AllPosts";
import AllComments from "./component/all-comments/AllComments";
class App extends Component {
  render() {
    return (
<Router>
    <div>
        <ul>
            <li> <Link to={'/'}>home</Link></li>
            <li>
                <Link to={'/posts'}>to all posts</Link>

            </li>
            <li>
                <Link to={'/comments'}>to all comments</Link>
            </li>
        </ul>
        <hr/>
        <Switch>
            <Route path={'/posts'} render={()=><AllPosts/>}></Route>

            <Route path={'/comments'} render={()=><AllComments/>}></Route>
        </Switch>

        <hr/>

    </div>
</Router>

    );
  }
}

export default App;
