import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import CommentService from "../../service/CommentService";

import FullComent from "../full-comment/FullComent";
import Comemnt from "../comment/Comemnt";

class AllComments extends Component {

    commentService = new CommentService();
    state = {users: []}

    async componentDidMount() {
        let users = await this.commentService.users();
        this.setState({users});
    }
    render() {

        let {users} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    users.map(value => <Comemnt item={value} key={value.id}/>)
                }


                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <FullComent id={id} key={id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllComments);