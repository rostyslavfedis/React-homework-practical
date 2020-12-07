import React, {Component} from 'react';
import CommentComponent from "./CommentComponent";
import {CommentService} from "../services/CommentService";

class AllComments extends Component {

    commentService= new CommentService();

    state={coment:[], chosenComent:null };

    componentDidMount() {
        this.commentService.getAllComment().then(value=>this.setState({coment: value}))
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

export default AllComments;