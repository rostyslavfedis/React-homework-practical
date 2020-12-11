import React, {Component} from 'react';
import PostServise from "../../service/PostServise";

class FullPost extends Component {
    state={user:null};
    userService=new PostServise();


  async  componentDidMount() {
      let {id}=this.props;
     let user= await this.userService.user(id);

      this.setState({user})

  }

    render() {

        let{user}=this.state;

        return (
            <div>

                {user && <div>{user.id}-{user.body}-{user.title}-{user.userId}</div>}
            </div>
        );
    }
}

export default FullPost;