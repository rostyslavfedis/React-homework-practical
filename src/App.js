import React, {Component} from 'react';
// import PostComponent from "./posts/PostComponent";
// import './posts/PostComponent.css';

import './comments/ComentStyle.css'
import CommentComponent from "./comments/CommentComponent";

class App extends Component {
//     state={posts:[]};
//
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then((response) => response.json())
//             .then(postsFromAPI =>{
//                 this.setState({posts:postsFromAPI})
//             })
//     }
//
//
//     render() {
//         let {posts}=this.state;
//         return (
//             <div>
//             <h1>All Posts</h1>
//                 {
//                   posts.map(value=>(<PostComponent item={value} key={value.id}/>))
//                 }
//             </div>
//         );
//     }
// }


    state={coment:[], chosenComent:null };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then((response) => response.json())
            .then(comentFromAPI=>{
                this.setState({coment:comentFromAPI})
            });
    }
    selectThisComent=(id)=>{
        let chosenComent=this.state.coment.find(value=>value.id===id);
        this.setState({chosenComent});
    }

    render() {
        let {coment, chosenComent}=this.state;
        return (
            <div>
                <h1>All Coments</h1>
                {
                    coment.map(value=>(<CommentComponent
                        item={value}
                        key={value.id}
                        selectThisComent={this.selectThisComent}
                    />))
                }
                <hr/>
                <h1>
                    <span>SELECT COMENT:</span>
                    {

                        chosenComent && <CommentComponent item={chosenComent}/>
                    }
                </h1>
            </div>
        );
    }
}

export default App;
