import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllUsers from "../all-user/AllUsers";
import './Header.css'
class Header extends Component {
    render() {
        return (
            <div className={'body'}>
                <div className={'header'}>
                    <Router>
                        <div className={'menu'}>

                        <div className={'header-home'}>
                            <Link  to={'/'}>
                                <h1>home</h1>
                            </Link>
                        </div>
                        <div className={'header-users'}>
                            <Link to={'/users'}>
                               <h2>users</h2>
                            </Link>
                        </div>
                        </div>
                        <Switch>
                            <Route path={'/users'} render={() => <AllUsers/>}/>
                            <Route path={'/'}/>
                        </Switch>
                    </Router>
                </div>


            </div>
        );
    }
}

export default Header;