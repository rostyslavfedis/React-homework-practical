import React, {Component} from 'react';

class Cars extends Component {
    render() {
        let {elem}=this.props;
        return (
            <div>
                {elem.model}-{elem.year}-{elem.color}-{elem.motor}
            </div>
        );
    }
}

export default Cars;