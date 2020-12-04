import React, {Component} from 'react';

class Para extends Component {

    render() {

        let [man, woman] =this.props.par;

        return (
            <div>
                {
                    <span>{man.name} - {woman.name}</span>
                }
            </div>
        );
    }
}

export default Para;