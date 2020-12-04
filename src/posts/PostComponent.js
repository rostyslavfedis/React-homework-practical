import React, {Component} from 'react';

class PostComponent extends Component {

    render() {
        let {item}=this.props;
        return (
            <div>
                <button id={'del'}>delete</button>
                <button id={'ed'}>edit</button>
                <button id={'che'}>change</button><br/>
                {item.id}-{item.title}
                <hr/>
            </div>
        );
    }
}

export default PostComponent;