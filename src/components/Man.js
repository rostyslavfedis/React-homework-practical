import React, {Component} from 'react';

class Man extends Component {
    render() {
        let{item}=this.props;
        return (
            <div>
                <span>{item.name}-{item.id}</span>
            </div>
        );
    }
}

export default Man;