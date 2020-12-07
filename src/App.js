



import React, {Component} from 'react';
import './comments/ComentStyle.css';
import './posts/PostComponent.css'
import AllComments from "./comments/AllComments";
import AllPost from "./posts/AllPost";
class App extends Component {
    render() {
        return (
            <div>
                {/*<AllComments/>*/}
                <AllPost/>
            </div>
        );
    }
}

export default App;