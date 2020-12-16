import React, {Component} from 'react';
import UserService from "../../services/UserService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Posts from "../post/Posts";


class FullUser extends Component {
    state = {user: null};
    userService = new UserService();


    async componentDidMount() {
        let {usersId} = this.props;
        let user = await this.userService.user(usersId);

        this.setState({user})

    }

    render() {
        let {user} = this.state;
        const {match:{url}, usersId}=this.props;
        return (
            <div>
            <div className={'details-user'}>

                {user && <div className={'relative'}>
                    <div className={'name'}>{user.name}</div>
                    <div className={'username'}>{user.username} </div>
                    <hr/>
                    <div className={"phone"}><span className={'title'}>Phone: </span>{user.phone}</div>
                    <hr/>
                    <div className={"email"}><span className={'title'}>Email: </span>{user.email}</div>
                    <hr/>
                    <div className={"website"}><span className={'title'}>Website: </span>{user.website}</div>
                    <div className={"button-posts"}><Link to={url+'/posts'}><span className={'button-post'}>posts</span></Link></div>
                </div>}


            </div>

                    <Route path={url+'/posts'} render={()=>{
                        return <Posts userId={usersId}/>;
                    }}/>


            </div>
        );
    }
}

export default withRouter(FullUser);