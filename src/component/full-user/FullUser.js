import React, {Component} from 'react';
import UserService from "../../services/UserService";



class FullUser extends Component {
    state={user:null};
    userService=new UserService();


    async  componentDidMount() {
        let {id}=this.props;
        let user= await this.userService.user(id);

        this.setState({user})

    }

    render() {

        let{user}=this.state;

        return (
            <div className={'details-user'}>

                {user && <div className={'relative'}>
                   <div className={'name'}>{user.name}</div>
                    <div className={'username'}>{user.username} </div><hr/>
                    <div className="phone"><span className={'title'}>Phone: </span>{user.phone}</div><hr/>
                    <div className="email"><span className={'title'}>Email: </span>{user.email}</div> <hr/>
                    <div className="website"><span className={'title'}>Website: </span>{user.website}</div>

                </div>}
            </div>
        );
    }
}

export default FullUser;