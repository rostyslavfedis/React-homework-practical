import React, {Component} from 'react';

class Womens extends Component {
    render() {
        let{elem}=this.props;
        return (
            <div>

                <span>{elem.name}-{elem.id}</span>
            </div>
        );
    }
}

export default Womens;