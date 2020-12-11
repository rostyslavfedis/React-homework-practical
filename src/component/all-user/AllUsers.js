import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import './AllUsers.css'
import UserService from "../../services/UserService";
import User from "../user/User";
import FullUser from "../full-user/FullUser";


class AllUsers extends Component {

    userService = new UserService();
    state = {users: []}

    async componentDidMount() {
        let users = await this.userService.users();
        this.setState({users});
    }
    render() {

        let {users} = this.state;
        let {match: {url}} = this.props;
        return (
            <div className={'all-user-item'}>
                <div className={'user-block'}>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
                </div>

                <div className={'full-users-main'}>
                <Switch>
                    <Route path={url + '/:id'} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <FullUser id={id} key={id}/>
                    }}/>
                </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);