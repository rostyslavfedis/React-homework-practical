import React, {Component} from 'react';
import './AllUsers.css'
import UserService from "../../services/UserService";
import User from "../user/User";
import FullUser from "../full-user/FullUser";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


class AllUsers extends Component {

    userService = new UserService();
    state = {users: []}

    async componentDidMount() {
        let users = await this.userService.users();
        this.setState({users});
    }
    render() {
        let {users} = this.state;
        const {match:{url}}=this.props;
        return (
            <div className={'all-user-item'}>
                <div className={'user-block'}>
                {
                    users.map(value => <User item={value} key={value.id} />)
                }
                </div>
                <Switch>
                <Route path={url+'/:id'} render={(props)=>{
                    const{match:{params:{id}}}=props;
                    return <FullUser usersId={id} key={id} />
                }}></Route>
            </Switch>
            </div>
        );
    }
}

export default withRouter(AllUsers);