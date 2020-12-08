import React, {Component} from 'react';
import AllUsers from "./component/Users/AllUsers";
import AllPosts from "./component/Posts/AllPosts";
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
                    <div>
                        <Link to={'/users'}>
                            users
                        </Link>
                    </div>
                    <div>
                        <Link to={'/posts'}>
                            posts
                        </Link>
                    </div>
                    <Switch>
                        <Route path={'/users'} component={AllUsers}/>

                        <Route path={'/posts'} component={AllPosts}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;
