import React, {Component} from 'react';
import AllUsers from "./component/all-user/AllUsers";

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
                        <Link to={'/'}>
                            home
                        </Link>
                        <Link to={'/users'}>
                            users
                        </Link>
                    </div>

                    <Switch>
                        <Route path={'/users'} render={()=> <AllUsers />}/>
                        <Route path={'/'}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}


export default App;
