import React, {Component} from 'react';

class Woman extends Component {
    render() {
        let{elem}=this.props;
        return (
            <div>
                <span>{elem.name}-{elem.id}</span>
            </div>
        );
    }
}

export default Woman;