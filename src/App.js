import React, {Component} from 'react';
import Header from "./component/header/Header";
import Post from "./component/post/Post";
class App extends Component {

    render() {

        return (
            <div>
                <Header/>
                <div>
                    <Post/>
                </div>

            </div>

        );
    }
}


export default App;
