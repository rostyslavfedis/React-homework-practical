import React, {Component} from 'react';
import './comments/ComentStyle.css';
import './posts/PostComponent.css';
import './App.css';
import AllComments from "./comments/AllComments";
import AllPost from "./posts/AllPost";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>

                        <Link to={'/comments'}>comments</Link>


                        <Link to={'/posts'}>posts</Link>

                    <Switch>
                        <Route path={'/comments'} component={AllComments}></Route>
                        <Route path={'/posts'} component={AllPost}></Route>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;