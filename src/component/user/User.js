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
        let{item,match:{url}}=this.props;
        return (
            <div>
                {item.id}-{item.name}    <Link to={url+'/'+item.id}><span className={'details'}> details</span></Link>
                <hr/>
            </div>
        );
    }
}

export default withRouter(User);