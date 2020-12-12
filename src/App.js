import React, {Component} from 'react';
import Header from "./component/header/Header";
import {PostService} from "./services/PostService";
class App extends Component {

    render() {

        return (
            <div>
                <Header/>
            </div>

        );
    }
}


export default App;
