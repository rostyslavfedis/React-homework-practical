import React, {Component} from 'react';
import UserService from "../../services/UserService";
import User from "./User";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import AllPosts from "../Posts/AllPosts";

class AllUsers extends Component {


    render() {
        let {match: {url}, users, showPosts} = this.props;
        return (
            <div>
                {users.map(value => <User key={value.id} item={value} showPosts={showPosts}/>)}
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={() => {
                        return <AllPosts/>;
                    }}>

                    </Route>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllUsers);