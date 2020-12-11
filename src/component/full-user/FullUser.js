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

                {user && <div>
                    {user.name}<br/> <hr/>
                    {user.username}<br/> <hr/>
                    {user.phone}<br/> <hr/>
                    {user.email}<br/> <hr/>
                    {user.website}<br/> <hr/>

                </div>}
            </div>
        );
    }
}

export default FullUser;