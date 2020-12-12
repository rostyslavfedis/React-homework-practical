import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
class User extends Component {
    render() {
        let{item,match:{url}, showPosts}=this.props;
        return (
            <div className={'user'}>
                {item.id}. {item.name}  <div className={'button'}>
                <Link to={url+'/'+item.id}><span className={'details'}> details</span></Link>

                <Link to={url+'/'+item.id}><span className={'post'}> post</span></Link>
                </div>
<hr/>
            </div>

        );
    }
}

export default withRouter(User);