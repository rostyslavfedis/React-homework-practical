import React, {Component} from 'react';
import AllUsers from "./component/all-user/AllUsers";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./component/header/Header";
class App extends Component {
    render() {

        return (
          <Header/>
        );
    }
}


export default App;
