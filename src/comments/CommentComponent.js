import React, {Component} from 'react';

class CommentComponent extends Component {
    render() {
        let {item, selectThisComent} = this.props;

        return (
            <div>
                <h4>ID: {item.id}<br/> EMAIL: {item.email} <br/> COMENT: {item.name}</h4>
                <button onClick={() => selectThisComent(item.id)}>SELECT</button>
            </div>
        );
    }
}

export default CommentComponent;