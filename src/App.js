import React, {Component} from 'react';
import './comments/ComentStyle.css';
import './posts/PostComponent.css';
import './App.css';
import AllPost from "./posts/AllPost";
import AllComments from "./comments/AllComments";


class App extends Component {
    render() {
        return (
            <div>
                <AllPost/>
                <AllComments/>
            </div>
        );
    }
}

export default App;