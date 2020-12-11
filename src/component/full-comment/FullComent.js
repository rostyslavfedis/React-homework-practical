import React, {Component} from 'react';
import CommentService from "../../service/CommentService";


class FullComent extends Component {
    state={user:null};
    commentService=new CommentService();


    async  componentDidMount() {
        let {id}=this.props;
        let user= await this.commentService.user(id);

        this.setState({user})

    }

    render() {

        let{user}=this.state;

        return (
            <div>

                {user && <div>{user.id}-{user.name}-{user.body}-{user.email}</div>}
            </div>
        );
    }
}

export default FullComent;